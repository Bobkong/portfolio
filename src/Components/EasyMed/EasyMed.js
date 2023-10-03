import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import RoleIntro from "./RoleIntro";
import Problem from "./Problem";
import Solution from "./Solution";
import Impact from "./Impact";
import InProgress from "../InProgress/InProgress";
import Understand from "./Understand";
import Ideation from "./Ideation";
import Design from "./Design";
import Testing from "./Testing";
import FutureWork from "./FutureWork";
import Takeaway from "./Takeaway";

function InsHeader() {
    return(
        <div style={{position: "relative", width: "100vw"}}>
                <video src="https://ik.imagekit.io/poonr2gma/easymed-bg.mp4?updatedAt=1695587302965" autoPlay="autoplay" loop muted style={{width: "100vw", opacity: "0.6"}}></video>
                <div style={{position: "absolute", width: "100vw", height: "100%", top: "0%", left: "0%", transform: "translate(0%, 0%)", backgroundColor: "#00000099"}}/>
                <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <p className='display-large neutrals' style={{textAlign: "center", fontSize: "3.2rem"}}>EASYMED</p>
                </div>
        </div>
    );
}

function EasyMed() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/instagram-min%20(3).png?updatedAt=1695528946670",
        title: "INSTAGRAM AR",
        link: "/uiux/instagram"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/albatross-min%20(2).png?updatedAt=1695528945180",
        title: "ALBATROSS",
        link: "/uiux/albatross"
    }

    useEffect(() => {
        document.title = 'EasyMed';
    }, []);

    return (
        <div>
            
            <Panels />
            <InsHeader/>
            <RoleIntro />
            <Problem />
            <Solution />
            <Impact />
            <Understand />
            <div style={{backgroundColor: "#1b1b1b", width: "100%", paddingTop: "10rem", paddingBottom: "10rem"}}>
                <Ideation />
            </div>
            <Design />
            <div style={{backgroundColor: "#1b1b1b", width: "100%", marginTop: "10rem", paddingTop: "10rem", paddingBottom: "10rem"}}>
                <Testing />
            </div>
            <FutureWork />
            <div style={{backgroundColor: "#1b1b1b", width: "100%", marginTop: "10rem", paddingTop: "10rem", paddingBottom: "10rem"}}>
                <Takeaway />
            </div>
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default EasyMed;
