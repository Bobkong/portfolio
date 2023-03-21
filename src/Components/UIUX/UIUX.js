import React from "react";
import "./UIUX.css";
import {Panels} from "../LoadingPanel/panels"
import Projects from "./Projects";
import './Projects.css'
import {
  motion,
} from "framer-motion";


function UIUX() {

  return (
    <div>
      <Panels />
     
      <Projects />
    </div>

  );
}

export default UIUX;
