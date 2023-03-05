import { Fragment, useRef, useState, useContext } from "react";
import { Box, CircularProgress, IconButton, useMediaQuery } from "@mui/material";
import data from "./ProjectData.json";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import LazyImage from "../Lazy/LazyImage";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./Projects.css"
import { AnimatedCursorContext } from "../HoverText/AnimatedCursorManager";

const ProjectImageItem = ({ title, src, tech, idx }) => {
    const itemRef = useRef();
    const margin = 368 - 16 * idx;

    const [hover, setHover] = useState(false)

    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const imageEnter = () => {
      cursorStyleHandler("image");
    };
  
    const imageLeave = () => {
      cursorStyleHandler("default");
    };

    return (
        <ImageListItem key={title} sx={{ overflow: "visible" }} ref={itemRef}>
            <motion.div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <motion.img src={src} alt={title} style={{width: "42vw", aspectRatio: "16/11", objectFit: "cover"}} onMouseEnter={imageEnter} onMouseLeave={imageLeave}/>
                <ImageListItemBar
                    title={title}
                    subtitle={`${tech}`}
                    style = {{display: hover ? "block" : "none"}}

                    sx={(theme) => ({
                        fontSize: "0.8rem",
                        fontFamily: "instagram-sans",
                        [theme.breakpoints.up("md")]: {
                            fontSize: "1.2rem",
                            letterSpacing: "0.1rem",
                        },
                        ".MuiImageListItemBar-title": {
                            fontSize: "1em",
                            lineHeight: 1.4,
                            color: "#ffffff",
                            fontWeight: 700,
                            marginTop: "0.6rem",
                            marginLeft: "0.6rem"
                        },
                        ".MuiImageListItemBar-subtitle": {
                            fontSize: "0.6em",
                            color: "#cacaca",
                            marginTop: "0.6rem",
                            marginBottom: "0.6rem",
                            marginLeft: "0.6rem"
                        },
                    })}
                />
            </motion.div>
        </ImageListItem>
    );
};

export default function Projects(props) {
    const smbk = useMediaQuery("(min-width: 480px)");

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.00001,
    });

    const projects = [];
    for (let i = 0; i < data.length; i++) {
        projects.push(
        <div className="project-section" style={{marginLeft: "4vw"}}>
            <span className="display-large neutrals" style={{marginBottom: "2vh"}}>{data[i].title}</span>
            <ul className="projects-list">
                {data[i].projects.map((props, idx) => (
                    <li className="project-div">
                        <ProjectImageItem  {...props}/>
                    </li>
                ))}
            </ul>
        </div>);
    }

    return (
        <div>
             <motion.div className="image-section" style={{pointerEvents: "none"}}>
                <span className="display-large neutrals" style={{marginLeft: "10vw", marginRight: "10vw", textAlign: "center"}}>Lingshuang is a creative technologist, whose work covers a wide variety of technologies and skills and always looks to push the envelope where creativity and tech converge.</span>
                <motion.span className="headline-medium neutrals scroll-down" style={{marginLeft: "12px"}}
                initial={{ y: -10}}
                animate={{ y: 5 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                >Scroll Down</motion.span>
            </motion.div>

            {projects}

            <motion.div className={"progress"} style={{ scaleX }} />
        </div>
        
    );
};