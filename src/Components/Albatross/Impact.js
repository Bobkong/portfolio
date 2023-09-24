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
                            <span className="neutrals headline-large" >Annual savings of $150k for Blue Raven Solar on the SiteCapture service.
                            </span>
                        </div>

                        <div style={{display: "flex", columnGap: "12px"}}>
                            <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                            <span className="neutrals headline-large" style={{display: "inline"}}>Reduce input errors by 100% for field employees by eliminating redundant project and personal information entry. Streamline user flow and enhance the user experience, saving approximately 10 minutes per form fill.
                            </span>
                        </div>

                        <div style={{display: "flex", columnGap: "12px"}}>
                            <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                            <span className="neutrals headline-large" style={{display: "inline"}}>Save approximately 7 minutes for office employees by eliminating the need to switch between Albatross and SiteCapture and conducting additional project searches on SiteCapture.
                            </span>
                        </div>
                    </div>
                    
            </div >
            
        </div>
    )
}

export default Impact;
