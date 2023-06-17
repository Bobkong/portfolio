import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/instagram-banner.png?updatedAt=1679802353094" style={{width: "100%", height: "100vh", objectFit: "cover", opacity: "0.3", filter: "alpha(opacity=60)"}}/>
    </Box>
))(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
    background: "#000000"
}));

function TeamIntro() {
    return(
        <div style={{position: "relative"}}>
            <BgImage />
            <div style={{width: "70vw",
                position: "absolute", 
                top: "50%", 
                left: "50%",
                zIndex: "100", 
                transform: "translate(-50%, -50%)",}}>
                    <span className='display-large h1' >
                        TEAM INTRO
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        Instagram AR Design Team is a multidisciplinary team with the mission of defining the next generation of visual storytelling tools to enable immersive self-expression on Instagram.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        Our team is composed of individuals in various roles, such as AR designers, art directors, 3D generalists, and creative coders, all of whom work together to bring our projects to fruition.
                    </span>
            </div >
            
        </div>
    )
}

export default TeamIntro;
