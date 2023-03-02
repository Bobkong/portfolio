import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";
import data from "./HeroData.json"
import HeroChip from "./HeroChip";
import { motion } from "framer-motion";
import selfImage from '../../../Assets/about_img.jpg';

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
                    <span className="neutrals display-large">Hi, i'm Lingshuang Kong!</span>
                    <span className="neutrals-lighten-1 title-medium">product designer & creative technologist</span>
                </HeroTitleBox>
                {data.interest.map(({ name, ...props }) => (
                    <HeroChip {...props} key={name} setHover={hoverFunc} setChipIndex={chipIndexFunc}>{name}</HeroChip>
                ))}
            </HeroBox>
        </SelfBox>
        
    );
};