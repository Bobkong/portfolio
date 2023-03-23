import React from "react";

function Title(props) {
    return(
        <span className='headline-medium neutrals' style={{marginTop: "3rem", maxWidth: "70vw"}}>
            {props.content}
        </span>
    );
}

function Desc(props) {
    return(
        <span className='display-large neutrals' style={{marginTop: "1.2rem", maxWidth: "70vw", textAlign: "center"}}>
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

                <Title content="MY ROLE"/>
                <Desc content="AR Designer"/>
                <Title content="TIMELINE"/>
                <Desc content="June - September, 2022"/>
                <Title content="RESPONSIBILITY"/>
                <Desc content="AR Design, UXUI Design, AR Prototyping "/>
            </div>
        </div>
        
    )
}

export default RoleIntro;
