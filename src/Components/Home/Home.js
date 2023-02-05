import Hero from "./Hero/Hero";
import Skill from "./Skill/Skill"
import Life from "./Life/Life"
import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";
import HomeTitle from "./HomeTitle";
import Honor from "./Honor/Honor"

const HomeBox = styled((props) => (
    <Box component="section" {...props} />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    [theme.breakpoints.up("md")]: {
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        maxWidth: "1100px",
    },
}));

const ChapterBox = styled((props) => (
    <Box component="section" {...props} />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginBottom: "8rem"
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
    },
}));

export default function Home() {
    return (
        <HomeBox>
            <Hero />
            <ChapterBox>
                <HomeTitle type="heading1" text="Tools I utilize for creation" />
                <Skill />
            </ChapterBox>
            <ChapterBox>
                <HomeTitle type="heading1" text="Certificates and Awards" />
                <Honor />
            </ChapterBox>
            <ChapterBox>
                <HomeTitle type="heading1" text="How did I get here?" />
                <JourneyImage />
            </ChapterBox>
            <ChapterBox>
                <HomeTitle type="heading1" text="Aside from design" />
                <Life />
            </ChapterBox>
        </HomeBox>
        
    );
};