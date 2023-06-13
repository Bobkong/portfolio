import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Recommendations from "./Recommendations";

function TencentHeader() {
    return(
        <img src="https://ik.imagekit.io/poonr2gma/qqmusic-min.png?updatedAt=1686625712530" style={{height: "100vh", width: "100%", objectFit: "cover"}}/>
    );
}

function TencentMusic() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/submit-min__1_.png?updatedAt=1686625365321",
        title: "SHOPX",
        link: "/dev/shopx"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/Frame_66-min.png?updatedAt=1679282494673",
        title: "GOOGLE AROUND",
        link: "/dev/around"
    }

    useEffect(() => {
        document.title = 'Tencent Music';
    }, []);

    return (
        <div>
            
            <Panels />
            <TencentHeader />
            <RoleIntro />
            <Description />
            <Recommendations />
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default TencentMusic;
