import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, Variants } from "framer-motion";
import { Fragment } from "react";
import "./Journey.css"
import data from "./JourneyData.json";

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

const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
};

function JourneyCard({ image}) {
  
    return (
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        {/* <div className="splash" style={{ background }} /> */}
        <motion.img className="card" variants={cardVariants} src={image} />
      </motion.div>
    );
  }

export default function Honor(props) {
    return (
        <JourneyDiv>
            {data.map(({ src }) => (
                <JourneyCard image={src} />
            ))}
        </JourneyDiv>
    );
};