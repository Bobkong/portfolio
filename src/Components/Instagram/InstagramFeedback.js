import React from "react";
import Iframe from 'react-iframe'
import './Instagram.css'

function InstagramFeedback() {
    return(
        <div style={{
            width: "70vw",
            margin: "auto",
            marginTop: "8rem"
        }}>
            <span className='headline-medium neutrals'>
                I received a lot of positive feedback from the team. I'm so honored that everyone loves my work and my workflow. These pieces of feedback are the most precious memory of this unforgettable summer. (Drag to see more!)
            </span>
            <Iframe url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2tyC0lOABDAr9TwDruvTcI%2FFeedback-about-me!%3Fnode-id%3D0-167%26scaling%3Dmin-zoom%26page-id%3D0%253A1"
                            width="1000px"
                            height="1000px"
                            display="block"
                            position="relative"
                            className="instagram-feedback-iframe"/>
    
        </div>
    )
}

export default InstagramFeedback;
