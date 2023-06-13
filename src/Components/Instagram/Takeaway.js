import React from "react";
import { styled } from "@mui/material/styles";
import data from "./AREffect.json";
import { Box } from "@mui/material";
import { motion, Variants } from "framer-motion";

const TakeawayTextArea = styled((props) => (
    <Box component="section" {...props}>
      <span className='display-medium h2' style={{ maxWidth: "70vw"}}>
            {props.title}
        </span>
        <span className='headline-large neutrals' style={{ maxWidth: "70vw"}}>
            {props.desc}
        </span>
    </Box>
  
  ))(({ theme }) => ({
      width: "70vw",
      display: "flex",
      flexDirection: "column",
      rowGap: "0.8rem",
      [theme.breakpoints.up("md")]: {
        width: "38vw"
      }
  }));

  const TakeawayImage = styled((props) => (
    <Box component="section" {...props}>
        <img src={props.src} style={{width: "100%", aspectRatio: "4/3", objectFit: "cover"}}/>
    </Box>
  
  ))(({ theme }) => ({
      width: "70vw",
      [theme.breakpoints.up("md")]: {
        width: "38vw"
      }
  }));

const TakewaySection = styled((props) => (
    <Box component="section" {...props} >
        <TakeawayImage src={props.src} />
        <TakeawayTextArea title={props.title} desc={props.desc} link={props.link} />
    </Box>
  ))(({ theme, idx }) => ({
    position: "relative",
    display: "flex",
    rowGap: "4rem",
    width: "70vw",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "2rem",
    marginBottom: "3.6rem",
    [theme.breakpoints.up("md")]: {
        flexDirection: idx == 0 ? "row" : "row-reverse",
        columnGap: "2vw",
    },
    marginLeft:"auto", marginRight: "auto"
}));

function Takeaway() {
    return(
        <div style={{marginTop: "10rem"}}>
            <span className='display-large h1' style={{margin: "1.2rem auto", width: "70vw"}}>
                TAKEAWAY
            </span>
            <span className='headline-large neutrals' style={{margin: "1.2rem auto", maxWidth: "70vw"}}>
                As a result of my work, I've gained two key takeaways that have informed my approach to design:
            </span>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <TakewaySection src="https://ik.imagekit.io/poonr2gma/324073204_731444091414563_8707863354414581286_n_1_.jpeg?updatedAt=1679776504477" 
                    idx={0}
                    title="Adapting Tools to Meet Design Needs" 
                    desc="Through this experience, I have honed my ability to select the appropriate tools for various stages of the design process. For instance, I used Figma to rapidly sketch out my ideas, and then I employed Spark AR and JavaScript to create interactive AR prototypes."/>
                <TakewaySection src="https://ik.imagekit.io/poonr2gma/comprehensive.jpeg?updatedAt=1679774620060" 
                    idx={1}
                    title="Refining Ideas through Inclusive Design" 
                    desc="I generated some opinionated and niche ideas in the beginning, such as selecting favorite singers with hand gestures, which would only appeal to a small audience. However, as a first-party AR designer, I have to make my designs inclusive and help more users."/>
            
            </div>
            
        </div>
        
        
    )
}

export default Takeaway;
