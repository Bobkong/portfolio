import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import RoleIntro from "./RoleInfo";
import Problem from "./Problem";
import Solution from "./Solution";
import Impact from "./Impact";
import Process from "./Process";
import Takeaway from "./Takeaway";
import Contact from "../Contact/Contact";
import ContactMe from "./ContactMe";


function Header() {
    return(
        <div style={{position: "relative", width: "100vw"}}>
            <video src="https://ik.imagekit.io/poonr2gma/albatross%20(1).mp4?updatedAt=1695587122391" autoPlay="autoplay" loop muted style={{width: "100vw", opacity: "0.6"}}></video>
            <div style={{position: "absolute", width: "100vw", height: "100%", top: "0%", left: "0%", transform: "translate(0%, 0%)", backgroundColor: "#00000099"}}/>  
            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <p className='display-large neutrals' style={{textAlign: "center", fontSize: "3.2rem"}}>ALBATROSS</p>
            </div>
        </div>
    );
}

function Albatross() {
    
    var first = {
        src: "https://ik.imagekit.io/poonr2gma/shopx.png?updatedAt=1738039673612",
        title: "SHOPX",
        link: "/uiux/shopx"
    }

    var second = {
        src: "https://ik.imagekit.io/poonr2gma/tiktok.png?updatedAt=1738039673730",
        title: "TIKTOK",
        link: "/uiux/tiktok"
    }

    useEffect(() => {
        document.title = 'Albatross';
    }, []);

    return (
        <div>
            
            <Panels />
            <Header/>
            <RoleIntro />
            <Problem />
            <Solution />
            <Impact />
            <Process />
            <Takeaway />
            <ContactMe />
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default Albatross;
