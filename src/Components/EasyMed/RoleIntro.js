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
                <Title content="MY ROLE"/>
                <Desc content="Product Designer"/>
                <Title content="TIMELINE"/>
                <Desc content="May - June, 2022 (8 weeks)"/>
                <Title content="TEAM"/>
                <Desc content="1 Product Manager, 1 Product Designer, 5 Software Engineers"/>
            </div>
        </div>
        
    )
}

export default RoleIntro;
