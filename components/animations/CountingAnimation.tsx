'use client';
import { HTMLMotionProps, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type CountingAnimationProps = HTMLMotionProps<'span'> & {
  countTo: number;
  duration?: number;
};

/**
 * A React component that displays a counting animation.
 *
 * @param {number} countTo - The count to display on the animation.
 * @param {number} [duration=2000] - The duration of the animation in milliseconds.
 */
function CountingAnimation({
  countTo,
  duration = 2000,
  className,
  ...props
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
      {...props}
    >
      {count}
    </motion.span>
  );
}

export default CountingAnimation;
