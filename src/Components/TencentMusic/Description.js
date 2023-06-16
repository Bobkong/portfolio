import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/abigail-lynn-rdmJc2Os4EM-unsplash.jpg?updatedAt=1686626642051" style={{width: "100%", height: "100vh", objectFit: "cover", opacity: "0.2", filter: "alpha(opacity=60)"}}/>
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
                        My team and I develop features for QQ Music's social, with a primary focus on connecting people through music. As one of the key developers of the Android development team, over the course of two years at QQ Music, we have successfully launched numerous innovative features.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        One of the standout functionalities we created is the "Listen Together" feature, which enables users to enjoy music simultaneously in a shared virtual room. This feature fosters real-time interaction and facilitates music sharing among users.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        Another accomplishment of ours is the integration of a vibrant music community within QQ Music. This community serves as a platform for users to express their music preferences and connect with like-minded individuals. The community has gained immense popularity, with millions of users actively utilizing these features on a daily basis.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        Through our contributions, millions of users are able to enhance their music experience on QQ Music, establishing meaningful connections and discovering new music.
                    </span>
            </div >
            
        </div>
    )
}

export default Description;
