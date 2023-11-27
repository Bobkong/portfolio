import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Demo from "./Demo";
import Achievenment from "./Achievement";

function EventShowcaserHeader() {
    return(
        <div style={{position: "relative", width: "100vw"}}>
            <video src="https://ik.imagekit.io/poonr2gma/a2612d77-f192-4007-81bc-5c17251ec7b4.mp4?updatedAt=1701052648633" autoPlay="autoplay" loop muted style={{width: "100vw", opacity: "0.6"}}></video>
            <div style={{position: "absolute", width: "100vw", height: "100%", top: "0%", left: "0%", transform: "translate(0%, 0%)", backgroundColor: "#00000099"}}/>  
            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <p className='display-large neutrals' style={{textAlign: "center", fontSize: "3.2rem"}}>REALISTIC EVENT SHOWCASER</p>
            </div>
        </div>
    );
}

function EventShowcaser() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/Group_427321964-min.png?updatedAt=1686977311201",
        title: "META CERTIFICATES",
        link: "/dev/metacertificate"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/instagram-min.png?updatedAt=1679282494675",
        title: "INSTAGRAM AR",
        link: "/dev/instagram"
    }

    useEffect(() => {
        document.title = 'Realistic Event Showcaser';
    }, []);

    return (
        <div>
            
            <Panels />
            <EventShowcaserHeader />
            <RoleIntro />
            <Description />
            <Achievenment />
            <Demo />
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default EventShowcaser;
