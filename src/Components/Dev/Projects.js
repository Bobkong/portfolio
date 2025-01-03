import { Fragment, useRef, useState, useContext, useEffect } from "react";
import { Box, CircularProgress, IconButton, useMediaQuery } from "@mui/material";
import data from "./ProjectData.json";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import LazyImage from "../Lazy/LazyImage";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./Projects.css"
import { AnimatedCursorContext } from "../HoverText/AnimatedCursorManager";
import cheveronLeft from '../../Assets/chevron-left.svg'
import cheveronRight from '../../Assets/chevron-right.svg'
import { Link } from 'react-router-dom';

export const ProjectImageItem = ({ title, src, skill, link, fromMoreWork }) => {
    const itemRef = useRef();

    const [hover, setHover] = useState(false)

    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const imageEnter = () => {
        cursorStyleHandler("image");
    };

    const imageLeave = () => {
        cursorStyleHandler("default");
    };

    let techStr = "";
    if (skill != null) {
        for (let i = 0; i < skill.length; i++) {
            if (i != 0) {
                techStr += " | "
            }
            techStr += skill[i]
        }
    }


    return (
        <ImageListItem key={title} sx={{ overflow: "visible" }} ref={itemRef}>
            <Link to={link} style={{ cursor: "none" }} onClick={imageLeave}>
                <motion.div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <motion.img src={src} alt={title} style={{ width: fromMoreWork ? "34vw" : "42vw", aspectRatio: "5/3", objectFit: "cover" }} onMouseEnter={imageEnter} onMouseLeave={imageLeave} />
                    <ImageListItemBar
                        title={title}
                        subtitle={`${techStr}`}
                        style={{ display: hover ? "block" : "none" }}

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
            </Link>
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

    let projectRefs = useRef({});
    let leftScrollRefs = useRef({});
    let rightScrollRefs = useRef({});

    const projects = [];
    for (let i = 0; i < data.length; i++) {
        projects.push(
            <div className="dev-project-section" style={{ marginLeft: "4vw" }}>
                <span className="display-large neutrals project-title" style={{ marginBottom: "2vh" }}>{data[i].title}</span>
                <ul className="projects-list" ref={ref => projectRefs.current[i] = ref} onScroll={() => {
                    leftScrollRefs.current[i].className = `left-scroll ${projectRefs.current[i].scrollLeft == 0 ? "hidden" : ""}`;
                    rightScrollRefs.current[i].className = `right-scroll ${projectRefs.current[i].scrollLeft > window.innerWidth * 0.3 ? "hidden" : ""}`;
                }}>
                    {data[i].projects.map((props, idx) => (
                        <li className="project-div">
                            <ProjectImageItem  {...props} />
                        </li>
                    ))}
                </ul>

                <div className="left-scroll hidden" ref={ref => leftScrollRefs.current[i] = ref}>
                    <img src={cheveronLeft} className="chevron-icon" onClick={() => {
                        if (projectRefs.current[i].scrollLeft > 0) {
                            let timer = setInterval(() => {
                                projectRefs.current[i].scrollLeft -= 8
                            })
                            setTimeout(() => {
                                clearInterval(timer)
                            }, 1000)
                        }
                    }}></img>
                </div>

                <div className={`right-scroll ${data[i].projects.length > 2 ? "" : "hidden"}`} ref={ref => rightScrollRefs.current[i] = ref}>
                    <img src={cheveronRight} className="chevron-icon" onClick={() => {

                        let timer = setInterval(() => {
                            projectRefs.current[i].scrollLeft += 8
                        })
                        setTimeout(() => {
                            clearInterval(timer)

                        }, 1000)
                    }}></img>
                </div>
            </div>);
    }

    return (
        <div>
            {projects}
            <motion.div className={"progress"} style={{ scaleX }} />
        </div>

    );
};