import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import data from './Solution.json'

const FeatureTextArea = styled((props) => (
    <Box component="section" {...props}>
        <span className="display-medium h2">{props.title}</span>
        <span className="headline-large neutrals">{props.desc}</span>
        <span style={{font: "instagram-sans", fontSize: "18rem", color: "#ffffff1a", fontWeight: "700",
        position: "absolute", top:"30%", transform: "translate(0%, -70%)"}}>{props.id}</span>
    </Box>
))(({ theme, id }) => ({
    display: "flex",
    flexDirection: "column",
    rowGap: "2rem",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.up("md")]: {
    },
}));

const FeatureDemo = styled((props) => (
    <Box component="section" {...props}>
         <img src={props.image} style={{width: "50%", aspectRatio: "1/1", marginTop: "4rem"}} />
        <FeatureTextArea title={props.title} desc={props.desc} id={props.id}/>    
    </Box>
))(({ theme, direction }) => ({
    display: "flex",
    flexDirection: direction == "image-left" ? "row" : "row-reverse",
    columnGap: "4vw",
    alignItems: "center",
}));

function Solution() {
    return(
        <div style={{position: "relative", width: "70vw", marginLeft: "auto", marginRight: "auto", marginTop: "10rem", marginBottom: "20vh"}}>
            
            <span className='display-large h1' >
               My Scope at TikTok Creation
            </span>
            <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
            As a designer on the TikTok Creation Design Team, I am responsible for shaping innovative tools that empower over 500 million global creators. My work spans three key areas:
            </span>
            {data.map((props, idx) => (
                    <FeatureDemo idx={idx} {...props} />
            ))}
        </div>
        
    )
}

export default Solution;
