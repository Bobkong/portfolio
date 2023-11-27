import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWorkDev";
import RoleIntro from "./RoleIntro";
import Description from "./Description";
import Demo from "./Demo";
import Achievenment from "./Achievement";

function ShopXHeader() {
    return(
        <img src="https://ik.imagekit.io/poonr2gma/Slide_16_9_-_53-min.png?updatedAt=1686973756744" style={{height: "100vh", width: "100%", objectFit: "cover"}}/>
    );
}

function ShopX() {

    useEffect(() => {
        document.title = 'ShopX';
    }, []);

    return (
        <div>
            
            <Panels />
            <ShopXHeader />
            <RoleIntro />
            <Description />
            {/* <Achievenment /> */}
            <Demo />
            <ViewMoreWork firstTitle="TENCENT MUSIC ENTERTAINMENT" secondTitle="EASYMED"/>
        </div>

    );
}

export default ShopX;
