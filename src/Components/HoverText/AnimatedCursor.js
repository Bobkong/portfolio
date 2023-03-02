import { useContext } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";
import { AnimatedCursorContext } from "./AnimatedCursorManager";

const AnimatedCursor = () => {
  const { cursorType } = useContext(AnimatedCursorContext);
  const { x, y } = useMousePosition();
  const variants = {
    default: {
      x: x - 8,
      y: y - 8
    },
    text: {
      height: 90,
      width: 90,
      x: x - 45,
      y: y - 45,
      mixBlendMode: "difference"
    }
  };

  return (
    <motion.div
      style={{
        backgroundColor: "white",
      }}
      className="cursor"
      variants={variants}
      animate={cursorType}
    />
  );
};

export default AnimatedCursor;
