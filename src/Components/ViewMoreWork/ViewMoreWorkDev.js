import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { AnimatedCursorContext } from "../HoverText/AnimatedCursorManager";
import data from "../Dev/ProjectData.json";
import {
    motion,
} from "framer-motion";
import { Link } from 'react-router-dom';
import { ProjectImageItem } from "../Dev/Projects";

function ViewMoreWork(props) {

    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const imageEnter = () => {
        cursorStyleHandler("image");
    };

    const imageLeave = () => {
        cursorStyleHandler("default");
        console.log("mouseLeave")
    };

    const projects = [];
    for (let i = 0; i < data.length; i++) {
        data[i].projects.map((item, idx) => {
            if (item.title === props.firstTitle) {
                projects[0] = (<Box style={{ cursor: "none", margin: "0px" }} onClick={imageLeave} onMouseEnter={imageEnter} onMouseLeave={imageLeave}>
                    <ProjectImageItem src={item.src} title={item.title} fromMoreWork={true} link={item.link} skill = {item.skill} />
                </Box>)
            }

            if (item.title === props.secondTitle) {
                projects[1] = (<Box style={{ cursor: "none", margin: "0px" }} onClick={imageLeave} onMouseEnter={imageEnter} onMouseLeave={imageLeave}>
                    <ProjectImageItem src={item.src} title={item.title} fromMoreWork={true} link={item.link} skill = {item.skill}/>
                </Box>)
            }
        })
    }

    return (
        <div>
            <hr style={{ background: "#ffffff", maxWidth: "70vw", marginTop: "8rem", marginLeft: "auto", marginRight: "auto", opacity: "0.6" }} />
            <p className='display-large neutrals' style={{ width: "70vw", marginTop: "8rem", marginLeft: "auto", marginRight: "auto" }}>
                More Projects
            </p>
            <motion.div
                style={{
                    position: "relative",
                    display: "flex",
                    columnGap: "2vw",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "6rem",
                    marginTop: "2rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}>

                {projects}
            </motion.div>
        </div>

    );
}


export default ViewMoreWork;