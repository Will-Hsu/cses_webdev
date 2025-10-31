import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const displayedTextRef = useRef('');

  useEffect(() => {
    let currentIndex = 0;
    displayedTextRef.current = '';
    const interval = setInterval(() => {
      displayedTextRef.current += text[currentIndex]
      setDisplayedText(displayedTextRef.current);
      currentIndex++;
      if (currentIndex >= text.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.div>
  );
};

export default Typewriter;

