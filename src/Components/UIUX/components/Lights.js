import React, { useRef, useEffect } from "react";
import { useViewportScroll } from "framer-motion";
import { useFrame, useThree } from "react-three-fiber";
import { Fog, DirectionalLightHelper } from "three";
import { interpolate } from "@popmotion/popcorn";
import { useHelper } from "@react-three/drei";

const Lights = () => {
  const { scrollYProgress } = useViewportScroll();
  const sun = useRef();
  const green = useRef();
  const magenta = useRef();
  const { scene, size } = useThree();

  //useHelper(magenta, DirectionalLightHelper, 100, "magenta");

  useEffect(() => {
    const dist = Math.max(size.width * 0.001, size.height * 0.001);
    //scene.fog = new Fog(0x1c1c2d, dist * 1.15, dist * 1.22);
    //scene.fog = new Fog(0xff0000, dist * 1.2, dist * 1.5);
    scene.fog = new Fog(0x1c1c2d, dist * 1.15, dist * 1.33);
  }, [scene, size]);

  useFrame(({ clock }) => {
    sun.current.intensity = interpolate(
      [0, 0.1, 0.7, 0.91, 0.999, 1.0],
      [0.0, 0.7, 0.7, 0.05, 0.05, 2.5]
    )(scrollYProgress.get());

    green.current.intensity = interpolate(
      [0.7, 0.9],
      [0.5, 0]
    )(scrollYProgress.get());
    magenta.current.intensity = interpolate(
      [0.7, 0.9],
      [0.5, 0]
    )(scrollYProgress.get());

    // blink
    const atBottom = scrollYProgress.get() > 0.999;
    const speed = 2;
    const time = (Math.sin(clock.getElapsedTime() * speed) + 1) * 0.5;
    if (atBottom) {
      green.current.position.z = 0.2;
      green.current.intensity = interpolate(
        [0.1, 0.11, 0.89, 0.9],
        [0, 1, 1, 0]
      )(time);
    } else {
      green.current.position.z = -0.2;
    }
    if (atBottom) {
      magenta.current.position.z = 0.2;
      magenta.current.intensity = interpolate(
        [0.1, 0.11, 0.89, 0.9],
        [1, 0, 0, 1]
      )(time);
    } else {
      magenta.current.position.z = -0.2;
    }
  });

  return (
    <>
      {/* <hemisphereLight
        ref={ambient}
        args={[0xddddff, 0xffddff]}
        intensity={0.05}
      /> */}
      <directionalLight ref={sun} intensity={0} position={[0, 2, 2]} />
      <directionalLight
        ref={green}
        color="#51ffad"
        intensity={1}
        position={[0.2, 0, -0.2]}
        /* castShadow */
      />
      <directionalLight
        ref={magenta}
        color="magenta"
        intensity={1}
        position={[-0.2, 0, 0.2]}
        /* castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={2}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
        shadow-bias={-0.0018} */
      />

      {/*
      <spotLight
        color="hotpink"
        intensity={1}
        distance={0}
        decay={0}
        position={[-0.2, 0, -0.2]}
      />
      <spotLight
        color="magenta"
        intensity={1}
        distance={0}
        decay={0}
        position={[0.2, 0, -0.2]}
      />
      */}
    </>
  );
};

export default Lights;
