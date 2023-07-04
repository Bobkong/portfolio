import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextImageHorizontal from "./TextImageHorizontal";

function IterationTextArea(props) {
    return (
        <div style={{position: "relative"}}>
            <p className='display-medium h2'>
                {props.title}
            </p>
            <p style={{marginTop: "1rem"}}>
                {props.desc}
            </p>
            <span style={{font: "instagram-sans", fontSize: "18rem", color: "#ffffff1a", fontWeight: "700",
                    position: "absolute", top:"30%", transform: "translate(0%, -70%)"}}>{props.id}</span> 
        </div>
    );
}

const Iteration = styled((props) => (
    <Box component="section" {...props}>
        <img src={props.src} style={{width: props.direction == "image-left" ? "40%" : "54%", objectFit: "cover"}}/>
        <IterationTextArea title={props.title} desc={props.desc} points={props.points} id={props.id}/>   
       
    </Box>
))(({ theme, direction }) => ({
    display: "flex",
    marginTop: "4rem",
    flexDirection: direction == "image-left" ? "row" : "row-reverse",
    columnGap: "4vw",
    alignItems: "center",
}));

function Iterations() {
    return (
        <div>
            <span className='display-large h1' style={{marginTop: "1rem"}}>
                Can EasyMed truly solve users’ pain points? Let’s evaluate!
            </span>
            <p style={{marginTop: "2rem"}}>
                We gathered feedback on our prototype through 5 user testing sessions, including 2 adults with polypharmacy, 2 adults without polypharmacy, and 1 healthcare practitioner.
            </p>
            <p style={{marginTop: "1rem"}}>
                From these sessions, we identified 16 potential improvements and prioritized them to determine 8 high-priority items. Next, let me show you three major improvements in my design!
            </p>
            <Iteration title="Definition for terms" desc="We added a 'question mark' feature that allows users to access definitions for complicated medical terms with a simple click." id="1" src="https://ik.imagekit.io/poonr2gma/Group_268_1.png?updatedAt=1688441872801"/>
            <Iteration title="Read long text" desc="We added an accessibility feature that allows senior users to listen to long text instead of reading it, to help those with difficulty reading." id="2" direction="image-left" src="https://ik.imagekit.io/poonr2gma/iteration_2_1.png?updatedAt=1688441872310"/>
            <Iteration title="Better onboarding process" desc="We've incorporated an onboarding process for new users to easily add their first drug and familiarize themselves with the app's key features." id="3" src="https://ik.imagekit.io/poonr2gma/iteration_3_1.png?updatedAt=1688441872435"/>
        
        </div>
    );
}

function Reviews() {
    return (
        <div>
            <span className='display-large h1' style={{marginTop: "8rem"}}>
                See how our users talk about EasyMed!
            </span>
            <TextImageHorizontal text="“I would definitely recommend this app to my friends. I find it really helpful in avoiding potential drug interactions and planning appropriate meals for daily life.” "
                subtext="- Diane, Retired, 76 years old"
                img="https://ik.imagekit.io/poonr2gma/image_52_1_.png?updatedAt=1688442545129"
                reverse="false"/>

            <TextImageHorizontal text="“I think this app is going to be a game-changer for us and our patients! It'll definitely make our work a lot easier and benefit our patients a ton.”"
                subtext="- Ryan, Physician, 45 years old"
                img="https://ik.imagekit.io/poonr2gma/image_53.png?updatedAt=1688442526857"
                reverse="true"/>

            <TextImageHorizontal text="“This app is incredible! I'm definitely going to learn a ton about adverse interactions. It'll come in handy when I have to juggle multiple medications.”"
                subtext="- Jim, College Student, 25 years old"
                img="https://ik.imagekit.io/poonr2gma/image_51.png?updatedAt=1688442527056"
                reverse="false"/>
        </div>
    );
}

function Testing() {
    return(
        <div style={{maxWidth: "70vw", marginLeft: "auto", marginRight: "auto"}}>
            <span className="label-large white">Test and Iteration</span>
            <Iterations />
            <Reviews />
        </div>
    )
}

export default Testing;
