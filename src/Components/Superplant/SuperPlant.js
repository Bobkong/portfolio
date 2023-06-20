import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Demo from "./Demo";
import Achievenment from "./Achievement";

function SuperPlantHeader() {
    return(
        <img src="https://ik.imagekit.io/poonr2gma/Mario_27s_power_plants.png?updatedAt=1687226034673" style={{height: "100vh", width: "100%", objectFit: "cover"}}/>
    );
}

function SuperPlant() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/submit-min__1_.png?updatedAt=1686625365321",
        title: "SHOPX",
        link: "/dev/shopx"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/mecat.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1676001158022",
        title: "MECAT",
        link: "/dev/mecat"
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
