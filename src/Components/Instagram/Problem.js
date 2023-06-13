import { height } from "@mui/system";
import React from "react";

function Problem() {
    return(
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "70vw",
            columnGap: "2vw",
            marginTop: "10rem"
            }}>

            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "34vw",
                rowGap: "1rem",
            }}>
                <span className='display-large h1' >
                    MY OBJECTIVE
                </span>
                <span className="headline-large neutrals" style={{marginTop: "1rem"}}>
                To achieve our mission, the development and shipment of new AR hand-tracking capabilities is a crucial part of our roadmap. 
                </span>
                <span className="headline-large neutrals">
                My objective is to create and release 1-2 AR experiences that demonstrate the exciting possibilities of hand-tracking technology on Instagram.
                </span>
            </div>
            <img src="https://ik.imagekit.io/poonr2gma/254972326_1066472910845861_1350348329089701516_n.gif?updatedAt=1679802876682" style={{width: "34vw", aspectRatio: "5/3", objectFit: "cover"}}/>
            
        </div>
        
        
    )
}

export default Problem;
