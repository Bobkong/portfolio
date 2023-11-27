import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Recommendations from "./Recommendations";
import ViewMoreWork from "../ViewMoreWork/ViewMoreWorkDev";

function TencentHeader() {
    return(
        <img src="https://ik.imagekit.io/poonr2gma/qqmusic-min.png?updatedAt=1686625712530" style={{height: "100vh", width: "100%", objectFit: "cover"}}/>
    );
}

function TencentMusic() {

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
            <ViewMoreWork firstTitle="SHOPX" secondTitle="EASYMED"/>
        </div>

    );
}

export default TencentMusic;
