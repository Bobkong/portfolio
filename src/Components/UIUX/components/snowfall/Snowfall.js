import React, { useMemo, useRef, useEffect } from "react";
import { useFrame, useThree } from "react-three-fiber";
import vert from "./vert.glsl";
import frag from "./frag.glsl";
import { Vector2, MathUtils } from "three";
import { useViewportScroll } from "framer-motion";
import { interpolate } from "@popmotion/popcorn";

function Snowfall({ pointCount = 700, scrollState, scale, scene }) {
  const { scrollYProgress, scrollY } = useViewportScroll();
  const tween = useRef({ velocity: 0 }).current;

  const size = Math.max(scale.width, scale.height) * 1;

  const initialPositions = useMemo(() => [], []);
  const initialVelocities = useMemo(() => [], []);
  const initialAccelerations = useMemo(() => [], []);
  for (let i = 0; i < pointCount; i++) {
    initialPositions.push(-1 * size * 1 + Math.random() * size * 2);
    initialPositions.push(Math.random() * -size * 2);
    initialPositions.push(-1 * size * 1 + Math.random() * size * 2);
    initialVelocities.push(0.01 + Math.random() * 0.001);
    initialVelocities.push(-0.14 + Math.random() * -0.02);
    initialVelocities.push(0.01 + Math.random() * 0.001);
    /*initialVelocities.push(0);
    initialVelocities.push(-0.05);
    initialVelocities.push(0);*/
    initialAccelerations.push(Math.random() * pointCount);
    initialAccelerations.push(0);
    initialAccelerations.push(0);
  }

  const positions = useMemo(() => new Float32Array(initialPositions), [
    initialPositions
  ]);
  const velocities = useMemo(() => new Float32Array(initialVelocities), [
    initialVelocities
  ]);
  const accelerations = useMemo(() => new Float32Array(initialAccelerations), [
    initialAccelerations
  ]);
  const uniforms = useMemo(
    () => ({
      time: { value: 1.0 },
      whirl: { value: 0 }
    }),
    []
  );

  const lastY = useRef(0);
  const vel = useRef(0);
  useEffect(
    () =>
      scrollY.onChange((y) => {
        vel.current = y - lastY.current;
        lastY.current = y;
      }),
    [scrollY]
  );

  const geom = useRef();
  useFrame(({ clock }) => {
    if (geom.current) {
      tween.velocity = MathUtils.lerp(tween.velocity, vel.current, 0.1);
      geom.current.material.uniforms.time.value +=
        0.01 + tween.velocity * 0.001;
      geom.current.material.uniforms.whirl.value +=
        0.01 - tween.velocity * 0.01; //Math.min(vel.current * 0.2, 0.1);
      //geom.current.geometry.verticesNeedUpdate = true;
      //geom.current.rotation.x = Math.PI / 5 - (Math.min(1, scrollState.progress) * Math.PI) / 5;

      geom.current.position.y =
        Math.max(0, scrollState.visibility - 1) * scale.viewportHeight * 3;
    }
    vel.current = MathUtils.lerp(vel.current, 0, 0.1);
    //tween.velocity = MathUtils.lerp(tween.velocity, 0, 0.01);
  });

  return (
    <points
      ref={geom}
      position={[0, 0, 0]}
      scale={[1, 0.3, 0.5]}
      //rotation={[Math.PI / 3, 0, 0]}
    >
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "velocity"]}
          count={velocities.length / 3}
          array={velocities}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "acceleration"]}
          count={accelerations.length / 3}
          array={accelerations}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        attach="material"
        uniforms={uniforms}
        vertexShader={vert}
        fragmentShader={frag}
        vertexColors
        transparent
      />
    </points>
  );
}

export default Snowfall;
