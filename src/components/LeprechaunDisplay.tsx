import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { DrunkLevel } from '../types';

interface LeprechaunDisplayProps {
  level: DrunkLevel;
  showAnimation?: boolean;
}

export const LeprechaunDisplay = ({ level, showAnimation = false }: LeprechaunDisplayProps) => {
  const [displayLevel, setDisplayLevel] = useState(level.level);
  
  useEffect(() => {
    if (showAnimation) {
      setDisplayLevel(level.level);
    }
  }, [level, showAnimation]);
  
  // Calculate rotation based on drunk level (0-20 degrees tilt)
  const rotation = (level.level - 1) * 1.5;
  
  // Calculate wobble intensity
  const wobbleIntensity = Math.min(level.level * 2, 20);
  
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        rotate: rotation,
      }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <motion.div
        animate={showAnimation ? {
          x: [-wobbleIntensity, wobbleIntensity, -wobbleIntensity],
          y: [0, wobbleIntensity/2, 0]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-9xl filter drop-shadow-lg"
        style={{
          filter: `blur(${level.level * 0.3}px) hue-rotate(${level.level * 10}deg)`
        }}
      >
        {level.leprechaunEmoji}
      </motion.div>
      
      {/* Dizzy stars effect for higher levels */}
      {level.level > 10 && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
        >
          <span className="text-4xl">✨</span>
        </motion.div>
      )}
    </motion.div>
  );
};

