import React from "react";
import {Panels} from "../LoadingPanel/panels"
import CircleBackground from "../CircleBackground/CircleBackground";
import LifePics from "./LifePics/LifePics";
import {
  motion
} from "framer-motion";
import './Life.css'
import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";

function Life() {

  return (
    <div>
      <Panels />
      <CircleBackground />
      <LifeContent />
    </div>

  );
}

function LifeContent() {

    return (
      <section className="projects-div">
        <div className="life-header-section">
          <span className="display-large neutrals" style={{marginLeft: "10vw", marginRight: "10vw", textAlign: "center"}}>Aside from design and development, I love playing tennis, hiking, music, and traveling. These hobbies make me better both physically and mentally.</span>
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
