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
        <img src={props.gif} style={{width: "25%", aspectRatio: "6/13", marginTop: "4rem", borderRadius: "12px"}}/>
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
        <div style={{position: "relative", width: "70vw", marginLeft: "auto", marginRight: "auto", marginTop: "10rem"}}>
            
            <span className='display-large h1' >
                Solution
            </span>
            <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                After eight weeks of innovation, our team developed EasyMed, a mobile application for checking drug and food interactions to ease concerns about polypharmacy. We also leveraged a variety of AI capabilities, including Azure's text-to-speech and speech-to-text services, Google's barcode scanning services, and Azure Machine Learning services.
            </span>

            {data.map((props, idx) => (
                    <FeatureDemo idx={idx} {...props} />
            ))}
        </div>
        
    )
}

export default Solution;
