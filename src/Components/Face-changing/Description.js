import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AnimatedCursorContext } from "../HoverText/AnimatedCursorManager";
import {useContext} from 'react';

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/face-swap2.jpeg?updatedAt=1687229914783" style={{width: "100%", height: "100vh", objectFit: "cover", opacity: "0.2", filter: "alpha(opacity=60)"}}/>
    </Box>
))(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
    background: "#000000"
}));

function Description() {
    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const textEnter = () => {
        cursorStyleHandler("text");
      };
    
      const textLeave = () => {
        cursorStyleHandler("default");
      };

    return(
        <div style={{position: "relative"}}>
            <BgImage />
            <div style={{width: "70vw",
                position: "absolute", 
                top: "50%", 
                left: "50%",
                zIndex: "100", 
                transform: "translate(-50%, -50%)",}}>
                    <span className='display-large h1' >
                        Description
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        Face-changing is an ancient Chinese dramatic art that forms an integral part of Chinese opera. It involves performers wearing vibrant masks that depict well-known characters from the opera, seamlessly changing from one face to another in a fraction of a second. Recognized as a UNESCO Intangible Cultural Heritage, I am passionate about introducing this captivating art form to a wider audience. To achieve this, I conceived and developed an augmented reality (AR) effect specifically for face-changing.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        Using Photoshop, I crafted a variety of masks in different colors. Leveraging the face-tracking technology in Spark AR, I seamlessly overlay these masks onto the user's face. By simply tapping the screen, users can effortlessly transition between the masks.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        This filter allows everyone to experience and explore the wonders of this remarkable Chinese traditional art! Feel free to try it out by opening <a href="https://www.instagram.com/ar/985596532071496/" className="white headline-large-bold" target="_blank" style={{"textDecoration": "underline", "cursor": "none"}} onMouseEnter={textEnter} onMouseLeave={textLeave}>this link</a> on your phone.
                    </span>
            </div >
            
        </div>
    )
}

export default Description;
