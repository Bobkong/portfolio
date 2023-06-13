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
    },
    image: {
      height: 90,
      width: 90,
      x: x - 45,
      y: y - 45,
      mixBlendMode: "normal",
    }
  };

  return (
    <motion.div
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#000000",
      }}
      className="cursor"
      variants={variants}
      animate={cursorType}
    >
      <span className="headline-large" style={{
        display: cursorType === "image" ? "block" : "none", fontWeight: "700"
      }}>
        View
      </span>
    </motion.div>
  );
};

export default AnimatedCursor;
