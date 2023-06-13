import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/Older-Woman-Medicine-Cabinet_150684340_2020-12_1336x614.jpeg?updatedAt=1681096059647" style={{width: "100%", height: "100vh", objectFit: "cover", opacity: "0.3", filter: "alpha(opacity=60)"}}/>
    </Box>
))(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
    background: "#000000"
}));

function Problem() {
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
                        Problem
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        During a visit to a geriatric facility, while taking the Human-Centered Computing for Health class at UCSD, I was struck by the fact that many senior adults take multiple drugs (which also called "<span className="easymed-theme headline-large-bold">polypharmacy</span>") without considering potential adverse interactions, as well as with the food they consume.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        During this time, Microsoft was hosting the Microsoft Azure Responsible AI Global Hackathon. Given my belief that AI could be a valuable tool in addressing the issue of adverse drug and food interactions, I decided to participate alongside five other UCSD students to tackle this problem.
                    </span>
            </div >
            
        </div>
    )
}

export default Problem;
