import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({
        x: clientX,
        y: clientY
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
