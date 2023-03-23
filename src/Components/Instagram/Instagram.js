import React from "react";
import {Panels} from "../LoadingPanel/panels"
import {
  motion,
} from "framer-motion";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import RoleIntro from "./RoleIntro";
import Problem from "./Problem";
import AREffect from "./AREffect";
import TeamIntro from "./TeamIntro";
import InstagramLife from "./InstagramLife";
import InstagramFeedback from "./InstagramFeedback";

function InsHeader() {
    return(
        <div style={{position: "relative", width: "100vw"}}>
                <video src="https://ik.imagekit.io/poonr2gma/instagram-ar.mp4?updatedAt=1679544573490" autoPlay="autoplay" loop></video>
                <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <p className='display-large neutrals' style={{textAlign: "center", fontSize: "3.2rem"}}>INSTAGRAM AR DESIGN</p>
                </div>
        </div>
    );
}

function Interested() {
    return(
        <p className='display-large neutrals' style={{textAlign: "center", maxWidth: "70vw", margin: "8rem auto"}}>
            If you are interested in learning more about the work and the design process, feel free to contact me!
        </p>
    );
}

const ChapterBox = styled((props) => (
    <Box component="section" {...props} />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw"
}));

function Instagram() {

  return (
    <div>
        <Panels />
        <InsHeader />
        <ChapterBox>
            <RoleIntro />
        </ChapterBox>
        <ChapterBox>
            <TeamIntro />
        </ChapterBox>
        <ChapterBox>
            <Problem />
        </ChapterBox>  
        <AREffect />
        <InstagramLife />
        <InstagramFeedback />
        <Interested />
    </div>

  );
}

export default Instagram;
