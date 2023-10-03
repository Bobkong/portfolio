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
                <Desc content="UX Design, AR Design, Development"/>
                <Title content="TEAM"/>
                <Desc content="Yilin Niu - Designer, Lingshuang Kong - Design Technologist"/>
                <Title content="TIMELINE"/>
                <Desc content="April - June, 2023"/>
            </div>
            
            <div style={{
                width: "33vw"}}>
                <Title content="WHAT IS SHOPX?"/>
                <Desc content="ShopX is an all-in-one, user-friendly mobile application designed to help customers effortlessly explore a wide range of discounts and loyalty programs, immerse themselves in engaging augmented reality experiences, and place order with great ease."/>
            </div>
        </div>
        
    )
}

export default RoleIntro;
