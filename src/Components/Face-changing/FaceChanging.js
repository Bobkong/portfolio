import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWorkDev";
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Demo from "./Demo";

function FaceChangingHeader() {
    return(
        <img src="https://ik.imagekit.io/poonr2gma/Group_427321967.png?updatedAt=1687227647686" style={{height: "100vh", width: "100%", objectFit: "cover"}}/>
    );
}

function FaceChanging() {


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
            <ViewMoreWork firstTitle="SUPER PLANT" secondTitle="INSTAGRAM AR"/>
        </div>

    );
}

export default FaceChanging;
