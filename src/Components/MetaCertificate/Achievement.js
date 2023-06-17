import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AnimatedCursorContext } from "../HoverText/AnimatedCursorManager";
import {useContext} from 'react';

function Achievenment() {

    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const textEnter = () => {
      cursorStyleHandler("text");
    };
  
    const textLeave = () => {
      cursorStyleHandler("default");
    };
    return(
        <div style={{width: "70vw",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10rem",
            marginBottom: "10rem"}}>
                <span className='display-large h1' >
                    Achievement
                </span>
                <span className='headline-large neutrals' style={{display: "inline"}}>
                    Through professional training with Meta, I have honed my skills in web front-end development and I am proud to have earned four certificates from Meta, attesting to my proficiency in various aspects of web development. These certificates validate my knowledge and expertise in web development.
                </span>
                <img src="https://ik.imagekit.io/poonr2gma/certificate-min.png?updatedAt=1686975087782" style={{
                    width: "100%",
                    aspectRatio: "22/17",
                    objectFit: "cover",
                    marginTop: "2rem"
                }}/>
        </div >
        
    )
}

export default Achievenment;
