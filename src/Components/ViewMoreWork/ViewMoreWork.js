import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { AnimatedCursorContext } from "../HoverText/AnimatedCursorManager";
import {
    motion,
  } from "framer-motion";
import { Link } from 'react-router-dom';

const WorkSectionText = styled((props) => (
    <Box component="section" {...props} >
        <span className="h1 display-medium" style={{textAlign: "center"}}>{props.title}</span>
    </Box>
))(({ theme, }) => ({
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
}));



const WorkSection = styled((props) => (
    <Box component="section" {...props}>
        <motion.div whileHover={{scale: 1.1}} style={{position: "relative"}}>
            <img src={props.src} style={{width: "34vw", aspectRatio: "5/3", objectFit: "cover", background: "#000000", opacity: "0.3"}}/>
            <WorkSectionText pos={props.pos} title={props.title}/>
        </motion.div>
    </Box>
))(({ theme, src }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex"
    },
}));

function ViewMoreWork(props) {

    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const imageEnter = () => {
        cursorStyleHandler("image");
    };

    const imageLeave = () => {
        cursorStyleHandler("default");
        console.log("mouseLeave")
    };

    return(
        <div>
            <hr style={{background: "#ffffff", maxWidth: "70vw", marginTop: "8rem", marginLeft: "auto", marginRight: "auto", opacity: "0.6"}} />
            <p className='display-large neutrals' style={{maxWidth: "70vw", marginTop: "8rem", marginLeft: "auto", marginRight: "auto"}}>
                More Projects
            </p>
            <motion.div 
            style={{
            position: "relative",
            display: "flex",
            columnGap: "2vw",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "6rem",
            marginLeft: "auto",
            marginRight: "auto",
            }}>
                
                <Link to={props.firstLink} style={{cursor:"none", margin: "0px"}} onClick={imageLeave} onMouseEnter={imageEnter} onMouseLeave={imageLeave}>
                    <WorkSection src={props.firstSrc} title={props.firstTitle}  />
                </Link>
            
                <Link to={props.secondLink} style={{cursor:"none", margin: "0px"}} onClick={imageLeave} onMouseEnter={imageEnter} onMouseLeave={imageLeave}>
                    <WorkSection src={props.secondSrc} title={props.secondTitle} />
                </Link>
            </motion.div>
        </div>
        
    );
}


  export default ViewMoreWork;