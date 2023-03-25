import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Video = styled((props) => (
    <Box component="section" {...props}>
        <video style={{width: "100vw"}} src="https://ik.imagekit.io/poonr2gma/instagram-gradient.mp4?updatedAt=1679544868985" autoPlay="autoplay" loop></video>
    </Box>
))(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

function TeamIntro() {
    return(
        <div style={{position: "relative"}}>
            <Video />
            <span className='display-large neutrals' style={{width: "70vw", textAlign: "center",
                position: "absolute", 
                top: "50%", 
                left: "50%",
                zIndex: "100", 
                transform: "translate(-50%, -50%)"}}>
                Instagram AR Design Team is a multidisciplinary team with the mission of defining the next generation of visual storytelling tools to enable immersive self-expression on Instagram.
            </span>
        </div>
    )
}

export default TeamIntro;
