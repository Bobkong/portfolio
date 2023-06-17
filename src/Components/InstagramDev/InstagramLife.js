import React from "react";
import { Fragment, useRef } from "react";
import {useMediaQuery } from "@mui/material";
import data from "./InstagramLife.json";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import LazyImage from "../Lazy/LazyImage";
import { motion, useScroll, useTransform } from "framer-motion";

const LifeImgItem = ({ src, desc, idx }) => {
    const itemRef = useRef();
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "end end"],
    });

    const margin = 368 - 16 * idx;

    const y = useTransform(scrollYProgress, [0, 1], [margin, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.1, 1]);

    return (
        <ImageListItem key={idx} sx={{ overflow: "visible" }} ref={itemRef}>
            <motion.div style={{ y, opacity, overflow: "hidden" }}>
                <LazyImage src={src} trim={1} margin={margin + 128} width="100%"/>
                <ImageListItemBar
                    title={desc}
                    
                    position="below"
                    sx={(theme) => ({
                        fontSize: "0.8rem",
                        fontFamily: "instagram-sans",
                        [theme.breakpoints.up("md")]: {
                            fontSize: "1rem",
                        },
                        ".MuiImageListItemBar-title": {
                            fontSize: "1em",
                            lineHeight: 1.4,
                            color: "#ffffff"
                        },
                    })}
                />
            </motion.div>
        </ImageListItem>
    );
};

function LifePics(props) {
    const smbk = useMediaQuery("(min-width: 480px)");
    return (
        <Fragment >
            <ImageList variant="masonry" cols={smbk ? 2 : 1} gap={"max(1rem, 2vw)"} sx={{
                overflow: "visible",
                marginBottom: "min(4rem, 6vw)",
                width: "70vw",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "4rem",
            }}>
                {data.map((props, idx) => (
                    <LifeImgItem key={idx} idx={idx} {...props} />
                ))}
            </ImageList>
        </Fragment>
    );
};

function InstagramLife() {
    return(
        <div style={{marginTop: "10rem", maxWidth: "70vw", marginLeft: "auto", marginRight: "auto"}}>
            <span className='display-large h1' >
               LIFE AT META
            </span>
            <span className='headline-large neutrals' style={{marginTop: "1.2rem"}}>
            I spent an amazing and memorable three months at Meta and met a lot of talented colleagues and friends. Here are some highlights of life at Meta!
            </span>
            <LifePics/>
        </div>
    )
}

export default InstagramLife;
