import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";
import data from "./HeroData.json"
import HeroChip from "./HeroChip";
import { motion } from "framer-motion";
import Character from "./BlastChracter";
import WorkButton from "./WorkButton/WorkButton";
import { NavLink } from "react-router-dom";

const SelfBox = styled((props) => (
    <Box component="section" {...props} />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}));

const HeroBox = styled((props) => (
    <Box component="section" {...props} />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

const HeroAvatarComp = styled(({ img, ...props }) => (
    <motion.div>
        <Avatar
            src="https://ik.imagekit.io/poonr2gma/portfolio/IMG_5397.png?updatedAt=1723330487085"
            alt="profile"
            {...props}
        />
    </motion.div>
))(({ theme }) => ({
    width: "18rem",
    height: "18rem",
    position: "relative",
    zIndex: "-1",
    boxShadow: "0 0 64px 0px hsl(0deg 0% 100% / 10%)",
}));

const HeroTitleBox = styled((props) => (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={{
            visible: {
                transition: {
                    staggerChildren: 0.025,
                },
            },
        }}
        {...props}
    />
))(({ theme }) => ({
    marginTop: "2rem",
    textAlign: "center",
    padding: theme.spacing(2, 0, 3),
}));

export default function Hero(props) {
    const hoverFunc = props.setHover
    const chipIndexFunc = props.setChipIndex
    return (
        <SelfBox>
            <HeroBox>
                <HeroAvatarComp />
                <HeroTitleBox>
                    <Character content={"H"} />
                    <Character content={"i"} />
                    <Character content={",\u00A0"} />
                    <Character content={"I"} />
                    <Character content={"'"} />
                    <Character content={"m\u00A0"} />
                    <Character content={"L"} />
                    <Character content={"i"} />
                    <Character content={"n"} />
                    <Character content={"g"} />
                    <Character content={"s"} />
                    <Character content={"h"} />
                    <Character content={"u"} />
                    <Character content={"a"} />
                    <Character content={"n"} />
                    <Character content={"g\u00A0"} />
                    <Character content={"K"} />
                    <Character content={"o"} />
                    <Character content={"n"} />
                    <Character content={"g"} />
                    <Character content={"!"} />
                    <span className="neutrals-lighten-1 title-medium">product designer & creative technologist</span>
                </HeroTitleBox>
                {data.interest.map(({ name, ...props }) => (
                    <HeroChip {...props} key={name} setHover={hoverFunc} setChipIndex={chipIndexFunc}>{name}</HeroChip>
                ))}
                {/* <div style={{display: "flex", columnGap: "4vw", marginTop: "2vh"}}>
                    <NavLink to="/uiux">
                        <WorkButton label="Design Work" />
                    </NavLink>
                    <NavLink to="/dev">
                        <WorkButton label="Development Work" />
                    </NavLink>
                </div> */}
                
            </HeroBox>
        </SelfBox>
        
    );
};