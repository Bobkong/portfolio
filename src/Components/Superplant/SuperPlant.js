import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Demo from "./Demo";
import Achievenment from "./Achievement";

function SuperPlantHeader() {
    return(
        <img src="https://ik.imagekit.io/poonr2gma/Group_427321966-min.png?updatedAt=1687227282332" style={{height: "100vh", width: "100%", objectFit: "cover"}}/>
    );
}

function SuperPlant() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/submit-min__1_.png?updatedAt=1686625365321",
        title: "SHOPX",
        link: "/dev/shopx"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/O1CN01EnTmsd2DYT3JzBPiP___3970368621.jpg?updatedAt=1687229584918",
        title: "FACE-CHANGING",
        link: "/dev/facechanging"
    }

    useEffect(() => {
        document.title = 'SuperPlant';
    }, []);

    return (
        <div>
            
            <Panels />
            <SuperPlantHeader />
            <RoleIntro />
            <Description />
            <Demo />
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default SuperPlant;