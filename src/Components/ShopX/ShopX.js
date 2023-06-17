import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
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

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/Frame_66-min.png?updatedAt=1679282494673",
        title: "GOOGLE AROUND",
        link: "/dev/around"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/EasyMed-min__2_.png?updatedAt=1686624936702",
        title: "EASYMED",
        link: "/dev/easymed"
    }

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
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default ShopX;
