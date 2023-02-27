import React, { useRef, useEffect } from "react";
import {
  useScrollRig,
  useCanvas,
  ScrollScene
} from "@14islands/r3f-scroll-rig";
// import { MathUtils, CameraHelper, FrontSide, BackSide, DoubleSide } from 'three'
import { useFrame, useThree } from "react-three-fiber";
import { useGLTF, Shadow, softShadows } from "@react-three/drei";
import { Fog, FrontSide } from "three";
import { interpolate } from "@popmotion/popcorn";


// softShadows()

const ModelMesh = ({
  url,
  scale,
  camera,
  scene,
  scrollState,
  parallax = 0,
  size = 1,
  position = [0, 0, 0]
}) => {
  const mesh = useRef();
  const model = useRef();
  const shadow = useRef();

  const { requestFrame, preloadScene } = useScrollRig();
  const { scene: gScene } = useThree();
  const gltf = useGLTF(url);
  var scrollTop = 0;

  size = Math.min(scale.viewportWidth, scale.viewportHeight) * size;

  useFrame(({ clock }) => {
    if (!scrollState.inViewport) return;

    model.current.rotation.y += Math.sin(clock.getElapsedTime()) * 0.003;

    mesh.current.rotation.y = Math.PI / 2 + scrollState.progress * Math.PI * -5;

    mesh.current.rotation.x =
      Math.PI / 8 - scrollState.progress * Math.PI * 0.2;

    /* mesh.current.scale.setScalar(
      interpolate([0, 0.1, 0.7, 1], [0.4, 1, 1, 0.3])(scrollState.progress)
    );
    mesh.current.position.x = interpolate(
      [0, 0.1],
      [scale.viewportWidth * 0.14, 0]
    )(scrollState.progress);

    mesh.current.position.y = interpolate(
      [0, 0.2, 1, 1.2],
      [-scale.viewportHeight * 0.3, 0, 0, scale.viewportHeight * 1.5]
    )(scrollState.visibility); */

    if (scrollState.inViewport) {
      requestFrame();
    }


    if (document.documentElement.scrollTop > window.innerHeight * 2.2) {
      mesh.current.scale.x = 0;
      mesh.current.scale.y = 0;
      mesh.current.scale.z = 0;
    } else if (document.documentElement.scrollTop < window.innerHeight * 0.3) {
      mesh.current.scale.x = 1;
      mesh.current.scale.y = 1;
      mesh.current.scale.z = 1;
    }
    else if (document.documentElement.scrollTop > window.innerHeight * 1.5) {
      if (document.documentElement.scrollTop > scrollTop) {
        // scroll down
        console.log("scroll down")
        if (mesh.current.scale.x > 0) {
          mesh.current.scale.x -= 0.02;
          mesh.current.scale.y -= 0.02;
          mesh.current.scale.z -= 0.02;
        } else {
          mesh.current.scale.x = 0;
          mesh.current.scale.y = 0;
          mesh.current.scale.z = 0;
        }
        
      } else if (document.documentElement.scrollTop < scrollTop){
        // scroll up
        console.log("scroll up")
        if (mesh.current.scale.x < 1) {
          mesh.current.scale.x += 0.02;
          mesh.current.scale.y += 0.02;
          mesh.current.scale.z += 0.02;
        } else {
          mesh.current.scale.x = 1;
          mesh.current.scale.y = 1;
          mesh.current.scale.z = 1;
        }
      }
    }
    scrollTop = document.documentElement.scrollTop
    
  });

  // preload Model
  useEffect(() => {
    // console.log("gltf", gltf);
    preloadScene(scene, camera);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gltf]);

  useEffect(() => {
    if (mesh.current) {
      mesh.current.traverseVisible((mesh) => {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        //mesh.renderOrder = 100;
        if (mesh.material) {
          // mesh.material.side = DoubleSide
          // mesh.material.shadowSide = FrontSide
          // mesh.material.shadowSide = BackSide
          // mesh.material.shadowSide = DoubleSide
          // mesh.material.depthWrite = false;
          //mesh.material.side = FrontSide;
          //mesh.material.depthTest = false;
        }
      });
    }
  }, [mesh]);

  return (
    <>
      {/* <ambientLight intensity={0.5} /> */}
      {/*
      <directionalLight
        intensity={0.5}
        ref={light}
        // position={[-1, 1, 1]}
        position={[-scale.height * 1, scale.height * 2, scale.height * 2]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={scale.height * 5}
        shadow-camera-left={-scale.width}
        shadow-camera-right={scale.width}
        shadow-camera-top={scale.width}
        shadow-camera-bottom={-scale.width}
        shadow-bias={-0.0018}
        // shadow-bias={-0.004}
      />
      */}
      <mesh position={[0, 0, 0]} ref={mesh}>
        <primitive
          ref={model}
          object={gltf.scene}
          position={position}
          scale={[size, size, size]}
        />

        {/* <Shadow
          ref={shadow}
          scale={[size * 1.8, size * 1.8, 1]}
          //opacity={0.17}
          opacity={0.5}
          position={[0, -size * 1.7, 0]}
          rotation={[-Math.PI * 0.5, 0, 0]}
          material-depthTest={false}
          material-depthWrite={false}
        /> */}
      </mesh>
    </>
  );
};

const StickyModel = ({
  src,
  aspectRatio,
  url,
  parallax,
  size,
  position,
  renderOnTop
}) => {
  const ref = useRef();

  useCanvas(
    <ScrollScene el={ref} debug={false} positionFixed scissor={false}>
      {(props) => {
        return (
          <>
            <ModelMesh
              {...props}
              url={url}
              parallax={parallax}
              size={size}
              position={position}
            />
          </>
        );
      }}
    </ScrollScene>
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "green"
      }}
      ref={ref}
    ></div>
  );
};

export default StickyModel;
