import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type CountingAnimationProps = {
  countTo: number;
  duration?: number; // in miliseconds
  className?: string;
};

function CountingAnimation({
  countTo,
  duration = 2000,
  className,
}: CountingAnimationProps) {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  useEffect(() => {
    if (!startCount) return;
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === countTo) {
          clearInterval(interval);
          return prev;
        } else {
          return prev + 1;
        }
      });
    }, duration / countTo);
  }, [startCount]);
  return (
    <motion.span
      onViewportEnter={() => {
        setStartCount(true);
      }}
      className={className}
    >
      {count}
    </motion.span>
  );
}

export default CountingAnimation;
