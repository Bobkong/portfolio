import Hero from "./Hero/Hero";
import Skill from "./Skill/Skill"
import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";
import Honor from "./Honor/Honor"
import Journey from "./Journey/Journey"
import { StrictMode, useState } from "react";
import { padding } from "@mui/system";
import {Panels} from "../LoadingPanel/panels"

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

const HeroChipDetail = styled((props) => (
    <Box component="section" display={props.hover ? "flex" : "none"} {...props}/>
))(({ theme }) => ({
    height: "100vh",
    width: "100vw",
    backgroundColor: "#00000088",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "10001",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    textAlign: "center",
}));

export default function Home() {
    const [hover, setHover] = useState(false);
    const [chipIndex, setChipIndex] = useState("");

    return (
        <>
            <Panels />
            <HomeBox>
            <HeroChipDetail hover={hover}>
                <span className="neutrals display-large">{chipIndex}</span>
            </HeroChipDetail>
            <Hero setHover={setHover} setChipIndex={setChipIndex}/>
            <ChapterBox>
                <span className="neutrals display-large">Certificates and awards</span>
                <Honor />
            </ChapterBox>
            <ChapterBox>
            <span className="neutrals display-large">Tools I utilize for creation</span>
                <Skill />
            </ChapterBox>
            <ChapterBox>
                <span className="neutrals display-large">How did I get here?</span>
                <Journey />
            </ChapterBox>
        </HomeBox>
        </>
        
        
    );
};