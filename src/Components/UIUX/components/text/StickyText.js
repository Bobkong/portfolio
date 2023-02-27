import React, { useRef } from "react";
import { useCanvas, ScrollScene } from "@14islands/r3f-scroll-rig";
import StickyTextMesh from "./StickyTextMesh";

//import StickyScrollScene from "../StickyScrollScene";

import fontSrc from "./Instagram.ttf";

const Text = ({ children, className, style, as = "div", ...props }) => {
  const ref = useRef();

  useCanvas(
    /*<StickyScrollScene el={ref} stickyLerp={0.9} debug={false} {...props}>*/
    <ScrollScene el={ref} positionFixed {...props} scissor={false}>
      {(props) => (
        <StickyTextMesh
          el={ref}
          font={
            fontSrc
          }
          {...props}
        >
          {children}
        </StickyTextMesh>
      )}
    </ScrollScene>
    /*</StickyScrollScene>*/
  );

  const Element = as;

  return (
    <Element ref={ref} className={className} style={{ ...style }}>
      {children}
    </Element>
  );
};

export default Text;
