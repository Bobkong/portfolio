import React, { useRef, useEffect } from "react";
import {
  useScrollRig,
  useCanvas,
  ScrollScene
} from "@14islands/r3f-scroll-rig";
// import { MathUtils, CameraHelper, FrontSide, BackSide, DoubleSide } from 'three'
import { useFrame } from "react-three-fiber";
import { useGLTF, Shadow, softShadows } from "@react-three/drei";
// import { StandardEffects } from './StandardEffects'

// softShadows()

const ModelMesh = ({
  url,
  scale,
  camera,
  scene,
  scrollState,
  parallax = 0,
  size = 1,
  position = [0, 0, 0],
  ...props
}) => {
  const mesh = useRef();
  const light = useRef();
  const { requestFrame, preloadScene } = useScrollRig();

  const gltf = useGLTF(url);

  useFrame(() => {
    if (!scrollState.inViewport) return;

    mesh.current.rotation.y =
      Math.PI / 10 + scrollState.progress * Math.PI * 1.5;
    mesh.current.rotation.x =
      Math.PI / 4 - scrollState.progress * Math.PI * 0.4 * 1;

    // light.current.intensity = MathUtils.lerp(0.0, 1.0, scrollState.viewport*2)
    //   const parallaxProgress = scrollState.progress * 2 - 1
    //   mesh.current.position.y = parallax * parallaxProgress

    if (scrollState.inViewport) {
      requestFrame();
    }
  });

  // preload Model
  useEffect(() => {
    preloadScene(scene, camera);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gltf]);

  useEffect(() => {
    if (mesh.current) {
      mesh.current.traverseVisible((mesh) => {
        // mesh.castShadow = true
        // mesh.receiveShadow = true
        //mesh.renderOrder = 100;
        if (mesh.material) {
          // mesh.material.side = DoubleSide
          // mesh.material.shadowSide = FrontSide
          // mesh.material.shadowSide = BackSide
          // mesh.material.shadowSide = DoubleSide
          // mesh.material.depthWrite = false;
          //mesh.material.side = FrontSide;
          //mesh.material.depthTest = false;
          //console.log("material", mesh.material);
          //mesh.material.vertexColors = true;
        }
      });
    }
  }, [mesh]);

  size = Math.min(scale.width, scale.height) * size;
  return (
    <>
      <mesh
        position={[0, 0, size * -0.5]}
        ref={mesh}
        {...props}
        //onPointerOver={() => console.log("over")}
      >
        <primitive
          object={gltf.scene}
          scale={[size, size, size]}
          vertexColors
        />

        <Shadow
          scale={[size * 3, size * 3, 1]}
          opacity={0.3}
          position={[size * 0, -size * 1.8, 0]}
          rotation={[-Math.PI * 0.5, 0, 0]}
          fog
          colorStop={0.1}
        />
      </mesh>
    </>
  );
};

const InlineModel = ({
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
    <ScrollScene
      el={ref}
      //debug
      //renderOnTop={renderOnTop}
      //scaleMultiplier={0.001}
      scissor={false}
    >
      {(props) => {
        return (
          <ModelMesh
            {...props}
            url={url}
            parallax={parallax}
            size={size}
            position={position}
            {...modelProps}
          />
        );
      }}
    </ScrollScene>
  );

  return (
    <div
      style={{ width: "100%", height: "100%", background: "green" }}
      ref={ref}
    ></div>
  );
};

export default InlineModel;
