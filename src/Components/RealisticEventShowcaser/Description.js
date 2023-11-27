import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/sebastian-hietsch-RUJYUXwj3s0-unsplash-min.jpg?updatedAt=1686957875631" style={{width: "100%", height: "100vh", objectFit: "cover", opacity: "0.2", filter: "alpha(opacity=60)"}}/>
    </Box>
))(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
    background: "#000000"
}));

function Description() {
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
                        Background
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        👀 As projected, 15.3 million tourists and 1 billion remote viewers worldwide are set to experience the magic of Paris and witness record-breaking feats at the 2024 Olympic Games.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        💔 However, traditional 2D maps and simple images struggle to capture the full essence of the 2024 Olympic Games and the vibrant city of Paris. This has posed a challenge – how do we attract more tourists and make the event more exciting and accessible to everyone?
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        🎉 But fear not! Realistic Event Showcaser built with Google's revolutionary photorealistic 3D tiles is a perfect solution, which can merge the immersive map experience with the spectacular Olympic venues, places of milestones, and iconic attractions of Paris.
                    </span>
            </div >
            
        </div>
    )
}

export default Description;
