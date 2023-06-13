import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Animations} from "./animations";

const PanelStyles = styled(motion.div)`
position: absolute;
left: 0;
bottom: 0;
width: calc(var(--VW)*100);
height: calc(var(--VH)*100);
z-index: 100000;
pointer-events: none;
    .left, .right{
        height: 100vh;
        width: 50.5%;
        position: fixed;
        top: 0;
        z-index: 1001;
        background-color: #212121;
    }

    .left{
        left: 0;
    }

    .right{
        right: 0;
    }
    .message{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 100%;
        text-align: center;
        transform: translate(-50%, -50%);
        color: #ffffff;
        font-family: 'instagram-sans';
        font-size: 1.125rem;
        z-index: 1002;
        max-width: 90vw
    }
`

const generateMessage = ()=>{
    const messages = [
        "Fun Fact #1: I'm the 76th generation descendant of Confucius",
        "Fun Fact #2: I'm very obsessed with playing tennis",
        "Fun Fact #3:  I like cooking and it brings me a lot of happiness",
        "Fun Fact #4:  I dream to build my band and become a singer",
        "Fun Fact #5:  My role model is Serena Williams",
        "Fun Fact #6:  I have both design and engineering backgrounds and experience",
        "Fun Fact #7:  I love to explore emerging technology and build innovative things"]
    const randomNum = Math.floor(Math.random()*messages.length)
    return messages[randomNum]
}

const Animated = () => {
    const {transition} = Animations();
    if (window.innerWidth > 500) {
        return (
        <motion.div>
            <motion.div 
                initial={{height: 2000}}
                animate={{height: [window.innerHeight, window.innerHeight, 0, 0], 
                    top: [0, 0, window.innerHeight, window.innerHeight], transition: {...transition, duration: 3.5, times: [0, 0.6, 0.99, 1]}}}
                exit={{height: [0,0, window.innerHeight, window.innerHeight], top: [0,0,0,0], transition: {...transition, duration: 2, times: [0, 0,1, 0.9, 1]}}}
                className="left"></motion.div>
                <motion.div 
                initial={{height: 2000}}
                animate={{height: [window.innerHeight, window.innerHeight, 0, 0], top: [0,0,0,0], transition: {...transition, duration: 3.5, times: [0, 0.6, 0.99, 1]}}}
                exit={{height: [0,0, window.innerHeight, window.innerHeight], 
                    top: [window.innerHeight, window.innerHeight, 0, 0], transition: {...transition, duration: 2, times: [0, 0,1, 0.9, 1]}}}
                className="right"></motion.div>
                <motion.h2 
                initial={{opacity: 0, display: "block", top: "60%", left: "50%", x:"-50%", y:"-50%"}}
                animate={{
                    top: ["70%", "50%", "50%", "30%", "40%"],
                    left: "50%",
                    x: "-50%",
                    y:"-50%", 
                    opacity: [0, 1, 1, 0, 0],
                    transition: {...transition, duration: 3, times: [0, 0.5, 0.5, 0.99, 1]}
            }}
                exit={{display: "none", opacity: 0, transition:{duration: 0.01}}}
                className="message">{
                   generateMessage()
                }</motion.h2>
            </motion.div>)
    } else {
        return (
            <motion.div>
            <motion.div 
                className="left"></motion.div>
                <motion.div 
                className="right"></motion.div>
                <motion.h2 
                className="message">
                    Sorry! I'm still working on the responsiveness of my website. Please view on the desktop for now!
                </motion.h2>
            </motion.div>
        )
    }
    
}

const Panels = ()=>{

    return (
        <PanelStyles>
            <Animated />
        </PanelStyles>
    )
}

export {Panels};