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
                <span className='headline-large neutrals' style={{marginTop: "1rem"}}>
                    I am proud to announce that ARound, the revolutionary navigation solution, has received the prestigious<span className="white headline-large-bold"> Best of Navigation Award</span>, along with a prize of 5000 USD in the ARCore Geospatial API Challenge. Outshining 1100 participants, ARound's innovation and impact on navigation stood out among the competition.
                </span>

                <span className='headline-large neutrals' style={{marginTop: "1rem"}}>
                Furthermore, Google has recognized the exceptional capabilities of ARound by featuring the project on the<a className="white headline-large-bold" href="https://developers.google.com/ar/content?keywords=arcoregeospatialhackathon" style={{textDecoration: "underline", cursor: "none"}} target="_blank" onMouseEnter={textEnter} onMouseLeave={textLeave}> official ARCore website</a>. This recognition highlights the significance of ARound in leveraging augmented reality and Google ARCore Geospatial API to revolutionize the way people navigate and connect with others.
                </span>
               
        </div >
        
    )
}

export default Achievenment;
