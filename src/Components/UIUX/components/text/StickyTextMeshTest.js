import React from "react";
import { useScrollRig } from "@14islands/r3f-scroll-rig";
import { useFrame, useResource, extend } from "react-three-fiber";
import { MeshWobbleMaterial, shaderMaterial, Sphere } from "@react-three/drei";
import { interpolate } from "@popmotion/popcorn";
import { Color, DoubleSide } from "three";

import WebGLText from "./WebGLText";

const ColorShiftMaterial = shaderMaterial(
  { time: 0, color: new Color(0.2, 0.0, 0.1), opacity: 0, progress: 0 },
  // vertex shader
  `
    uniform float time;
    uniform float progress;
    varying vec2 vUv;

    vec3 rotateAxis(vec3 p, vec3 axis, float angle) {
      return mix(dot(axis, p)*axis, p, cos(angle)) + cross(axis,p)*sin(angle);
    }

    mat4 translate(float x, float y, float z){
      return mat4(
          vec4(1.0, 0.0, 0.0, 0.0),
          vec4(0.0, 1.0, 0.0, 0.0),
          vec4(0.0, 0.0, 1.0, 0.0),
          vec4(x,   y,   z,   1.0)
      );
  }

    mat4 rotationMatrix(vec3 axis, float angle)
    {
        axis = normalize(axis);
        float s = sin(angle);
        float c = cos(angle);
        float oc = 1.0 - c;

        return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                    0.0,                                0.0,                                0.0,                                1.0);
    }

    void main() {
      vUv = uv;
      vec3 pos = position;

      

      //pos.y += sin(time * 2. + pos.x * 20.) * .01;
      //pos = rotateAxis(pos, vec3(1., 0., 0.), sin(time *2. + pos.x * 10.) * 3.14*.25);
      
      pos.z = .8 - pos.x*0.5;

      //float angle = pos.x * 3.14*4.;
      
      float spinDistance = 1. * progress;
      float angle = (pos.x - spinDistance) * 3.14*4.;
      
      //pos.z = .8 - angle*0.1;
      pos = rotateAxis(pos, vec3(0., 1., 0.), angle);
      
      // make spiral
      //pos.y += angle * 0.01 - time * 0.1;
      float startOffset = 1.;
      pos.y += angle * 0.14 + pos.y*6.0 + startOffset;

      

   
      
      mat4 translate3 = mat4(1.0, 0.0, 0.0, -2.,
                            0.0, 1.0, 0.0, -20.,
                            0.0, 0.0, 1.0, pos.z,
                            0.0, 0.0, 0.0, 1.0);

      mat4 translate2 = translate(-100., 2000., 0.);

      //mat4 rotMat = rotationMatrix(vec3(0.,1.,0.), time * -2.);
      //mat4 rotateIt = inverse(translate) * rotMat * translate;
      //mat4 rotateIt = translate2;
      //vec3 pos2 = (vec4(pos, 0.0) * rotateIt).xyz;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float time;
    uniform vec3 color;
    uniform float opacity;
    uniform float progress;

    varying vec2 vUv;

    void main() {
      
      //float focus = smoothstep(0., 1., progress);
      //float focus = abs((1. - progress) - vUv.x);
      //float focus = ceil(progress - vUv.x);
      float focus = 1. - pow(abs(progress - vUv.x), .4) * 1.2;
      gl_FragColor.rgba = vec4(color, focus);
    }
  `
);

extend({ ColorShiftMaterial });

const StickyTextMesh = ({
  children,
  scrollState,
  scale,
  el,
  font,
  rotZ = 0,
  direction = 1
}) => {
  const material = useResource();
  const mesh = useResource();
  const { requestFrame } = useScrollRig();

  useFrame(() => {
    if (scrollState.inViewport) {
      requestFrame();

      material.current.time += 0.01;
      material.current.progress = scrollState.visibility;

      /* material.current.opacity = interpolate(
        [0.2, 0.4, 0.6, 0.8],
        [0, 1, 1, 0]
      )(scrollState.visibility); */

      /* mesh.current.rotation.y = interpolate(
        [0, 0.5, 1],
        [Math.PI * 0.45 * direction, 0, -Math.PI * 0.45 * direction]
      )(scrollState.visibility); */

      //mesh.current.rotation.y -= 0.01;
    }
  });

  return (
    <mesh rotation={[Math.PI / 10, 0, 0]} scale={[0.2, 0.2, 0.2]}>
      {/* <Sphere args={[0.01]} /> */}
      <mesh ref={mesh}>
        {/* 
      <MeshWobbleMaterial
        ref={material}
        factor={0}
        transparent={true}
      />
      */}
        {/* <meshLambertMaterial
          ref={material}
          transparent
          depthTest={false}
          depthWrite={false}
          fog
        /> */}
        <colorShiftMaterial
          ref={material}
          attach="material"
          color="orange"
          transparent
          opacity={1}
          depthOffset={0}
          side={DoubleSide}
        />
        <WebGLText
          el={el}
          font={font}
          material={material.current}
          scale={scale}
          glyphGeometryDetail={10}
          position={[0, 0, 0]}
          maxWidth={Infinity}
        >
          {children}
        </WebGLText>
      </mesh>
    </mesh>
  );
};

export default StickyTextMesh;
