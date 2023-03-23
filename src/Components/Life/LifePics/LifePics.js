import { Fragment, useRef } from "react";
import { styled, makeStyles } from "@mui/material/styles";
import { Box, CircularProgress, colors, IconButton, useMediaQuery } from "@mui/material";
import data from "./LifeData.json";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import LazyImage from "../../Lazy/LazyImage";
import { motion, useScroll, useTransform } from "framer-motion";
import CameraIcon from '@mui/icons-material/Camera';


const LifeImgItem = ({ alt, src, place, idx }) => {
    const itemRef = useRef();
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "end end"],
    });

    const margin = 368 - 16 * idx;

    const y = useTransform(scrollYProgress, [0, 1], [margin, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.1, 1]);

    return (
        <ImageListItem key={alt} sx={{ overflow: "visible" }} ref={itemRef}>
            <motion.div whileHover={{ scale: 1.1 }} style={{ y, opacity, borderRadius: "1.6rem", overflow: "hidden" }}>
                <LazyImage src={src} alt={alt} margin={margin + 128} trim={1} width="100%" />
                <ImageListItemBar
                    title={alt}
                    subtitle={`@${place}`}
                    
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
                        ".MuiImageListItemBar-subtitle": {
                            fontSize: "0.9em",
                            color: "#cacaca",
                            lineHeight: "1.3"
                        },
                    })}
                />
            </motion.div>
        </ImageListItem>
    );
};

export default function LifePics(props) {
    const smbk = useMediaQuery("(min-width: 480px)");
    return (
        <Fragment >
            <ImageList variant="masonry" cols={smbk ? 2 : 1} gap={"max(2rem, 4vw)"} sx={{
                marginTop: 12,
                overflow: "visible",
                marginBottom: "min(3.2rem, 6.4vw)",
                marginLeft: "4vw",
                marginRight: "4vw",
            }}>
                {data.map((props, idx) => (
                    <LifeImgItem key={idx} idx={idx} {...props} />
                ))}
            </ImageList>
        </Fragment>
    );
};