import React from "react";
import {
  motion,
} from "framer-motion";
import { styled } from "@mui/material/styles";
import data from "./AREffect.json";
import { Box } from "@mui/material";
import "./Instagram.css";

const EffectTextArea = styled((props) => (
  <Box component="section" {...props}>
    <span className='display-large neutrals' style={{marginTop: "1.2rem", maxWidth: "70vw"}}>
          {props.title}
      </span>
      <span className='headline-medium neutrals' style={{marginTop: "1.2rem", maxWidth: "70vw"}}>
          {props.desc}
      </span>
      <div className="dive-effect-button" onClick={()=> window.open(props.link, "_blank")}>
        <span className='label-large neutrals'>
          DIVE INTO EFFECT
        </span>
      </div>
  </Box>

))(({ theme }) => ({
    width: "38vw",
    display: "flex",
    flexDirection: "column",
    rowGap: "1rem"
}));

const EffectSection = styled((props) => (
  <Box component="section" {...props} >
    <div style={{
      position: "relative",
      width: "38vw",
    }}>
      <img src={props.background} style={{width: "100%", aspectRatio: "3/4", objectFit: "cover"}}/>
      <img src={props.src} style={{height: "90%", objectFit: "cover",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "1.2rem"}}/>
    </div>
    <EffectTextArea title={props.title} desc={props.desc} link={props.link} />
  </Box>
))(({ theme, idx }) => ({
  position: "relative",
  width: "38vw",
  display: "flex",
  alignItems: "center",
  rowGap: "4rem",
  width: "70vw",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: "2rem",
  marginBottom: "2rem",
  [theme.breakpoints.up("md")]: {
      flexDirection: idx == 0 ? "row" : "row-reverse",
      columnGap: "4rem"
  },
}));

function AREffect() {
    return(

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "1rem"
        }}>
          <span className='headline-medium neutrals' style={{marginTop: "1.2rem", maxWidth: "70vw", textAlign: "center"}}>
              After 12 weeks of internship, I created two new ways to help users express themselves on Instagram.
          </span>
          {data.map((props, idx) => (
            <EffectSection key={idx} idx={idx} {...props} />
          ))}
        </div>
        
        
    )
}

export default AREffect;
