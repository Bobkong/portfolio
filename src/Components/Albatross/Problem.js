import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/bill-mead-wmaP3Tl80ww-unsplash-min.jpg?updatedAt=1695524309055" style={{width: "100%", height: "100vh", objectFit: "cover", opacity: "0.2", filter: "alpha(opacity=60)"}}/>
    </Box>
))(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
    background: "#000000"
}));

function Problem() {
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
                        Problem
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                    Solar installation and maintenance demand extensive home-related data and photographs. Presently, Blue Raven Solar invests $150k per year in SiteCapture (a software from another company) to facilitate the collection of homeowner site information and photos by field employees and verification by office employees, incurring a significant cost for Blue Raven Solar.
                    </span>
                    
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        For field employees, in addition to using Albatross in their daily work, they are required to visit SiteCapture multiple times and input redundant project information before capturing site information, which introduces inefficiencies into our field processes.
                    </span>

                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                    Office employees also face delays when verifying project surveys as they must switch from Albatross to SiteCapture and search for project information on SiteCapture, due to the separation of SiteCapture and Albatross projects.
                    </span>
            </div >
            
        </div>
    )
}

export default Problem;
