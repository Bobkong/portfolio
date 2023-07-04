import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";


function Wireframe() {
    return (
        <div>
            <span className='display-large h1' style={{marginTop: "1rem"}}>
                Time to sketch MVP features on paper to construct key user flows!
            </span>
            <p style={{marginTop: "2rem"}}>
                I sketched the ideas on paper for quick iterations and discussed with team members for development cost.
            </p>
            <img src="https://ik.imagekit.io/poonr2gma/Group_265_1-min.png?updatedAt=1688438087853" style={{width: "100%", marginTop: "2rem"}}/>
        </div>
    );
}

function FeatureTextArea(props) {
    var designPoints = [];
    for (let i = 0; i < props.points.length; i++) {
        designPoints.push(
            <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                <span>{props.points[i]}</span>
                
            </div>
        )
    }
    return (
        <div style={{position: "relative"}}>
            <span className='display-medium h2'>
                {props.title}
            </span>
            {designPoints}
            <span style={{font: "instagram-sans", fontSize: "18rem", color: "#ffffff1a", fontWeight: "700",
                    position: "absolute", top:"30%", transform: "translate(0%, -70%)"}}>{props.id}</span> 
        </div>
    );
}

const Principle = styled((props) => (
    <Box component="section" {...props}>
        <img src={props.src} style={{width: "54%", objectFit: "cover"}}/>
        <FeatureTextArea title={props.title} desc={props.desc} points={props.points} id={props.id}/>   
       
    </Box>
))(({ theme, direction }) => ({
    display: "flex",
    marginTop: "4rem",
    flexDirection: direction == "image-left" ? "row" : "row-reverse",
    columnGap: "4vw",
    alignItems: "center",
}));

function UIDesign() {
    let fontPoints=[
        'Follow age-friendly guidelines and use text size that are large enough from 16 - 22px.', 
        'Use Inter, which is a sans serif font to make reading easier.', 
        'Icon with text for less confusion.'
    ]

    let colorPoints=[
        'Follow Material Design to generate accessible color palette.', 
        'Ensure color contrast by passing at least the WCAG AA standards and mostly passing AAA standards.', 
    ]

    let colorBlindPoints=[
        'Ensure the design would be friendly for all 8 types of color-blind people.'
    ]

    let interactionPoints=[
        'Clear and big CTA buttons.',
        'Detailed instructions since older adults are typically less familiar with the technology.',
        'Confirm window to avoid hidden interactions.'
    ]
    return (
        <div>
            <span className='display-large h1' style={{marginTop: "8rem"}}>
                Then, I applied age-friendly design principles to craft hi-fi prototype.
            </span>
            <p style={{marginTop: "2rem"}}>
                Since our primary user is senior adults, when I designed the hi-fi prototype, I followed age-friendly guidelines and Material Design to make the app accessible and inclusive.
            </p>
            <Principle points={fontPoints} title="Fonts" id="1" src="https://ik.imagekit.io/poonr2gma/Group_427321968.png?updatedAt=1688440441676"/>
            <Principle points={colorPoints} title="Color" id="2" direction="image-left" src="https://ik.imagekit.io/poonr2gma/Colors_1.png?updatedAt=1688440439969"/>
            <Principle points={colorBlindPoints} title="Color-Blind Friendly" id="3" src="https://ik.imagekit.io/poonr2gma/image_46.png?updatedAt=1688440440561"/>
            <Principle points={interactionPoints} title="Intuitive Interactions" id="4" direction="image-left" src="https://ik.imagekit.io/poonr2gma/Group_427321969.png?updatedAt=1688440440723"/>
        </div>
    );
}

function Design() {
    return(
        <div style={{maxWidth: "70vw", marginLeft: "auto", marginRight: "auto", marginTop: "10rem"}}>
            <span className="label-large white">Design</span>
            <Wireframe />
            <UIDesign />
        </div>
    )
}

export default Design;
