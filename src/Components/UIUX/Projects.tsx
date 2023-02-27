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

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

interface Project {
    src: string,
    title: string,
    skill: string,
}

function Image({ project }: { project: Project }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
  
    return (
      <section className="image-section">
        <motion.div ref={ref} whileHover={{ scale: 1.05 }} className="image-div">
          <img src={project.src} alt="project" className="project-image"/>
        </motion.div>
        <motion.div style={{ y }} className="project-text-area">
          <motion.h2 className="project-name">{project.title}</motion.h2>
          <motion.h2 className="project-skill">{project.skill}</motion.h2>
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
          {data.map((Project) => (
              <Image project={Project} />
          ))}
        </div>
        
        <motion.div className="progress" style={{ scaleY: scaleX }} />
      </section>
    );
  }
  