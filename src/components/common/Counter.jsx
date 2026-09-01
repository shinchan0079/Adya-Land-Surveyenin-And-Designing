import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Counter = ({ 
  from = 0, 
  to, 
  duration = 2,
  suffix = "",
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(from, {
    duration: duration * 1000,
    bounce: 0,
    stiffness: 50,
    damping: 20
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(to);
    }
  }, [isInView, springValue, to]);

  const displayValue = useTransform(springValue, (current) => {
    return Math.round(current).toString() + suffix;
  });

  return (
    <span ref={ref} className={className}>
      <motion.span>{displayValue}</motion.span>
    </span>
  );
};

export default Counter;
