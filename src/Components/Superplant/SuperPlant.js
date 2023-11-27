import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWorkDev";
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
            <ViewMoreWork firstTitle="GOOGLE AROUND" secondTitle="CHINESE FACE-CHANGING AR FILTER"/>
        </div>

    );
}

export default SuperPlant;
