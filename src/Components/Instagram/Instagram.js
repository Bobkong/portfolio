import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import {
  motion,
} from "framer-motion";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import RoleIntro from "./RoleIntro";
import Problem from "./Problem";
import AREffect from "./AREffect";
import TeamIntro from "./TeamIntro";
import InstagramLife from "./InstagramLife";
import InstagramFeedback from "./InstagramFeedback";
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import Takeaway from "./Takeaway";

function InsHeader() {
    return(
        <div style={{position: "relative", width: "100vw"}}>
                <video src="https://ik.imagekit.io/poonr2gma/instagram-ar.mp4?updatedAt=1679544573490" autoPlay="autoplay" loop style={{width: "100vw"}}></video>
                <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <p className='display-large neutrals' style={{textAlign: "center", fontSize: "3.2rem"}}>INSTAGRAM AR DESIGN</p>
                </div>
        </div>
    );
}

function Interested() {
    return(
        <p className='headline-large neutrals' style={{maxWidth: "70vw", marginTop: "2rem", marginLeft: "auto", marginRight: "auto"}}>
            If you are interested in learning more about the work and the design process, feel free to contact me!
        </p>
    );
}


function Instagram() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/EasyMed-min__2_.png?updatedAt=1686624936702",
        title: "EASYMED",
        link: "/uiux/easymed"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/albatross-min.png?updatedAt=1679282494657",
        title: "BLUE RAVEN SOLAR",
        link: "/uiux/blueraven"
    }

    useEffect(() => {
        document.title = 'Instagram';
    }, []);

    return (
        <div>
            
            <Panels />
            <InsHeader />
            <RoleIntro />
            <TeamIntro />
            <Problem />
            <AREffect />
            <Takeaway />
            <InstagramLife />
            <InstagramFeedback />
            <Interested />
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default Instagram;
