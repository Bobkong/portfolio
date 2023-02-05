import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip from "../..//Tooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SkillBox = styled(Box)(({ theme }) => ({
    height: "min(80vw, 80rem)",
    width: "100%",
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    "& > *": {
        gridColumn: 1,
        gridRow: 1,
    },
    [theme.breakpoints.up("lg")]: {
        height: "min(54vw, 60rem)",
        margin: theme.spacing(16, 0),
    },
}));

const SkillItemBox = styled(motion.div, {
    shouldForwardProp: (prop) => prop !== "radius"
})(({ theme, radius }) => ({
    width: `calc(${radius} * min(60vw, 60rem))`,
    margin: "0 auto",
    height: "fit-content",
}));

const SkillImg = styled("img")(({ theme }) => ({
    height: "3.6rem",
    maxHeight: "8.8vw",
    [theme.breakpoints.up("sm")]: {
        height: "7.2vw",
    },
    [theme.breakpoints.up("md")]: {
        height: "min(6.4vw, 8rem)",
    },
}));

const SkillItem = ({ scrollYProgress, name, idx, src, total, direction = 1, radius = 1 }) => {
    const angle = 360 / total;
    const rotate = useTransform(scrollYProgress, [0, 1], [0 + idx * angle, 360 * direction + idx * angle])

    return (
        <SkillItemBox style={{ rotate }} radius={radius} >
            <Tooltip title={name} arrow>
                <SkillImg
                    alt={idx}
                    name={name}
                    src={src}
                    margin={64}
                    trim={2}
                />
            </Tooltip>
        </SkillItemBox>
    );
};

const outerSkill = [
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/mrtk-min_jpIh3KP8Az.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487699", name: "Mixed Reality Toolkit" },
    { src: "https://ik.imagekit.io/poonr2gma/unity-logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674943313390", name: "Unity 3D" },
    { src: "https://ik.imagekit.io/poonr2gma/python.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674944457189", name: "Python" },
    { src: "https://ik.imagekit.io/poonr2gma/nodejs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674944185084", name: "Node.js" },
    { src: "https://ik.imagekit.io/poonr2gma/html.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674943760305", name: "HTML" },
    { src: "https://ik.imagekit.io/poonr2gma/logo-gc55168e63_1920.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674943760176", name: "CSS" },
    { src: "https://ik.imagekit.io/poonr2gma/Android_studio.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674943596774", name: "Android Studio" },
    { src: "https://ik.imagekit.io/poonr2gma/js.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674944278508", name: "JavasSript" },
    { src: "https://ik.imagekit.io/poonr2gma/blender_1_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674943850115", name: "Blender" },
    { src: "https://ik.imagekit.io/poonr2gma/google_ar.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674943244531", name: "Google ARCore" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/react-min_EVSbGJb04.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627772956", name: "React" }
];

const innerSkill = [
    { src: "https://ik.imagekit.io/poonr2gma/origami.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674944503402", name: "Origami" },
    { src: "https://ik.imagekit.io/poonr2gma/spark.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674943364439", name: "Spark AR" },
    { src: "https://ik.imagekit.io/poonr2gma/figma.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674943056486", name: "Figma" },
    { src: "https://ik.imagekit.io/poonr2gma/adobe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674944003268", name: "Adobe Creative Cloud" },
    { src: "https://ik.imagekit.io/poonr2gma/invision.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674943183053", name: "InVision"}
];

export default function Skill(props) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <SkillBox ref={containerRef}>
        
            {outerSkill.map((props, idx) => (
                <SkillItem
                    key={`outer-${idx}`}
                    scrollYProgress={scrollYProgress}
                    idx={idx}
                    total={outerSkill.length}
                    {...props}
                />
            ))}
            {innerSkill.map((props, idx) => (
                <SkillItem
                    key={`inner-${idx}`}
                    scrollYProgress={scrollYProgress}
                    idx={idx}
                    total={innerSkill.length}
                    direction={-1}
                    radius={0.56}
                    {...props}
                />
            ))}
        </SkillBox>
    );
};