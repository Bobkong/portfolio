import { Suspense} from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three'
import Projects from './Projects';
import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";
import Scene from './Scene'
import { maxWidth } from '@mui/system';

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
      <div style={{ width: "100vw", height: "100vh"}}>
          <Canvas camera={{ position: [0, 0, 2], fov: 70 }}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
            <ambientLight intensity={0.4} />
          </Canvas>
      </div > 
      <ChapterBox >
          <Projects />
      </ChapterBox>


    </div>
      
      
      
  )
}



export default Dev;