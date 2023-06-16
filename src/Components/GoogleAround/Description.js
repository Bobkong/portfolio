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
                        Description
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        Have you ever faced the challenge of locating someone in crowded, public spaces? Have you found yourself resorting to constant texting or phone calls, but still struggling to provide clear and effective guidance? Existing map applications often fall short in accurately pinpointing locations within a few hundred feet. That's where ARound steps in!
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        ARound is an innovative solution designed to facilitate seamless navigation to individuals in close proximity. Leveraging the power of Google ARCore Geospatial API, users can effortlessly share their device's pose, enabling precise tracking and positioning.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        When initiating navigation, ARound harnesses augmented reality to provide intuitive direction guidance. Users can simply follow the AR overlays to effortlessly locate their desired contacts. Additionally, Google ARound offers distance information and a comprehensive 2D map, empowering users with detailed insights into their own location and that of others.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        As users draw closer to their destination, a distinctive red 3D anchor model materializes, ensuring an unmistakable visual cue. With ARound, connecting with others has never been easier, allowing you to navigate effortlessly and forge meaningful connections in real time.
                    </span>
            </div >
            
        </div>
    )
}

export default Description;
