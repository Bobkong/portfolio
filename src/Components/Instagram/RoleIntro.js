import React from "react";

function Title(props) {
    return(
        <span className='headline-large neutrals' style={{maxWidth: "70vw", marginTop: "1.2rem"}}>
            {props.content}
        </span>
    );
}

function Desc(props) {
    return(
        <span className='display-large h1' style={{marginTop: "1.2rem", maxWidth: "70vw", textAlign: "center", marginBottom: "2.4rem"}}>
            {props.content}
        </span>
    );
}

function RoleIntro() {
    return(
        <div>
            <div style={{
                width: "100vw", 
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"}}>
                <img src="https://ik.imagekit.io/poonr2gma/instagram-logo.gif?updatedAt=1679544868918" style={{width: "6rem", height: "6rem"}}/>
                <Title content="MY ROLE"/>
                <Desc content="AR Design Intern"/>
                <Title content="TIMELINE"/>
                <Desc content="June - September, 2022"/>
                <Title content="ROLE"/>
                <Desc content="AR Design, UXUI Design, AR Prototyping "/>
            </div>
        </div>
        
    )
}

export default RoleIntro;
