import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextImageHorizontal from "./TextImageHorizontal";

function SecondaryResarch() {
    return(<div>
        <span className='display-large h1' style={{marginTop: "1rem"}}>
            First of all, let’s quickly and affordably gather some information about polypharmacy by secondary research.
        </span>
        <div className="flex" style={{"--gap": "2rem", marginTop: "2rem", alignItems: "center"}}>
            <div>
                <span >I gathered some key statistics that strengthened our resolve to build EasyMed:</span>
                <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                    <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                    <span>Nearly 500 million older adults globally are at great risk for polypharmacy.</span>
                </div>
                <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                    <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                    <span>50% increase in the risk of adverse drug interaction when combined use of 5 drugs.</span>
                </div>
                <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                    <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                    <span>2+ potential drug-food interaction per month when combined use of 5 drugs.</span>
                </div>
            </div>
            
            <img src="https://ik.imagekit.io/poonr2gma/image_26.png?updatedAt=1688415201346"style={{width: "40%", objectFit: "cover", borderRadius: "12px"}}/>
        </div>
    </div>);
}

function CompetitiveAnalysis() {
    return (
        <div>
            <span className='display-large h1' style={{marginTop: "8rem"}}>
                Competitors had no drug-food interaction check feature, and are not age-friendly.
            </span>
            <p style={{marginTop: "2rem"}}>
                Considering the above statistic, I examined the top 6 medical products for these issues. However, none of them featured a drug-food interactions check or were age-friendly. To highlight our advantages, we'll provide drug-food internaction check and design a age-friendly product for the elderly.
            </p>
            <img src="https://ik.imagekit.io/poonr2gma/Frame_87.png?updatedAt=1688422404699" style={{width: "100%", marginTop: "2rem"}}/>
        </div>
    );
}

function UserInterview() {
    return (
        <div>
            <span className='display-large h1' style={{marginTop: "8rem"}}>
                We know polypharmarcy is very harmful, but how do people perceive it?
            </span>
            <p style={{marginTop: "2rem"}}>
                To collect in-depth information on people's thoughts, experiences, and pain points about poly-drug use, we conducted 6 interviews with 3 senior adults with polypharmacy, 2 young adults, and 1 healthcare practitioner.
            </p>
            <span className='display-medium h2' style={{marginTop: "2rem"}}>
                Key Insights
            </span>
            <TextImageHorizontal text="Senior adults are particularly concerned, but learning these risks can be difficult for them."
                subtext="“When I read the instructions on the drug back, it takes too much time to understand the terms and the text is often too small.” - Mary, Retired, 84 years old."
                img="https://ik.imagekit.io/poonr2gma/image_37_1_.png?updatedAt=1688423841810"
                reverse="false"/>

            <TextImageHorizontal text="Healthcare professionals don't have time to explain all drug interactions to every patient."
                subtext="“Checking drug-drug interactions is very important for patients yet it’s hard to remind every patient with everything” - Vanessa, Nurse, 34 years old."
                img="https://ik.imagekit.io/poonr2gma/image_38_1_.png?updatedAt=1688423841778"
                reverse="true"/>

            <TextImageHorizontal text="Young adults usually have limited ideas about polypharmacy. Neglect may lead to risks."
                subtext="“I know the term, but I don’t know where to learn the related knowledge and I think that may consume a lot of my time.” - Yilin, College Student, 23 years old."
                img="https://ik.imagekit.io/poonr2gma/image_32_1_.png?updatedAt=1688423841711"
                reverse="false"/>
        </div>
    );
}

function Understand() {
    return(
        <div style={{width: "100%"}}>
            <div style={{width: "70vw", marginLeft: "auto", marginRight: "auto", paddingBottom: "10rem"}}>
                <span className="label-large white">understand</span>
                <SecondaryResarch />
                <CompetitiveAnalysis />
                <UserInterview />
            </div>
        </div>
        
    )
}

export default Understand;
