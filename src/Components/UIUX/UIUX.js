import React from "react";
import "./UIUX.css";
import {Panels} from "../LoadingPanel/panels"
import Projects from "./Projects";
import CircleBackground from "../CircleBackground/CircleBackground";


function UIUX() {

  return (
    <div>
      <Panels />
      <CircleBackground />
      <Projects />
    </div>

  );
}

export default UIUX;
