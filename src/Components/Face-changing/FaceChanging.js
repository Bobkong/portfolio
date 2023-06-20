import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Demo from "./Demo";

function FaceChangingHeader() {
    return(
        <img src="https://ik.imagekit.io/poonr2gma/Group_427321967.png?updatedAt=1687227647686" style={{height: "100vh", width: "100%", objectFit: "cover"}}/>
    );
}

function FaceChanging() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/instagram-min.png?updatedAt=1679282494675",
        title: "INSTAGRAM AR",
        link: "/dev/instagram"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/superplant.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1676001158381",
        title: "SUPER PLANT",
        link: "/dev/superplant"
    }

    useEffect(() => {
        document.title = 'Face-Changing';
    }, []);

    return (
        <div>
            
            <Panels />
            <FaceChangingHeader />
            <RoleIntro />
            <Description />
            <Demo />
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default FaceChanging;
