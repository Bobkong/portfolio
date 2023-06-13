import React, {useEffect}  from "react";
import "./UIUX.css";
import {Panels} from "../LoadingPanel/panels"
import Projects from "./Projects";
import './Projects.css'
import {
  motion,
} from "framer-motion";


function UIUX() {

  useEffect(() => {
    document.title = 'Design Work';
  }, []);

  return (
    <div>
      <Panels />
     
      <Projects />
    </div>

  );
}

export default UIUX;
