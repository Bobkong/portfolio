import React from "react";
import { AnimatedCursorContext } from "../HoverText/AnimatedCursorManager";
import {useContext} from 'react';

function Impact() {

    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const textEnter = () => {
      cursorStyleHandler("text");
    };
  
    const textLeave = () => {
      cursorStyleHandler("default");
    };

    return(
        <div style={{position: "relative", width: "100%", background: "#1b1b1b", paddingTop: "10rem", paddingBottom: "10rem", marginTop: "10rem", marginBottom: "10rem"}}>
            <div style={{width: "70vw", marginLeft: "auto", marginRight: "auto"}}>
                    <span className='display-large h1' >
                        Success & Impact
                    </span>
                    <div style={{display: "flex", rowGap: "2rem", flexDirection: "column", marginTop: "4rem"}}>
                        <div style={{display: "flex", columnGap: "12px"}}>
                            <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                            <span className="neutrals headline-large" >EasyMed was awarded first place out of 760 global participants and received the Best Integration of Responsible AI bonus prize for exemplifying Microsoft's Responsible AI principles.
                            </span>
                        </div>

                        <div style={{display: "flex", columnGap: "12px"}}>
                            <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                            <span className="neutrals headline-large" style={{display: "inline"}}>EasyMed is <a className="neutrals headline-large" style={{display: "inline", cursor: "none", textDecoration: "underline"}} href="https://techcommunity.microsoft.com/t5/azure-developer-community-blog/winners-announced-responsible-ai-global-hackathon/ba-p/3600131" target="_blank" onMouseEnter={textEnter} onMouseLeave={textLeave}>featured on Microsoft</a>  Azure Developer Community, as well as shoutouts on Facebook @MSFTDev.US and Twitter @MSTCommunity.
                            </span>
                        </div>

                        <div style={{display: "flex", columnGap: "12px"}}>
                            <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                            <span className="neutrals headline-large" style={{display: "inline"}}>Our user testing showed impressive results with an 
                                <span style={{display: "inline"}}>  85%</span> net promoter score (compared to the average of 38% for healthcare products),
                                <span style={{display: "inline"}}>  95.2%</span> task success rate (above the average score of 78%), and a
                                <span style={{display: "inline"}}>  100%</span> user satisfaction score!
                            </span>
                        </div>
                    </div>
                    
            </div >
            
        </div>
    )
}

export default Impact;
