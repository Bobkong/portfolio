import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import ViewMoreWork from "../ViewMoreWork/ViewMoreWork";
import RoleIntro from "./RoleInfo";
import Problem from "./Problem";
import Solution from "./Solution";
import Takeaway from "./Takeaway";


function Header() {
    return(
        <div style={{position: "relative", width: "100vw"}}>
            <video src="https://ik.imagekit.io/poonr2gma/Untitled%20(3).mp4?updatedAt=1696304275248" autoPlay="autoplay" loop muted style={{width: "100vw", opacity: "0.6"}}></video>
            <div style={{position: "absolute", width: "100vw", height: "100%", top: "0%", left: "0%", transform: "translate(0%, 0%)", backgroundColor: "#00000099"}}/>  
            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <p className='display-large neutrals' style={{textAlign: "center", fontSize: "3.2rem"}}>SHOPX</p>
            </div>
        </div>
    );
}

function MockImg() {
    return(
        <div style={{ width: "100vw", marginTop: "10rem", marginBottom: "10rem"}}>
            <img src="https://ik.imagekit.io/poonr2gma/shopx%20img-min%20(2).png?updatedAt=1696303786544" style={{width:"100vw", aspectRatio:"1728/1080</div>"}} />
        </div>
    );
}

function ShopX() {

    var first = {
        src: "https://ik.imagekit.io/poonr2gma/EasyMed-min%20(4).png?updatedAt=1695528946276",
        title: "EASYMED",
        link: "/uiux/easymed"
    }
    var second = {
        src: "https://ik.imagekit.io/poonr2gma/albatross-min%20(2).png?updatedAt=1695528945180",
        title: "ALBATROSS",
        link: "/uiux/albatross"
    }
    

    useEffect(() => {
        document.title = 'ShopX';
    }, []);

    return (
        <div>
            
            <Panels />
            <Header/>
            <RoleIntro />
            <Problem />
            <Solution />
            <MockImg />
            <Takeaway />
            <ViewMoreWork firstSrc={first.src} firstTitle={first.title} firstLink={first.link} secondSrc={second.src} secondTitle={second.title} secondLink={second.link}/>
        </div>

    );
}

export default ShopX;
