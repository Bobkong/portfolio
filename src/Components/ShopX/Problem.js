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
                        Context
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                    Online shopping platforms like Amazon, Doordash, and eBay have grown significantly, showing the rising influence of virtual shopping. Recent data shows that 40% of consumers are motivated to shop online by coupons and discounts, while 25% are driven by loyalty points. Interestingly, customers often miss out on offers from Square merchants unless they visit stores in person.
                    </span>
                    
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                    Another research shows that using AR technology for product viewing significantly impacts customer behavior. AR can enhance purchase inclination. Its interactive nature provides comprehensive information, boosting customer confidence in the shopping experience.
                    </span>

                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                    At the time, Square was hosting a hackathon, requiring participants to build apps with Square API and emerging technologies like AR and geo-fencing. In response to these challenges and the requirements of the hackathon, we designed and launched ShopX!
                    </span>
            </div >
            
        </div>
    )
}

export default Problem;
