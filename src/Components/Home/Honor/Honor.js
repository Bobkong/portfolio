import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AnimatedCursorContext } from "../../HoverText/AnimatedCursorManager";

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
        item
        xs={6} sm={3}
        {...props}
    />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

const HonorImg = styled((props) => (
    <motion.img whileHover={{ y: "-1.2rem" }} {...props} />
))(({ theme }) => ({
    width: "100%",
    aspectRatio: "auto",
    cursor: "none"
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
    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const imageEnter = () => {
      cursorStyleHandler("image");
    };
  
    const imageLeave = () => {
      cursorStyleHandler("default");
    };

    var data = (props.source === "judge") ? require('./JudgeData.json') : require('./AwardData.json');
    
    

    return (
        <Fragment>
            <HonorGrid>
                {data.map(({ title, src, link }, idx) => (
                    <HonorItem key={title} custom={idx} onMouseEnter={imageEnter} onMouseLeave={imageLeave}>
                        <Link>
                            <HonorImg src={src} alt={`img-for-${title}`} onClick={() => {window.open(link, '_blank')}} />
                        </Link>
                    </HonorItem>
                ))}
            </HonorGrid>
        </Fragment>
    );
};