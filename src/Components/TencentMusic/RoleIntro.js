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

    const { cursorStyleHandler } = useContext(AnimatedCursorContext);
    const imageEnter = () => {
        cursorStyleHandler("image");
      };
    
      const imageLeave = () => {
        cursorStyleHandler("default");
        console.log("mouseLeave")
      };

    return(
        <div>
            <div style={{
                width: "100vw", 
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"}}>
                <motion.div onMouseEnter={imageEnter} onMouseLeave={imageLeave} style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    columnGap: "0.8rem"
                }} onClick={() => {window.open("https://www.tencentmusic.com/en-us/", '_blank')}}>
                    <img src="https://ik.imagekit.io/poonr2gma/616817.png?updatedAt=1686626641767" style={{width: "4rem", height: "4rem"}}/>
                    <span className='display-large h1'>
                        Tencent Music Entertainment
                    </span>
                </motion.div>
                    

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    columnGap: "2vw",
                    marginTop: "8rem"
                }}>
                    <div style={{
                        width: "22vw"
                    }}>
                        <Title content="MY ROLE"/>
                        <Desc content="Mobile Front-end Development"/>
                    </div>

                    <div style={{
                        width: "22vw"
                    }}>
                        <Title content="BUILT WITH"/>
                        <Desc content="Android Studio, Java, Kotlin, XML"/>
                    </div>

                    <div style={{
                        width: "22vw"
                    }}>
                        <Title content="TIMELINE"/>
                        <Desc content="April 2019 - July 2021"/>
                    </div>
                </div>
               
               
                
            </div>
        </div>
        
    )
}

export default RoleIntro;
