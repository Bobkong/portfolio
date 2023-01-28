import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";
import data from "./HeroData.json"
import HeroChip from "./HeroChip";
import HeroTitle from "./HeroTitle";
import { motion } from "framer-motion";
import selfImage from '../../../Assets/profile_img.png';
import downarrow from '../../../Assets/down-arrow.gif';

const HeroBox = styled((props) => (
    <Box component="section" {...props} />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "6rem",
    marginBottom: "8rem"
}));

const HeroAvatarComp = styled(({ img, ...props }) => (
    <motion.div
        whileHover={{
            scale: 1.1,
            rotateZ: -6,
        }}
    >
        <Avatar
            src={selfImage}
            alt="profile"
            {...props}
        />
    </motion.div>
))(({ theme }) => ({
    width: "15rem",
    height: "15rem",
    position: "relative",
    boxShadow: "0 0 64px 0px hsl(0deg 0% 100% / 15%)",
}));

const HeroTitleBox = styled((props) => (
    <motion.div
        initial="hidden"
        animate="visible"
        whileHover={{
            y: "-1.2rem",
        }}
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


const HeroDownArrow = styled(({ img, ...props }) => (
    <Avatar src={downarrow}
     alt="coding"
     {...props}/>
))(({ theme }) => ({
    width: "5rem",
    height: "5rem",
}));


export default function Hero() {
    return (
        <HeroBox>
            <HeroAvatarComp />
            <HeroTitleBox>
                <HeroTitle type="heading1" text="Hi, i'm Lingshuang Kong!" />
                <HeroTitle type="heading2" href="mailto:klingshuang@gmail.com" text="product designer & creative technologist" />
            </HeroTitleBox>
            <HeroDownArrow />
            {data.interest.map(({ name, ...props }) => (
                <HeroChip {...props} key={name}>{name}</HeroChip>
            ))}
        </HeroBox>
    );
};