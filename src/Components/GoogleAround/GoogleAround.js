import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWorkDev";
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
            <ViewMoreWork firstTitle="ARAMSAY" secondTitle="SUPER PLANT"/>
        </div>

    );
}

export default GoogleAround;
