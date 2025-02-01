import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import RoleIntro from "./RoleInfo";
import Problem from "./ContactMe";
import Solution from "./Solution";
import Takeaway from "./Takeaway";
import ContactMe from "./ContactMe";


function Header() {
    return(
        <div style={{position: "relative", width: "100vw"}}>
            <video src="https://ik.imagekit.io/poonr2gma/Screen%20Recording%202024-12-27%20at%206.mp4?updatedAt=1735351892098" autoPlay="autoplay" loop muted style={{width: "100vw", height: "92vh", objectFit: "cover"}}></video>
        </div>
    );
}


function TikTok() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/instagram-min%20(3).png?updatedAt=1695528946670",
        title: "INSTAGRAM AR",
        link: "/uiux/instagram"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/EasyMed-min%20(4).png?updatedAt=1695528946276",
        title: "EASYMED",
        link: "/uiux/easymed"
    }

    useEffect(() => {
        document.title = 'TikTok';
    }, []);

    return (
        <div>
            
            <Panels />
            <Header/>
            <RoleIntro />
            <Solution />
            <ContactMe />
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default TikTok;
