import React from "react";
import ReactPlayer from 'react-player'


function Demo() {
    return(
        <div style={{
            position: "relative", 
            width: "70vw",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"}}>
            <span className='display-large h1' >
                Demo Video
            </span>
            
            <span className='headline-large neutrals' style={{marginTop: "1rem"}}>
                This filter has garnered the attention of over 23.5k users and has been utilized in stories and reels on more than 2500 occasions. To gain a deeper understanding of Chinese face-changing and the filter's capabilities, you can watch the following video!
            </span>

            <ReactPlayer url='https://www.youtube.com/watch?v=5ayy7wcfeHU&t=60s'
                   width="100%" 
                   height="70vh"
                   style={{
                    marginTop: "2rem"
                   }}/>

            <ReactPlayer url='https://youtube.com/shorts/3qUQIvLOYhk'
                   width="100%" 
                   height="70vh"
                   style={{
                    marginTop: "2rem"
                   }}/>
            
        </div>
    )
}

export default Demo;
