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
                <Desc content="Unity Developer, AR Prototyping, AR Design"/>
            </div>

            <div style={{
                width: "22vw"
            }}>
                <Title content="BUILT WITH"/>
                <Desc content="C#, Unity 3D, Amazon Web Services"/>
            </div>

            <div style={{
                width: "22vw"
            }}>
                <Title content="TIMELINE"/>
                <Desc content="December 2021"/>
            </div>
               
               
                
        </div>
        
    )
}

export default RoleIntro;
