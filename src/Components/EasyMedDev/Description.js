import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BgImage = styled((props) => (
    <Box component="section" {...props}>
        <img src="https://ik.imagekit.io/poonr2gma/Older-Woman-Medicine-Cabinet_150684340_2020-12_1336x614.jpeg?updatedAt=1681096059647" style={{width: "100%", height: "100vh", objectFit: "cover", opacity: "0.2", filter: "alpha(opacity=60)"}}/>
    </Box>
))(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
    background: "#000000"
}));

function Description() {
    return(
        <div style={{position: "relative"}}>
            <BgImage />
            <div style={{width: "70vw",
                position: "absolute", 
                top: "50%", 
                left: "50%",
                zIndex: "100", 
                transform: "translate(-50%, -50%)",}}>
                    <span className='display-large h1' >
                        Description
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        2.2 million older adults in the US are at great risk for polypharmacy, and a 50% increase in the risk of adverse drug interaction when combined use of 5 drugs. To ease the concerns of many older adults or patients who are taking multiple drugs at the same time and reduce the workload for physicians, we decided to build EasyMed.
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        By comparing the comprehensiveness of the database and the accuracy of the predictions, we selected the work from JY Ryu et al., 2018, which is expected to achieve 92.4% mean accuracy with the model employed. After deciding on the ML model, we used Azure Machine Learning to train our models, which saved us a lot of time for us. 
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        To make our product more accessible, we also built an Android mobile application and used the Azure Virtual Machine and Azure SQL Database as our backend server. To make the user experience more friendly for senior adults, we also integrated Azure Cognitive Science services (text-to-speech and speech-to-text) into our application, which can help them input food names and understand the result easily. 
                    </span>
                    <span className='headline-large neutrals' style={{marginTop: "1rem"}} >
                        Also, most people are not from a medical background, so we can’t directly show them the result from the scientific paper, so we also integrate a medical dictionary API to help users understand the complicated medical terms. And we utilize barcode scanning API and Azure speech-to-text service to help our users input drugs and food easily.
                    </span>
            </div >
            
        </div>
    )
}

export default Description;
