import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';
import { motion } from "framer-motion";

const ChipContent = styled(({ description, placement, setHover, setChipIndex, ...props }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
            },
            delay: 2.8,
            scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
            }
        }}

        onMouseEnter={() => {
            setHover(true)
            setChipIndex(description)
        }}
        onMouseLeave={() => {
            setHover(false)
        }}
        {...props}
    />
))(({ theme }) => ({

    backgroundColor: "#2a2a2a",
    borderRadius: "10rem",
    color: "#ffffff",
    boxShadow: "inset -4px -4px 5px #20202088, inset 4px 4px 5px #42424255, 0px 0px 20px #42424299",
    padding: theme.spacing(0.8, 1.2),
    margin: theme.spacing(0, 0.8),
    
    [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(1, 2),
        margin: theme.spacing(0, 1.5),
    },
    [theme.breakpoints.up("lg")]: {
        margin: theme.spacing(0, 2),
    },
}));

const ChipContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "reverse" && prop !== "x" && prop !== "y"
})(({ theme, reverse, x, y }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex",
        position: "absolute",
        ...(reverse && { flexDirection: "row-reverse" }),
        left: "50%",
        top: "36%",
        transform: `translate(${x}, ${y})`,
        zIndex: 100,
    },
    [theme.breakpoints.up("xl")]: {
        top: "32%",
    },
}));

const ArrowIcon = styled(NavigationIcon, {
    shouldForwardProp: (prop) => prop !== "vertical" && prop !== "angle"
})(({ theme, vertical, angle }) => ({
    alignSelf: vertical,
    transform: `scale(1.15) rotateZ(${angle}deg)`,
    fill: "#777",
    [theme.breakpoints.up("lg")]: {
        transform: `scale(1.3) rotateZ(${angle}deg)`,
    },
}));


export default function HeroChip({
    x, y,
    vertical,
    reverse,
    angle,
    setHover,
    setChipIndex,
    ...props
}) {
    return (
        <ChipContainer reverse={reverse} x={x} y={y} className="body-large">
            <ChipContent setHover = {setHover} setChipIndex = {setChipIndex} {...props} />
            <ArrowIcon vertical={vertical} angle={angle} />
        </ChipContainer>
    );
};