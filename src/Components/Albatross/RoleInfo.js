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
                <Desc content="UX Research, UX Design, UI Design"/>
                <Title content="TEAM"/>
                <Desc content="1 UX Designer, 1 Product manager, 2 Mobile Developers, 1 Web Developer, 1 Backend Developer"/>
                <Title content="TIMELINE"/>
                <Desc content="March - June, 2023"/>
            </div>
            
            <div style={{
                width: "33vw"}}>
                <Title content="WHAT IS ALBATROSS?"/>
                <Desc content="Albatross, developed by Blue Raven Solar, is a versatile customer relationship management software utilized by office and field users alike to streamline the tracking and management of solar sales and installation processes. It empowers employees to access project, process steps, and event information with ease."/>
            </div>
        </div>
        
    )
}

export default RoleIntro;
