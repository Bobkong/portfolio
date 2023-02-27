import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";
import data from "./HeroData.json"
import HeroChip from "./HeroChip";
import HomeTitle from "../HomeTitle";
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
    paddingTop: "3rem",
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
    cursor: "default",
    padding: theme.spacing(2, 0, 3),
}));

export default function Hero() {
    return (
        <SelfBox>
            <HeroBox>
                <HeroAvatarComp />
                <HeroTitleBox>
                    <HomeTitle type="heading1" text="Hi, i'm Lingshuang Kong!" />
                    <HomeTitle type="heading2" href="mailto:klingshuang@gmail.com" text="product designer & creative technologist" />
                </HeroTitleBox>
                {data.interest.map(({ name, ...props }) => (
                    <HeroChip {...props} key={name}>{name}</HeroChip>
                ))}
            </HeroBox>
        </SelfBox>
        
    );
};