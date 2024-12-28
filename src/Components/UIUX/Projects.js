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
import { Link } from 'react-router-dom';


const Project = ({ title, src, skill, idx, timeline, link }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const imageEnter = () => {
      cursorStyleHandler("image");
    };
  
    const imageLeave = () => {
      cursorStyleHandler("default");
      console.log("mouseLeave")
    };

    return (
      <section className="project-section">
        <Link to={link} style={{cursor:"none", width:"100%"}} onClick={imageLeave}>
          <motion.div ref={ref} className="image-div" onMouseEnter={imageEnter} onMouseLeave={imageLeave}>
              <img src={src} alt="project" className="project-image"/>
          </motion.div>
        </Link>
        
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
          
          {data.map((props, idx) => (
            <Project key={idx} idx={idx} {...props} />
          ))}
        </div>
        
        <motion.div className={"progress"} style={{ scaleX }} />
      </section>
    );
  }
  