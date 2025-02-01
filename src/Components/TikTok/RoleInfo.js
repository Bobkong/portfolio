import React from "react";

function Title(props) {
    return(
        <p className='label-large white' style={{maxWidth: "70vw", marginTop: "1.2rem"}}>
            {props.content}
        </p>
    );
}

function Desc(props) {
    return(
        <p className='headline-large neutrals' style={{marginTop: "0.8rem", maxWidth: "70vw", marginBottom: "2.4rem"}}>
            {props.content}
        </p>
    );
}

function RoleIntro() {
    return(
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "70vw",
            gap: "4vw" ,
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
            marginTop: "20vh",
            marginBottom: "20vh"
        }}>
            <div style={{
                width: "33vw"}}>
                <Title content="MY ROLE"/>
                <Desc content="Product Designer"/>
                <Title content="TEAM"/>
                <Desc content="TikTok Creation Design"/>
                <Title content="TIMELINE"/>
                <Desc content="Feb 2023 - Present"/>
            </div>
            
            <div style={{
                width: "33vw"}}>
                <Title content="WHAT IS TIKTOK CREATION?"/>
                <Desc content="TikTok creation design team aims to encourage submissions by enhancing the basic creation experience and providing fun creation features. The current scope of work includes camera shooting and recording, templates and editing tools, effects usage paths, and AI features."/>
            </div>
        </div>
        
    )
}

export default RoleIntro;
