import React from "react";

function Problem() {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
            }}>
            <img src="https://ik.imagekit.io/poonr2gma/instagram-logo.gif?updatedAt=1679544868918" style={{width: "6rem", height: "6rem"}}/>
            <span className="display-large neutrals" style={{maxWidth: "70vw", textAlign: "center"}}>
            To achieve our mission, the development and shipment of new AR hand-tracking capabilities is a crucial part of our roadmap. 
            </span>
            <span className="display-large neutrals" style={{maxWidth: "70vw", textAlign: "center"}}>
            My objective is to create and release 1-2 AR experiences that demonstrate the exciting possibilities of hand-tracking technology on Instagram.
            </span>
        </div>
        
        
    )
}

export default Problem;
