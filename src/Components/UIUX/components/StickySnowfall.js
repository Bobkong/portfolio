import React, { useRef, useEffect } from "react";
import { useCanvas, ScrollScene } from "@14islands/r3f-scroll-rig";

import Snowfall from "./snowfall/Snowfall";
import StickyScrollScene from "./StickyScrollScene";

const StickySnowfall = (props) => {
  const ref = useRef();

  useCanvas(
    <ScrollScene
      el={ref}
      debug={false}
      scissor={false}
      positionFixed
      {...props}
    >
      {(props) => {
        return <Snowfall {...props} />;
      }}
    </ScrollScene>
  );

  return (
    <div
      style={{
        position: "absolute",
        top: "-1px",
        left: 0,
        width: "100%",
        height: "100%",
        background: "green"
      }}
      ref={ref}
    ></div>
  );
};

export default StickySnowfall;
