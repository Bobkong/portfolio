import React, { useRef, useMemo, useEffect } from "react";
import {
  useScrollRig,
  useCanvas,
  ScrollScene
} from "@14islands/r3f-scroll-rig";
import { useFrame } from "react-three-fiber";
import { Plane, Sphere, useTexture } from "@react-three/drei";
import { Vector2, RepeatWrapping } from "three";

import vert from "./vert.glsl";
import frag from "./frag.glsl";

import texSrc1 from "./shadertoy-abstract.jpg";
import texSrc2 from "./shadertoy-pebbles.png";

const AuroraMesh = ({ url, scale, scrollState, ...props }) => {
  const material = useRef();
  const { requestFrame, pixelRatio } = useScrollRig();
  const [texture1, texture2] = useTexture([texSrc1, texSrc2]);
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
      u_resolution: { value: null },
      u_texture1: { value: null },
      u_texture2: { value: null },
      u_progress: { value: 0 }
    }),
    []
  );

  useEffect(() => {
    texture1.wrapS = RepeatWrapping;
    texture1.wrapT = RepeatWrapping;
    texture1.flipY = true;
    texture1.repeat.set(1, 1);
    texture1.needsUpdate = true;
    texture1.updateMatrix();
  }, [texture1]);

  useEffect(() => {
    texture2.wrapS = RepeatWrapping;
    texture2.wrapT = RepeatWrapping;
    texture2.flipY = true;
    texture2.repeat.set(1, 1);
    texture2.needsUpdate = true;
    texture2.updateMatrix();
  }, [texture2]);

  useFrame(({ clock }) => {
    if (!scrollState.inViewport) return;
    //material.current.uniforms.u_time.value += 0.05;
    material.current.uniforms.u_time.value = clock.getElapsedTime();
    material.current.uniforms.u_progress.value = scrollState.progress;
    requestFrame();
  });

  const size = Math.min(scale.width, scale.height);

  return (
    <>
      <Plane
        args={[scale.width * 1, scale.height * 1]}
        position={[0, 0, -scale.height * 0]}
        //material-color="orange"
      >
        <shaderMaterial
          ref={material}
          attach="material"
          uniforms={uniforms}
          vertexShader={vert}
          fragmentShader={frag}
          transparent
          uniforms-u_texture1-value={texture1}
          uniforms-u_texture2-value={texture2}
          uniforms-u_resolution-value={[
            scale.pixelWidth * pixelRatio,
            scale.pixelHeight * pixelRatio
          ]}
        />
      </Plane>
      <mesh
        rotation={[-Math.PI / 3.14, 0, 0]}
        position={[0, -scale.height * 0.55, 0]}
      >
        <Plane
          //args={[scale.width * 2, scale.height * 1]}
          args={[scale.width * 1.5, scale.height * 1]}
          material-color="white"
          position={[0, scale.height * 0.55, 0]}
          receiveShadow
        />
        {/* <Sphere
        args={[size * 0.6, 64, 16, 0, Math.PI * 2, 0, Math.PI / 4]}
        material-color="white"
        scale={[2, 0.9, 0.5]}
        rotation={[Math.PI * 0.14, 0, 0]}
        position={[
          -scale.width * 0.5,
          -scale.height * 0.5 - size * 0.3,
          -scale.height * 0.3 - size * 0.3
        ]}
      />
      <Sphere
        args={[size * 0.6, 64, 16, 0, Math.PI * 2, 0, Math.PI / 4]}
        material-color="white"
        scale={[4, 0.85, 0.5]}
        rotation={[Math.PI * 0.14, 0, 0]}
        position={[
          scale.width * 0.25,
          -scale.height * 0.5 - size * 0.3,
          -scale.height * 0.35 - size * 0.3
        ]}
      /> */}
        <Sphere
          args={[scale.width * 0.2, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2]}
          material-color="white"
          scale={[3, 0.5, 0.1]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[
            -scale.width * 0.5,
            scale.width * 0.2,
            scale.width * -0.05
          ]}
          receiveShadow
        />
        <Sphere
          args={[scale.width * 0.2, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2]}
          material-color="white"
          scale={[2, 0.3, 0.5]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[
            scale.width * 0.3,
            scale.width * 0.22,
            scale.width * -0.03
          ]}
          receiveShadow
        />
      </mesh>
    </>
  );
};

const Aurora = ({
  src,
  aspectRatio,
  url,
  parallax,
  size,
  position,
  renderOnTop,
  ...modelProps
}) => {
  const ref = useRef();

  useCanvas(
    <ScrollScene el={ref} scissor={false}>
      {(props) => <AuroraMesh {...props} />}
    </ScrollScene>
  );

  return (
    <div
      style={{ width: "100%", height: "100%", background: "green" }}
      ref={ref}
    ></div>
  );
};

export default Aurora;
