import React from "react";
import ReactPlayer from 'react-player'


function Demo() {
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
                Demo Video
            </span>
            
            <ReactPlayer url='https://youtu.be/QGGk0U_BGrs'
                   width="100%" 
                   height="70vh"
                   style={{
                    marginTop: "2rem"
                   }}/>
            
        </div>
    )
}

export default Demo;