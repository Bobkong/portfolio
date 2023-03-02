import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import React from "react"
import data from "./ProjectData.json";
import './Projects.css'
import { Scale } from "@mui/icons-material";
import HoverText from '../HoverText/HoverText';

const Image = ({ title, src, skill }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
  
    return (
      <section className="image-section">
        <motion.div ref={ref} whileHover={{ scale: 1.05 }} className="image-div">
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
      restDelta: 0.001
    });
  
    return (
      <section className="projects-div">
        <div>
          {data.map((props, idx) => (
                    <Image key={idx} idx={idx} {...props} />
          ))}
        </div>
        
        <motion.div className="progress" style={{ scaleX }} />
      </section>
    );
  }
  