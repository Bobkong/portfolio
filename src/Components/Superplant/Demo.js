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
            
            <ReactPlayer url='https://www.youtube.com/watch?v=R-v5pJUZQVU'
                   width="100%" 
                   height="70vh"
                   controls
                   style={{
                    marginTop: "2rem"
                   }}/>
            
        </div>
    )
}

export default Demo;
