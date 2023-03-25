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
        <div style={{padding: "4px 12px", border: "1px solid #ffffffaa", borderRadius: "12px", textAlign: "center"}}>
            <span className="neutrals-lighten-1 label-small">{props.pos}</span>
        </div>
        <span className="neutrals headline-large" style={{textAlign: props.pos == "previous" ? "start" : "end"}}>{props.title}</span>
    </Box>
))(({ theme, pos, title }) => ({
    display: title == null ? "none" : "flex",
    flexDirection: "column",
    rowGap: "1rem",
    marginTop: "1.6rem",
    alignItems: pos == "previous" ? "start" : "end"
}));



const WorkSection = styled((props) => (
    <Box component="section" {...props}>
      <img src={props.src} style={{width: "60%", aspectRatio: "4/3", borderRadius: "1.6rem", objectFit: "cover"}}/>
      <WorkSectionText pos={props.pos} title={props.title}/>
    </Box>
))(({ theme, src, pos }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: src == null ? "none" : "flex",
        columnGap: "2rem",
        flexDirection: pos == "previous" ? "row" : "row-reverse"
    },
}));

function PreviousNextWork(props) {

    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const imageEnter = () => {
        cursorStyleHandler("image");
    };

    const imageLeave = () => {
        cursorStyleHandler("default");
        console.log("mouseLeave")
    };

    return(
        <div style={{
            position: "relative",
            width: "70vw",
            display: "flex",
            columnGap: "4vw",
            justifyContent: "space-between",
            flexDirection: "row",
            marginBottom: "6rem",
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            <Link to={props.prevLink} style={{cursor:"none", margin: "0px", width: "38vw"}} onClick={imageLeave} onMouseEnter={imageEnter} onMouseLeave={imageLeave}>
                <WorkSection src={props.prevSrc} title={props.prevTitle} pos="previous"  />
            </Link>
           
            <Link to={props.nextLink} style={{cursor:"none", margin: "0px", width: "38vw"}} onClick={imageLeave} onMouseEnter={imageEnter} onMouseLeave={imageLeave}>
                <WorkSection src={props.nextSrc} title={props.nextTitle} pos="next" />
            </Link>
        </div>
    );
}


  export default PreviousNextWork;