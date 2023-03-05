import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@emotion/react";

const MotionSpan = styled(motion.span)`
  display: inline-block;
  color: ;
  font-weight: 700;
  font-family: "Instagram-Sans-Headline";
  font-size: 2rem;
  position: relative;
  z-index: 1;
`;

function Character(props) {
  const theme = useTheme();
  const controls = useAnimation();
  const blastVariants = {
    hover: {
      transition: {
        duration: 0.2
      }
    },
    blast: {
      scaleX: [1, 1.5, 1, 1.25, 0.95, 1.05, 1],
      scaleY: [1, 0.75, 1.5, 1, 1.05, 0.95, 1],
      transition: {
        times: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1],
        repeat: 0
      }
    }
  };

  const onMouseEnter = () => {
    controls.start("blast");
  };

  return (
    <motion.span
      className="display-large neutrals"
      style={{display: "inline-block"}}
      onMouseEnter={onMouseEnter}
      animate={controls}
      variants={blastVariants}
      whileHover="hover"
    >
      {props.content}
    </motion.span>
  );
}

export default Character;
