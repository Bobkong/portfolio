import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Demo from "./Demo";
import Achievenment from "./Achievement";

function EasyMedHeader() {
    return(
        <img src="https://ik.imagekit.io/poonr2gma/Slide_16_9_-_51-min.png?updatedAt=1687036492403" style={{height: "100vh", width: "100%", objectFit: "cover"}}/>
    );
}

function EasyMedDev() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/submit-min__1_.png?updatedAt=1686625365321",
        title: "SHOPX",
        link: "/dev/shopx"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/Group_427321964-min.png?updatedAt=1686977311201",
        title: "META CERTIFICATE",
        link: "/dev/metacertificate"
    }

    useEffect(() => {
        document.title = 'EasyMed';
    }, []);

    return (
        <div>
            
            <Panels />
            <EasyMedHeader />
            <RoleIntro />
            <Description />
            <Achievenment />
            <Demo />
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default EasyMedDev;
