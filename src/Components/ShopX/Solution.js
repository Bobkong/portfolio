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
         <video src={props.video} autoPlay="autoplay" loop style={{width: "25%", aspectRatio: "6/13", marginTop: "4rem", borderRadius: "18px"}}></video>
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
            After an intensive two-month effort, Yilin and I successfully conceptualized, designed, developed, and launched ShopX from the ground up. ShopX leverages cutting-edge technologies such as Square API, Google ARCore, Meta Spark Studio, Microsoft Azure, and Google Maps API to deliver a dynamic platform, showcasing a robust set of core features:
            </span>
            {data.map((props, idx) => (
                    <FeatureDemo idx={idx} {...props} />
            ))}
        </div>
        
    )
}

export default Solution;
