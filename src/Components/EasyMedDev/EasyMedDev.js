import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWorkDev";
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
            <ViewMoreWork firstTitle="SHOPX" secondTitle="META FRONT-END CERTIFICATE"/>
        </div>

    );
}

export default EasyMedDev;
