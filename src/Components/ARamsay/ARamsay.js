import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
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

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/instagram-min.png?updatedAt=1679282494675",
        title: "INSTAGRAM AR",
        link: "/dev/instagram"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/submit-min__1_.png?updatedAt=1686625365321",
        title: "SHOPX",
        link: "/dev/shopx"
    }

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
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default ARamsay;
