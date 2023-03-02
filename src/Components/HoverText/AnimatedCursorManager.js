import { useState, createContext } from "react";

// To be used in calling context with useContext Hooks
export const AnimatedCursorContext = createContext({
  cursorType: "default",
  cursorStyleHandler: () => {}
});

// To be wrapped around the root component
const AnimatedCursorProvider = (props) => {
  const [cursorType, setCursorType] = useState("default");

  const cursorStyleHandler = (cursorType) => {
    setCursorType(cursorType);
  };

  return (
    <AnimatedCursorContext.Provider
      value={{
        cursorType: cursorType,
        cursorStyleHandler: cursorStyleHandler
      }}
    >
      {props.children}
    </AnimatedCursorContext.Provider>
  );
};

export default AnimatedCursorProvider;
