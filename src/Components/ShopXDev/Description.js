import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/tamanna-rumee-Wt33T42JNCM-unsplash__1_.jpg?updatedAt=1686974239476" style={{width: "100%", height: "100vh", objectFit: "cover", opacity: "0.2", filter: "alpha(opacity=60)"}}/>
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
                        How I Built ShopX?
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        In the backend development, I leveraged Flask, an easy-to-user Python framework, to seamlessly integrate the Square API into our application. To ensure data persistence, I deployed the code to an Azure Virtual Machine and established a connection with an Azure SQL Database, where user data is securely stored.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        Moving to the mobile front end, I incorporated the power of Google ARCore to unlock an interactive experience for users with merchant item 3D models. This integration empowers users to effortlessly place, drag, and rotate the 3D models. Additionally, I integrated the Google Maps SDK to implement a seamless map feature, enabling users to effortlessly discover nearby merchants and discounts. For streamlined and secure payment transactions, I utilized the Google Pay SDK as the preferred payment method.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        To further augment the user experience, I connected Meta Spark AR effects with merchant items. This integration allows users to seamlessly transition to Instagram or Facebook, where they can share their captivating shopping experiences with engaging AR effects, amplifying their interactions and creating memorable moments.
                    </span>
            </div >
            
        </div>
    )
}

export default Description;
