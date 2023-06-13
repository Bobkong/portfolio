import React, {useEffect}  from "react";
import "./Dev.css";
import {Panels} from "../LoadingPanel/panels"
import Projects from "./Projects";


function Dev() {

  useEffect(() => {
    document.title = 'Develop Work';
  }, []);

  return (
    <div>
      <Panels />
      <Projects />
    </div>

  );
}

export default Dev;
