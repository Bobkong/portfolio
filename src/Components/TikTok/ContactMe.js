import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/Cover%20Page%20(1).png?updatedAt=1738039860273" style={{width: "100%", height: "100vh", objectFit: "cover"}}/>
    </Box>
))(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
    background: "#000000"
}));

function ContactMe() {
    return(
        <div style={{position: "relative"}}>
            <BgImage />
            <div style={{width: "70vw",
                position: "absolute", 
                top: "50%", 
                left: "50%",
                zIndex: "100", 
                transform: "translate(-50%, -50%)",
                textAlign: "center"}}>
                    <p className='display-large h1' width='100%'>
                    If you’d like to learn more about my projects and experience at TikTok, feel free to contact me via email: klingshuang@gmail.com.
                    </p>
            </div >
            
        </div>
    )
}

export default ContactMe;
