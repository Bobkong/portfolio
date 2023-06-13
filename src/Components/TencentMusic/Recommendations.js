import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const FeedbackItem = styled((props) => (
    <Box component="section" {...props}>
        <span className="headline-large neutrals">{props.content}</span>
        <img src={props.src} style={{width: "14vw", aspectRatio: "1/1"}}/>
    </Box>
))(({ theme, idx }) => ({
    [theme.breakpoints.up("md")]: {
        display: "flex",
        flexDirection: idx == "0" ? "row" : "row-reverse" ,
        alignItems: "center",
        justifyContent: "center",
        columnGap: "1.4vw"
    },
    width: "70vw",
    marginTop: "2rem",
    background: "#313131",
    borderRadius: "12px",
    padding: "36px"
}));

function Recommendations() {
    return(
        <div style={{
            position: "relative", 
            width: "70vw",
            marginLeft: "auto",
            marginRight: "auto",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"}}>
            <span className='display-large h1' >
                Received Recommendations
            </span>
            <FeedbackItem idx="0" src="https://ik.imagekit.io/poonr2gma/Group_427321956.png?updatedAt=1686628105698" content="“Lingshuang was an absolute pleasure to work with. He is a reliable partner, and he always has a positive attitude and is always willing and excited to explore better experiences for users, since he doesn't only treat a job as a job, but as a way to make other's life better.” - Olivian Chen, Product Manager @ Tencent"/>
            <FeedbackItem idx="1" src="https://ik.imagekit.io/poonr2gma/Group_427321957.png?updatedAt=1686628105400" content="““Lingshuang is an extremely talented software engineer. He is able to combine his creative energy with business objectives to develop visually compelling features for our mobile applications. We valued him both for his talent and his ability to collaborate at all levels.” - Silen Liu, Android Software Engineer @ Tencent"/>
            
        </div>
    )
}

export default Recommendations;
