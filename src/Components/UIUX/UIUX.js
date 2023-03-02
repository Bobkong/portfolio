import React from "react";
import "./UIUX.css";
// import { GlobalCanvas, VirtualScrollbar } from "@14islands/r3f-scroll-rig";
// import { Loader } from "@react-three/drei";

// import Lights from "./components/Lights";
import { Avatar, Box } from "@mui/material";
// import Text from "./components/text/Text";
// import StickyText from "./components/text/StickyText";
// import StickyModel from "./components/StickyModel";
// import InlineModel from "./components/InlineModel";
// import StickySnowfall from "./components/StickySnowfall";
// import Aurora from "./components/aurora/Aurora";
import {Panels} from "../LoadingPanel/panels"

import tree from "./assets/desk1.glb";
import { styled } from "@mui/material/styles";
import Projects from "./Projects";


function UIUX() {
  return (
    <div>
      <Panels />
        {/* <div className="uiux-container">
            <VirtualScrollBar />
            <GloabalCanvas />
            <AnimLoader />
        </div> */}
            <Projects />
    </div>

  );
}


// function AnimLoader() {
//     return (
//         <Loader
//             containerStyles={{
//             background: "#111111",
//             opacity: 1 // disable transition out
//             }}
//             innerStyles={{
//             background: "transparent",
//             height: "10px",
//             width: "100vw"
//             }}
//             barStyles={{
//             background: "linear-gradient(90deg, magenta 0%, #51ffad 100%)",
//             height: "14px",
//             width: "100vw",
//             transformOrigin: "center center",
//             transition: "all .14s ease-out"
//             }}
//             dataStyles={{
//             display: "none"
//             }}
//         />
//     );
    
// }

// function GloabalCanvas() {
//     return (
//         <GlobalCanvas
//             gl={{
//             antialias: true,
//             depth: true
//             }}
//             config={{
//             scaleMultiplier: 0.001
//             }}
//             noEvents={true}
//             //shadowMap
//         >
//             <Lights />
//         </GlobalCanvas>
//     );
// }

// function VirtualScrollBar() {
//     return (
//         <VirtualScrollbar>
//             {(bind) => (
//             <article {...bind}>
//                 <header
//                 style={{
//                     height: "100vh",
//                     width: "100%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     position: "relative",
//                     background: "#111111"
//                 }}
//                 >
//                 {/* <Aurora /> */}
//                 </header>
//                 <section
//                 style={{
//                     position: "relative",
//                     height: "150vh",
//                     background: "#111111"
//                 }}
//                 >
//                 <StickyText
//                     style={{
//                     fontSize: "15vmin",
//                     position: "absolute",
//                     width: "100%",
//                     height: "100%",
//                     textAlign: "center",
//                     whiteSpace: "nowrap",
//                     }}
//                 >
//                     Lingshuang is passionate about making the world more enjoyable through design.
//                 </StickyText>
//                 <StickyModel url={tree} position={[0, -0.2, 0]} size={0.07} />
//                 </section>
                
//             </article>
//             )}
//         </VirtualScrollbar>
//     );
// }
const ChapterBox = styled((props) => (
    <Box component="section" {...props} />
  ))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginBottom: "8rem",
    marginLeft: "2rem",
    marginRight: "2rem",
    zIndex: 10000,
    [theme.breakpoints.up("md")]: {
        marginLeft: "6rem",
        marginRight: "6rem",
    },
    [theme.breakpoints.up("lg")]: {
        marginLeft: "8rem",
        marginRight: "8rem",
    },
  }));
  

export default UIUX;
