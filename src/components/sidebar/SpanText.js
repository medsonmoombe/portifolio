import React, { useState } from "react";
import { motion, transform, useAnimationControls } from "framer-motion";

export const SpanText = ({ children }) => {
  const [play, setPlay] = useState(false);
  const controls = useAnimationControls();
  const expand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
    });
    setPlay(true)
  };
  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!play) expand();
      }}
      onAnimationComplete={() => setPlay(false)}
    >
      {children}
    </motion.span>
  );
};
