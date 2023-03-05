import './CircleBackground.css'
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useLayoutEffect } from 'react';
import { degreesToRadians, progress, mix } from "popmotion";
import { useTransform, useScroll, useTime } from "framer-motion";

function Star(props) {
    const ref = useRef(null);
    let p = props.p;
  
    useLayoutEffect(() => {
      const distance = mix(4, 5.5, Math.random());
      const yAngle = mix(
        degreesToRadians(80),
        degreesToRadians(100),
        Math.random()
      );
      const xAngle = degreesToRadians(360) * p;
      if (ref.current != null) {
        ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
      }
    });
  
    return (
      <mesh ref={ref}>
        <sphereGeometry args={[0.03, 64]} />
        <meshBasicMaterial
            wireframe
            color={"#ffffff"}
      />
      </mesh>
    );
};

function Scene() {
    const { scrollYProgress } = useScroll();
    const yAngle = useTransform(
      scrollYProgress,
      [0, 1],
      [0.001, degreesToRadians(180)]
    );
    const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
    const time = useTime();
  
    useFrame(({ camera }) => {
      camera.position.setFromSphericalCoords(
        distance.get(),
        yAngle.get(),
        time.get() * 0.0005
      );
      camera.updateProjectionMatrix();
      camera.lookAt(0, 0, 0);
    });
  
    // useLayoutEffect(() => gl.setPixelRatio(1));
  
    const stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push(<Star p={progress(0, 100, i)} />);
    }
  
    return (
      <>
        {stars}
      </>
    );
  }

function StartAnimation() {
    return (
        <div className='anim'>
            <Suspense fallback={<div>Loading...</div>}>
                <Canvas gl={{ antialias: false }}>
                    <Scene />
                </Canvas>
            </Suspense>
            
        </div>
    )
}

export default StartAnimation;