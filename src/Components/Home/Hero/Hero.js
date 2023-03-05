import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";
import data from "./HeroData.json"
import HeroChip from "./HeroChip";
import { motion } from "framer-motion";
import selfImage from '../../../Assets/about_img.jpg';
import Character from "./BlastChracter";

const SelfBox = styled((props) => (
    <Box component="section" {...props} />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
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
            src={selfImage}
            alt="profile"
            {...props}
        />
    </motion.div>
))(({ theme }) => ({
    width: "18rem",
    height: "18rem",
    position: "relative",
    zIndex: "-1",
    boxShadow: "0 0 64px 0px hsl(0deg 0% 100% / 15%)",
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
    marginTop: theme.spacing(12),
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
            </HeroBox>
        </SelfBox>
        
    );
};