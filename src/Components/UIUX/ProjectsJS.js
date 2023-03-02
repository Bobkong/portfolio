import { Fragment, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, CircularProgress, IconButton, useMediaQuery } from "@mui/material";
import data from "./ProjectData.json";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import LazyImage from "../Lazy/LazyImage";
import { motion, useScroll, useTransform } from "framer-motion";
import CameraIcon from '@mui/icons-material/Camera';
import './Projects.css'
import { NavLink } from "react-router-dom";

const ProjectImageItem = ({ title, src, skill, desc, idx, detail }) => {
    const itemRef = useRef();
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "end end"],
    });

    const margin = 368 - 16 * idx;

    const y = useTransform(scrollYProgress, [0, 1], [margin, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.1, 1]);

    const [hover, setHover] = useState(false)
    
    return (
        <ImageListItem key={title} sx={{ overflow: "visible" }} ref={itemRef}>
                <motion.div whileHover={{ scale: 1.05 }} style={{ y, opacity, overflow: "hidden"}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <LazyImage src={src} alt={title} margin={margin + 64} trim={1} aspectRatio={"16/9"} width="100%" />
                    <ImageListItemBar
                        title={title}
                        subtitle={`${skill}`}
                        style = {{display: hover ? "flex" : "none", height: "100%", flexDirection: "row", alignItems: "center", textAlign: "center", padding: "1rem", flexWrap: "wrap"}}

                        sx={(theme) => ({
                            fontSize: "0.8rem",
                            fontFamily: "instagram-sans",
                            [theme.breakpoints.up("md")]: {
                                fontSize: "1.2rem",
                                letterSpacing: "0.1rem",
                            },
                            ".MuiImageListItemBar-title": {
                                fontSize: "2em",
                                lineHeight: 1.4,
                                color: "#ffffff",
                                fontWeight: 700,
                                marginTop: "0.6rem",
                                marginLeft: "0.6rem"
                            },
                            ".MuiImageListItemBar-subtitle": {
                                fontSize: "1em",
                                color: "#cccccc",
                                marginTop: "0.6rem",
                                marginBottom: "0.6rem",
                                marginLeft: "0.6rem",
                                whiteSpace: "normal"
                            },
                        })}
                    />
                </motion.div>
            
            
        </ImageListItem>
    );
};

export default function ProjectsJS(props) {
    const smbk = useMediaQuery("(min-width: 480px)");
    return (
        <Fragment>
            <ImageList variant="masonry" cols={1} gap={"max(1.8rem, 3.6vw)"} sx={{
                marginTop: 12,
                overflow: "visible",
                marginBottom: "min(-3.2rem, -6.4vw)",
            }}>
                {data.map((props, idx) => (
                    <ProjectImageItem key={idx} idx={idx} {...props} />
                ))}
            </ImageList>
        </Fragment>
    );
};