import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/Older-Woman-Medicine-Cabinet_150684340_2020-12_1336x614.jpeg?updatedAt=1681096059647" style={{width: "100%", height: "100vh", objectFit: "cover", opacity: "0.2", filter: "alpha(opacity=60)"}}/>
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
                        During my visit to a geriatric facility as part of the Human-Centered Computing for Health class at UCSD, I was profoundly struck by the prevalent issue of polypharmacy among senior adults. It became evident that many of them were taking multiple medications without sufficient consideration of the potential adverse interactions, both with other drugs and the food they consume.
                    </span>
                    
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        During this time, Microsoft was hosting the Microsoft Azure Responsible AI Global Hackathon. Given my belief that AI could be a valuable tool in addressing the issue of adverse drug and food interactions, I decided to participate alongside five other UCSD students to tackle this problem.
                    </span>
            </div >
            
        </div>
    )
}

export default Problem;
