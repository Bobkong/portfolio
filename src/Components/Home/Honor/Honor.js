import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import data from "./HonorData.json";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const HonorGrid = styled((props) => (
    <Grid
        component={motion.ul}
        container
        columnSpacing={{ xs: "6vw", sm: "2.5vw", md: "3vw", lg: "3rem" }}
        rowSpacing={3}
        {...props}
    />
))(({ theme }) => ({
    marginTop: theme.spacing(1),
    padding: 0,
}));

const HonorItem = styled((props) => (


    <Grid
        component={motion.li}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
            visible: (i) => ({ opacity: 1, scale: 1, transition: { type: "spring", delay: 0.5 * i } }),
            hidden: { opacity: 0, scale: 0 }
        }}
        item
        xs={6} sm={3}
        {...props}
    />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "default",
}));

const HonorImg = styled((props) => (
    <motion.img whileHover={{ y: "-1.2rem" }} {...props} />
))(({ theme }) => ({
    width: "100%",
    aspectRatio: "92 / 100"
}));

const HonorText = styled(Box)(({ theme }) => ({
    fontSize: "1.25rem",
    paddingLeft: "1vw",
    lineHeight: 1.25,
    marginTop: theme.spacing(1),
    textTransform: "lowercase",
    [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
    },
}));

export default function Honor(props) {
    return (
        <Fragment>
            <HonorGrid>
                {data.map(({ title, src, link }, idx) => (
                    <HonorItem key={title} custom={idx}>
                        <Link>
                            <HonorImg src={src} alt={`img-for-${title}`} onClick={() => {window.open(link, '_blank')}}  />
                        </Link>
                    </HonorItem>
                ))}
            </HonorGrid>
        </Fragment>
    );
};