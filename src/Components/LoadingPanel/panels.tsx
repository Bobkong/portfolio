import {motion} from "framer-motion";
import {Animations} from "./animations";
import './panel.css'


const generateMessage = ()=>{
    const messages = [
        "Fun Fact #1: I'm the 76th generation descendant of Confucius",
        "Fun Fact #2: I'm very obsessed with playing tennis",
        "Fun Fact #3: UX design is a way for me to understand the world and humanity.",
        "Fun Fact #4: I dream to build my band and become a singer",
        "Fun Fact #5: My idol is Serena Williams!",
        "Fun Fact #6: I have both design and engineering backgrounds and experience",
        "Fun Fact #7: I love to explore emerging technology and build innovative things"]
    const randomNum = Math.floor(Math.random()*messages.length)
    return messages[randomNum]
}

const Animated = () => {
    const {transition} = Animations();
    if (window.innerWidth > 960) {
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
        <motion.div className="panel">
            <Animated />
        </motion.div>
    )
}

export {Panels};