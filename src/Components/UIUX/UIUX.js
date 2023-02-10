// import { useRef, useState} from 'react';
// import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
// import './UIUX.css'
// import { TextureLoader } from 'three/src/loaders/TextureLoader'
// import texture from '../../Assets/texture.png'
// import * as Three from 'three'
// import {Vector3} from 'three'
// import { useGLTF, SpotLight, useDepthBuffer, OrbitControls } from '@react-three/drei'

// function Box(props) {
//     // const mesh = useRef()
//     // const colorMap = useLoader(TextureLoader, texture)
//     // //useFrame((state, delta) => (mesh.current.rotation.x += delta/2, mesh.current.rotation.y += delta/2))
//     // return (
//     //   <mesh
//     //     position={[0, 0, 0]} 
//     //     castShadow 
//     //     receiveShadow 
//     //     ref={mesh}
//     //     {...props}
//     //     >
//     //     <boxGeometry args={[1.2, 1.2, 1.2]} />
//     //     <meshStandardMaterial color={0xffffff}/>
//     //   </mesh>
//     // )

//     const colorMap = useLoader(TextureLoader, texture)
//     // This reference gives us direct access to the THREE.Mesh object
//     const ref = useRef()
//     // Hold state for hovered and clicked events
//     // Subscribe this component to the render-loop, rotate the mesh every frame
//     useFrame((state, delta) => (ref.current.rotation.x += delta))
//     // Return the view, these are regular Threejs elements expressed in JSX
//     return (
//         <mesh
//         {...props}
//         ref={ref}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial map={colorMap} />
//         </mesh>
//     )
//   }

//   function MovingSpot({ vec = new Vector3(), ...props }) {
//     const light = useRef()
//     const viewport = useThree((state) => state.viewport)
//     useFrame((state) => {
//       light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
//       //light.current.target.updateMatrixWorld()
//     })
//     return <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={5} {...props} />
//   }

//   function UIUX() {
//     return (
//         <div style={{ width: "100vw", height: "90vh" }}>
            
//             <Canvas shadows dpr={[1, 2]} camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}>
//                 <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//                 <MovingSpot color="#0c8cbf" position={[-2, 2.5, 0]} />
//                 <MovingSpot color="#b00c3f" position={[3, 2.5, 2]} />
//                 <MovingSpot color="#25E39F" position={[1, 2.5, 0]} />
//                 <Box position={[0, 0, 0]} />
//             </Canvas>
//         </div>
        
        
//     )
//   }



// export default UIUX;