import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWorkDev";
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Achievenment from "./Achievement";

function MetaCertificateHeader() {
    return(
        <img src="https://ik.imagekit.io/poonr2gma/Group_427321963.png?updatedAt=1686974183863" style={{height: "100vh", width: "100%", objectFit: "cover"}}/>
    );
}

function MetaCertificate() {

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
            <ViewMoreWork firstTitle="EASYMED" secondTitle="REALISTIC EVENT SHOWCASER"/>
        </div>

    );
}

export default MetaCertificate;
