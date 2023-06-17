import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/clement-helardot-95YRwf6CNw8-unsplash-min.jpg?updatedAt=1686974722030" style={{width: "100%", height: "100vh", objectFit: "cover", opacity: "0.2", filter: "alpha(opacity=60)"}}/>
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
                        What I learned?
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        To enhance my Web front-end development skills, I took about 2 months learning Web front-end development from Meta Engineers. Through the course, I:
                    </span>
                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <div>
                            <span className="neutrals headline-large" style={{display: "inline"}}>
                                Created a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences (Yes, you're viewing it!).
                            </span>
                        </div>
                    </div>

                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <div>
                            <span className="neutrals headline-large" style={{display: "inline"}}>
                                Learned Bootstrap CSS Framework to create webpages and work with GitHub repositories and version control.
                            </span>
                        </div>
                    </div>

                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <div>
                            <span className="neutrals headline-large" style={{display: "inline"}}>
                                Learned to use React in relation to Javascript libraries and frameworks.
                            </span>
                        </div>
                    </div>
            </div >
            
        </div>
    )
}

export default Description;
