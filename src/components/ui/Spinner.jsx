import React from 'react';
import { motion } from 'framer-motion';

const Spinner = ({ size = 20, color = 'white' }) => {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        border: `2px solid ${color === 'white' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
        borderTop: `2px solid ${color}`,
        borderRadius: '50%',
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="mr-2 inline-block"
    />
  );
};

export default Spinner;
