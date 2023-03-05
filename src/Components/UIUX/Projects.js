import { useRef, useContext } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import React from "react"
import data from "./ProjectData.json";
import './Projects.css'
import { Scale } from "@mui/icons-material";
import HoverText from '../HoverText/HoverText';
import { AnimatedCursorContext } from "../HoverText/AnimatedCursorManager";

const Image = ({ title, src, skill }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const imageEnter = () => {
      cursorStyleHandler("image");
    };
  
    const imageLeave = () => {
      cursorStyleHandler("default");
    };
  
    return (
      <section className="image-section">
        <motion.div ref={ref} className="image-div" onMouseEnter={imageEnter} onMouseLeave={imageLeave}>
          <img src={src} alt="project" className="project-image"/>
        </motion.div>
        <motion.div style={{ y }} className="project-text-area">
          <motion.h2 className="project-name neutrals display-large"><HoverText text={title}/></motion.h2>
          <motion.h2 className="project-name neutrals-lighten-1 body-large"><HoverText text={skill}/></motion.h2>
        </motion.div>
      </section>
    );
}

export default function Projects() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.00001,
    });

    return (
      <section className="projects-div">
        <div>
          <motion.div className="image-section" style={{pointerEvents: "none"}}>
            <span className="display-large neutrals" style={{marginLeft: "10vw", marginRight: "10vw", textAlign: "center"}}>Lingshuang is a passionate designer who loves figuring out inconvenience, designing human-centered solutions, and connecting technology and humanity.</span>
            <motion.span className="headline-medium neutrals scroll-down" style={{marginLeft: "12px"}}
              initial={{ y: -10}}
              animate={{ y: 5 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >Scroll Down</motion.span>
          </motion.div>
          {data.map((props, idx) => (
                    <Image key={idx} idx={idx} {...props} />
          ))}
        </div>
        
        <motion.div className={"progress"} style={{ scaleX }} />
      </section>
    );
  }
  