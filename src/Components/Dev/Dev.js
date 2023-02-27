import { Suspense} from 'react';
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
// A React animation lib, see: https://github.com/react-spring/react-spring
import { useSpring, a, interpolate } from 'react-spring/three'
import * as THREE from 'three'
import Projects from './Projects';
import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";
import Scene from './Scene'
import { maxWidth } from '@mui/system';
import { Loader } from "@react-three/drei";
import './Dev.css'

const ChapterBox = styled((props) => (
  <Box component="section" {...props} />
))(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "8rem",
  marginLeft: "4rem",
  marginRight: "4rem",
  marginTop: "-6rem",
  [theme.breakpoints.up("md")]: {
    marginLeft: "4rem",
    marginRight: "4rem",
},
}));



function Dev() {
  return (
    <div>
      <div className="dev-container" />
      <div style={{ width: "100vw", height: "100vh"}}>
          <Canvas camera={{ position: [0, 0, 2], fov: 70 }}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
            <ambientLight intensity={0.8} />
          </Canvas>
          <Loader
            containerStyles={{
            background: "#111111",
            opacity: 1 // disable transition out
            }}
            innerStyles={{
            background: "transparent",
            height: "10px",
            width: "100vw"
            }}
            barStyles={{
            background: "linear-gradient(90deg, magenta 0%, #51ffad 100%)",
            height: "14px",
            width: "100vw",
            transformOrigin: "center center",
            transition: "all .14s ease-out"
            }}
            dataStyles={{
            display: "none"
            }}
        />
      </div > 
      <ChapterBox >
          <Projects />
      </ChapterBox>

    </div>
      
      
      
  )
}



export default Dev;