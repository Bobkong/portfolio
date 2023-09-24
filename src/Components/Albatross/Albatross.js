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
            <video src="https://ik.imagekit.io/poonr2gma/albatross.mp4?updatedAt=1695497340995" autoPlay="autoplay" loop style={{width: "100vw", opacity: "0.6"}}></video>
                <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <p className='display-large neutrals' style={{textAlign: "center", fontSize: "3.2rem"}}>ALBATROSS</p>
                </div>
        </div>
    );
}

function Albatross() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/EasyMed-min%20(4).png?updatedAt=1695528946276",
        title: "EASYMED",
        link: "/uiux/easymed"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/shopx-min%20(2).png?updatedAt=1695528943952",
        title: "SHOPX",
        link: "/uiux/shopx"
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
