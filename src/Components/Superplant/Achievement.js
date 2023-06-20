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
                I am proud to announce that EasyMed, the revolutionary healthcare solution, has received the prestigious<span className="white headline-large-bold"> First Place and Best Integration of Responsible AI</span> Award, along with a prize of 6000 USD. Outshining 760 participants, EasyMed’s innovation and impact on polypharmacy stood out among the competition.
                </span>

                <span className='headline-large neutrals' style={{marginTop: "1rem"}}>
                Furthermore, Microsoft has recognized the exceptional capabilities of EasyMed by featuring the project on the <a className="white headline-large-bold" href="https://techcommunity.microsoft.com/t5/azure-developer-community-blog/winners-announced-responsible-ai-global-hackathon/ba-p/3600131" style={{textDecoration: "underline", cursor: "none"}} target="_blank" onMouseEnter={textEnter} onMouseLeave={textLeave}>official Azure Developer Community</a>. This recognition highlights the significance of EasyMed in leveraging AI technology and Azure capabilities to revolutionize the way people check drug-drug and drug-food interactions.
                </span>
               
        </div >
        
    )
}

export default Achievenment;
