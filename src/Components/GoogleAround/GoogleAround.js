import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Demo from "./Demo";
import Achievenment from "./Achievement";

function AroundHeader() {
    return(
        <img src="https://ik.imagekit.io/poonr2gma/Slide_16_9_-_50-min__1_.png?updatedAt=1686957212035" style={{height: "100vh", width: "100%", objectFit: "cover"}}/>
    );
}

function GoogleAround() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/tencentmusic__1_-min.gif?updatedAt=1686626339282",
        title: "TECENT MUSIC",
        link: "/dev/tencentmusic"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/submit-min__1_.png?updatedAt=1686625365321",
        title: "SHOPX",
        link: "/dev/shopx"
    }

    useEffect(() => {
        document.title = 'Google ARound';
    }, []);

    return (
        <div>
            
            <Panels />
            <AroundHeader />
            <RoleIntro />
            <Description />
            <Achievenment />
            <Demo />
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default GoogleAround;
