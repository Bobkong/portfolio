import React from "react";

function TextImageHorizontal(props) {

    let direction = "row"
    if (props.reverse == "true") {
        direction = "row-reverse"
    }

    return(
        <div style={{maxWidth: "100%", marginTop: "2rem", "--gap": "0rem", backgroundColor: "#313131", alignItems: "center", borderRadius: "12px",  flexDirection: direction}} className="flex">
            <div style={{width: "64%", marginTop: "2rem", marginLeft: "2rem", marginRight: "2rem"}}>
                <p className="display-medium h2" >{props.text}</p>
                <p style={{marginTop: "1rem", marginBottom: "2rem"}} >{props.subtext}</p>
            </div>
            <img src={props.img} style={{width: "32%", objectFit: "cover", borderRadius: "12px"}}/>
        </div>
    )
}

export default TextImageHorizontal;