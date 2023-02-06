import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Fragment } from "react";

const JourneyDiv = styled((props) => (
    <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
            visible: (i) => ({ opacity: 1, scale: 1, transition: { type: "spring", delay: 0.2 * i } }),
            hidden: { opacity: 0, scale: 0 }
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        {...props}
    />
))(({ theme }) => ({
}));

const JourneyImage = styled((props) => (
    <img  src={require(`../../../Assets/journey.png`)}
    alt="self image"
    {...props} />
))(({ theme }) => ({
    marginTop: "4rem",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("lg")]: {
    },
}));

export default function Honor(props) {
    return (
        <JourneyDiv>
            <JourneyImage />
        </JourneyDiv>
    );
};