import React from "react";
import { styled } from "@mui/material/styles";
import data from "./AREffect.json";
import { Box } from "@mui/material";

const TakeawayTextArea = styled((props) => (
    <Box component="section" {...props}>
      <span className='display-large white' style={{ maxWidth: "70vw"}}>
            {props.title}
        </span>
        <span className='headline-small neutrals' style={{ maxWidth: "70vw"}}>
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
        <div style={{marginTop: "8rem"}}>
            <span className='headline-large neutrals' style={{margin: "1.2rem auto", maxWidth: "70vw"}}>
                As a result of my work, I've gained several important takeaways that have informed my approach to design:
            </span>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <TakewaySection src="https://ik.imagekit.io/poonr2gma/324073204_731444091414563_8707863354414581286_n_1_.jpeg?updatedAt=1679776504477" 
                    idx={0}
                    title="Adapting Tools to Meet Design Needs" 
                    desc="Through the Instagram AR design experience, I have honed my ability to select the appropriate tools for various stages of the design process. For instance, during the brainstorming phase, I use Figma to rapidly sketch out my ideas, and in the prototyping phase, I employ Spark AR to create interactive AR prototypes."/>
                <TakewaySection src="https://ik.imagekit.io/poonr2gma/comprehensive.jpeg?updatedAt=1679774620060" 
                    idx={1}
                    title="Refining Ideas through Inclusive Design" 
                    desc="While generating initial ideas, I learned that some were opinionated and niche, such as selecting favorite singers with hand gestures, which would only appeal to a small audience. By researching many successful AR experiences and inclusive design principles, I learned a skillset for evaluating and creating designs that are evergreen and non-opinionated."/>
            
            </div>
            
        </div>
        
        
    )
}

export default Takeaway;
