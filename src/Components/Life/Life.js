import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"
import LifePics from "./LifePics/LifePics";
import {
  motion
} from "framer-motion";
import './Life.css'
import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";

function Life() {

  useEffect(() => {
    document.title = 'Life';
  }, []);

  return (
    <div>
      <Panels />
      <LifeContent />
    </div>

  );
}

function LifeContent() {

    return (
      <section className="projects-div">
        <div className="life-header-section">
          <span className="display-large neutrals" style={{marginLeft: "10vw", marginRight: "10vw", textAlign: "center"}}>Beyond design and development, I enjoy playing tennis, hiking, music, and exploring new destinations, which keep me both physically and mentally fit and inspire me to bring fresh perspectives to my work.</span>
          <motion.span className="headline-medium neutrals scroll-down" style={{marginLeft: "12px"}}
              initial={{ y: -10}}
              animate={{ y: 5 }}
              transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              }}
          >Scroll Down</motion.span>
        </div>
        <LifePics/>
        
      </section>
    );
  }

export default Life;
