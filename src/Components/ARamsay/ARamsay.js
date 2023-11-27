import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWorkDev";
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Demo from "./Demo";

function ARamsayHeader() {
    return(
        <div style={{position: "relative", width: "100vw"}}>
            <img src="https://ik.imagekit.io/poonr2gma/aramsay_bg.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1676001159109" style={{height: "100vh", width: "100%", objectFit: "cover", opacity: "0.5"}}/>
            <div style={{position: "absolute", top: "50%", left: "16%", transform: "translate(-16%, -50%)"}}>
                <span className='display-large white' style={{textAlign: "left", fontSize: "3.2rem", fontWeight: "700"}}>ARamsay</span>
                <span className='headline-large neutrals' style={{textAlign: "left", marginTop: "1rem", maxWidth: "30vw"}}>A HoloLens AR application that allows users to turn pages of recipes with easy hand gestures and without touching phones.</span>
            </div>
        </div>
    );
}

function ARamsay() {

    useEffect(() => {
        document.title = 'ARamsay';
    }, []);

    return (
        <div>
            
            <Panels />
            <ARamsayHeader />
            <RoleIntro />
            <Description />
            <Demo />
            <ViewMoreWork firstTitle="INSTAGRAM AR" secondTitle="GOOGLE AROUND"/>
        </div>

    );
}

export default ARamsay;
