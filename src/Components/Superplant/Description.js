import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/maxresdefault_1.png?updatedAt=1687226300339" style={{width: "100%", height: "100vh", objectFit: "cover", opacity: "0.2", filter: "alpha(opacity=60)"}}/>
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
                        When I was a young boy, I had a lot of games that I particularly loved, such as Super Mario and Plants vs. Zombies. They accompanied me during my wonderful childhood. But sometimes, I wondered what it would be like if I could combine these two games. And that's how Super Plants came to be!
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        I merged the characters from Plants vs. Zombies with the maps and mechanics of Super Mario, resulting in the creation of this new game. As both Plants vs. Zombies and Super Mario are 2D games, I utilized Cocos2D and C++ to develop this game.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        If you also enjoy both of these games, I believe you will absolutely love Super Plants too! Let's revisit our childhood together.
                    </span>
            </div >
            
        </div>
    )
}

export default Description;
