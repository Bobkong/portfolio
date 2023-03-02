import { Component, useContext, useState } from "react";
import { AnimatedCursorContext } from "./AnimatedCursorManager";
import "./HoverText.css"

function HoverText(props) {
  const { cursorStyleHandler } = useContext(AnimatedCursorContext);
  const [textClassName, setTextClassName] = useState("")

  const textEnter = () => {
    cursorStyleHandler("text");
    setTextClassName("hollow")
  };

  const textLeave = () => {
    cursorStyleHandler("default");
    setTextClassName("")
  };
  return (
    <span onMouseEnter={textEnter} onMouseLeave={textLeave} className={textClassName}>
      {props.text}
    </span>
  );
}

export default HoverText