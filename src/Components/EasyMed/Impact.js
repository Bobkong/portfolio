import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

function Impact() {
    return(
        <div style={{position: "relative", width: "100%", background: "#1b1b1b", paddingTop: "10rem", paddingBottom: "10rem", marginTop: "10rem", marginBottom: "10rem"}}>
            <div style={{width: "70vw", marginLeft: "auto", marginRight: "auto"}}>
                    <span className='display-large h1' >
                        Success & Impact
                    </span>
                    <div style={{display: "flex", rowGap: "2rem", flexDirection: "column", marginTop: "4rem"}}>
                        <div style={{display: "flex", columnGap: "12px"}}>
                            <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                            <span className="neutrals headline-large">EasyMed was awarded <span className="easymed-theme headline-large-bold">first place</span> out of 760 global participants and received the Best Integration of Responsible AI bonus prize for exemplifying Microsoft's Responsible AI principles.</span>
                        </div>

                        <div style={{display: "flex", columnGap: "12px"}}>
                            <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                            <span className="neutrals headline-large">EasyMed received <span className="easymed-theme headline-large-bold">frecognition from Microsoft</span> Developer Community blog, as well as shoutouts on Facebook @MSFTDev.US and Twitter @MSTCommunity.</span>
                        </div>

                        <div style={{display: "flex", columnGap: "12px"}}>
                            <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                            <span className="neutrals headline-large">Our user testing showed impressive results with an <span className="easymed-theme headline-large-bold">80%</span> net promoter score (compared to the average of 38% for healthcare products), <span className="easymed-theme headline-large-bold">83.3%</span> task success rate (above the average score of 78%), and a <span className="easymed-theme headline-large-bold">100%</span> user satisfaction score!</span>
                        </div>
                    </div>
                    
            </div >
            
        </div>
    )
}

export default Impact;
