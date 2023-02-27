import React from "react";
import { useScrollRig } from "@14islands/r3f-scroll-rig";
import { useFrame, useResource } from "react-three-fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { interpolate } from "@popmotion/popcorn";

import WebGLText from "./WebGLText";

const WobblyTextMesh = ({
  children,
  scrollState,
  scale,
  el,
  font,
  rotZ = 0,
  direction = 1,
  ...props
}) => {
  const material = useResource();
  const mesh = useResource();
  const { requestFrame } = useScrollRig();

  useFrame(() => {
    if (scrollState.inViewport) {
      requestFrame();
      //material.current.factor = scrollState.progress * 0.5; //Math.max(0, scrollState.progress - 0.5) * 2
      //material.current.opacity = Math.sin(scrollState.visibility * Math.PI);
      /*
      if (scrollState.viewport < 2.0) {
        material.current.opacity = interpolate(
          [1.0, 1.5],
          [0, 1]
        )(scrollState.viewport);
      } else {
        material.current.opacity = interpolate(
          [2.0, 3.0],
          [1, 0]
        )(scrollState.viewport);
      }
      */

      material.current.opacity = interpolate(
        [0.5, 0.7],
        [0, 1]
      )(scrollState.visibility);
      /*
      mesh.current.rotation.y = interpolate(
        [0, 0.5, 1],
        [(Math.PI / 2) * direction, 0, (-Math.PI / 2) * direction]
      )(scrollState.visibility);*/
    } else {
      material.current.opacity = 0;
    }
  });

  return (
    <mesh rotation={[0, 0, rotZ]}>
      <mesh ref={mesh}>
        {/* 
      <MeshWobbleMaterial
        ref={material}
        factor={0}
        transparent={true}
      />
      */}
        <meshLambertMaterial
          ref={material}
          //emissive="#fff"
          //transparent
          //depthTest={false}
          //depthWrite={false}
        />
        <WebGLText
          el={el}
          font={font}
          material={material.current}
          scale={scale}
          position={[0, 0, scale.height * 0.17]}
          {...props}
        >
          {children}
        </WebGLText>
      </mesh>
    </mesh>
  );
};

export default WobblyTextMesh;
