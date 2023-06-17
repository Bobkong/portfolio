import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/jason-briscoe-7MAjXGUmaPw-unsplash-min.jpg?updatedAt=1686978869632" style={{width: "100%", height: "100vh", objectFit: "cover", opacity: "0.2", filter: "alpha(opacity=60)"}}/>
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
                        Description
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        For those who love exploring new recipes, having a smooth and interactive way to turn pages is essential. Traditional cookbooks can pose a challenge, as dirty or wet hands often require constant cleaning before flipping pages. That's why we've developed a revolutionary AR solution that eliminates the need for manual page-turning during cooking. Our HoloLens application - ARamsay ensures a seamless and hygienic experience in the kitchen.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        I first utilized the Figma Toolkit for MRTK to design the 2D user interface. This invaluable resource offers a comprehensive collection of 2D versions of the HoloLens 2 style UI components, also found in the MRTK for Unity 3D. Then, based on our 2D design, I easily translated my wireframes into interactive and immersive HoloLens experiences in Unity 3D, and export the application to HoloLens to test. We also built a server on AWS virtual machine with Node.js to store users’ recipes.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        We explored page navigation methods, evaluating options like button click, drag and drop. Considering easy learning, simple operation, and time efficiency, we chose the Hololens air tap gesture. It's intuitive and seamless, providing a great user experience. Comprehensive user testing validated our design decisions. 92% of users believed ARamsay aids in recipe learning, reinforcing our commitment to user-centric solutions in culinary pursuits.
                    </span>
            </div >
            
        </div>
    )
}

export default Description;
