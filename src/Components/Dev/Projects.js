import { Fragment, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box, CircularProgress, IconButton, useMediaQuery } from "@mui/material";
import data from "./ProjectData.json";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import LazyImage from "../Lazy/LazyImage";
import { motion, useScroll, useTransform } from "framer-motion";
import CameraIcon from '@mui/icons-material/Camera';

const ProjectImageItem = ({ title, src, tech, idx }) => {
    const itemRef = useRef();
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "end end"],
    });

    const margin = 368 - 16 * idx;

    const y = useTransform(scrollYProgress, [0, 1], [margin, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.1, 1]);

    return (
        <ImageListItem key={title} sx={{ overflow: "visible" }} ref={itemRef}>
            <motion.div whileHover={{ scale: 1.1 }} style={{ y, opacity, overflow: "hidden" }} >
                <LazyImage src={src} alt={title} margin={margin + 64} trim={1} aspectRatio={"16/10"} width="100%" />
                <ImageListItemBar
                    title={title}
                    subtitle={`${tech}`}
                    style = {{display: "block"}}

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
    return (
        <Fragment>
            <ImageList variant="masonry" cols={smbk ? 2 : 1} gap={"max(1.8rem, 3.6vw)"} sx={{
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