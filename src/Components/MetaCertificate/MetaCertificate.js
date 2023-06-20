import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Achievenment from "./Achievement";

function MetaCertificateHeader() {
    return(
        <img src="https://ik.imagekit.io/poonr2gma/Group_427321963.png?updatedAt=1686974183863" style={{height: "100vh", width: "100%", objectFit: "cover"}}/>
    );
}

function MetaCertificate() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/EasyMed-min__2_.png?updatedAt=1686624936702",
        title: "EasyMed",
        link: "/dev/easymed"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/instagram-min.png?updatedAt=1679282494675",
        title: "Instagram AR",
        link: "/dev/instagram"
    }

    useEffect(() => {
        document.title = 'Meta Certificate';
    }, []);

    return (
        <div>
            
            <Panels />
            <MetaCertificateHeader />
            <RoleIntro />
            <Description />
            <Achievenment />
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default MetaCertificate;
