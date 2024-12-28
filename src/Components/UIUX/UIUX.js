import React, {Fragment, useEffect}  from "react";
import "./UIUX.css";
import {Panels} from "../LoadingPanel/panels"
import Projects from "./Projects";
import './Projects.css'
import {
  motion,
} from "framer-motion";


function UIUX() {

  return (
    <Fragment>
      <Projects />
    </Fragment>

    

  );
}

export default UIUX;
