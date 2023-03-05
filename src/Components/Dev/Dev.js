import React from "react";
import "./Dev.css";
import {Panels} from "../LoadingPanel/panels"
import Projects from "./Projects";
import CircleBackground from "../CircleBackground/CircleBackground";


function Dev() {

  return (
    <div>
      <Panels />
      <CircleBackground />
      <Projects />
    </div>

  );
}

export default Dev;
