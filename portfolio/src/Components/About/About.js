import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";
import HeroTitle from "./HeroTitle";
import { textAlign } from "@mui/system";
import Skill from "./Skill/Skill";

const AboutBox = styled((props) => (
    <Box component="section" {...props} />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    paddingTop: "6rem",
    marginBottom: "8rem",
    marginLeft: "2rem",
    marginRight: "2rem",
    [theme.breakpoints.up("md")]: {
        marginLeft: "8rem",
        marginRight: "8rem",
    },
}));

const HeroBox = styled((props) => (
    <Box component="section" {...props} />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
        flexDirection: "row"
    },
    
}));


const HeroAvatarComp = styled(({ img, ...props }) => (
    <motion.div
        whileHover={{
            scale: 1.1,
            rotateZ: -6,
        }}
    >
        <Avatar
            src={require(`../../Assets/about_img.jpg`)}
            alt="self image"
            {...props}
        />
    </motion.div>
))(({ theme }) => ({
    width: "20rem",
    height: "20rem",
    position: "relative",
    boxShadow: "0 0 64px 0px hsl(0deg 0% 100% / 15%)",
}));

const HeroTextBox = styled((props) => (
    <Box component="section" {...props} />
))(({ theme }) => ({
    marginLeft: theme.spacing(0),
    cursor: "default",
    padding: theme.spacing(2, 0, 3),
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(12),
        textAlign: "left"
    },
}));

const ChapterBox = styled((props) => (
    <Box component="section" {...props} />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "8rem",
    
}));

const JourneyImage = styled((props) => (
    <img  src={require(`../../Assets/journey.png`)}
    alt="self image"
    {...props} />
))(({ theme }) => ({
    marginTop: "4rem",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("lg")]: {
        width: "80%",
    },
}));

export default function About() {
    return (
        <AboutBox>
            <HeroBox>
                <HeroAvatarComp />
                <HeroTextBox>
                    <HeroTitle type="heading1" text="Hi, i'm Lingshuang Kong!" />
                    <HeroTitle type="heading2" text="I'm a product designer and creative technologist. Currently, I'm working as a UX designer at Blue Raven Solar. Previously, I worked as an AR designer at Instagram and as an Android UX Engineer at Tencent." />
                </HeroTextBox>
            </HeroBox>
            <ChapterBox>
                <HeroTitle type="heading1" text="How did I get here?" />
                <JourneyImage />
            </ChapterBox>
            <ChapterBox>
                <HeroTitle type="heading1" text="Tools I utilize for creation" />
                <Skill />
            </ChapterBox>
        </AboutBox>
    );
};