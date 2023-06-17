import React from "react";
import {
    motion,
  } from "framer-motion";
import { AnimatedCursorContext } from "../HoverText/AnimatedCursorManager";
import { useContext } from "react";

function Title(props) {
    return(
        <span className='headline-large h1' style={{maxWidth: "70vw", marginTop: "1.2rem", textAlign: "center"}}>
            {props.content}
        </span>
    );
}

function Desc(props) {
    return(
        <span className='headline-small neutrals' style={{marginTop: "1.2rem", maxWidth: "70vw", textAlign: "center"}}>
            {props.content}
        </span>
    );
}

function RoleIntro() {

   

    return(
        <div style={{
            width: "70vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            columnGap: "2vw",
            marginTop: "10rem",
            marginBottom: "10rem",
            marginLeft: "auto",
            marginRight: "auto"
        }}>

            <div style={{
                width: "22vw"
            }}>
                <Title content="MY ROLE"/>
                <Desc content="Mobile Front-end Development, Back-end Development, AR Prototyping"/>
            </div>

            <div style={{
                width: "22vw"
            }}>
                <Title content="BUILT WITH"/>
                <Desc content="Java, Python, Square API, SQL, Google ARCore, Firebase, Spark AR, Google Maps, Google Pay"/>
            </div>

            <div style={{
                width: "22vw"
            }}>
                <Title content="TIMELINE"/>
                <Desc content="April - June 2023"/>
            </div>
               
               
                
        </div>
        
    )
}

export default RoleIntro;
