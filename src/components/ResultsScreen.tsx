import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { DrunkLevel } from '../types';
import { LeprechaunDisplay } from './LeprechaunDisplay';
import { Share2, RotateCcw } from 'lucide-react';

interface ResultsScreenProps {
  level: DrunkLevel;
  totalScore: number;
  onRestart: () => void;
}

export const ResultsScreen = ({ level, totalScore, onRestart }: ResultsScreenProps) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleShare = () => {
    const text = `I scored ${totalScore} on the Drunk-O-Meter and I'm a "${level.name}"! ${level.message}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Drunk-O-Meter Results',
        text: text,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      alert('Results copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-bar-dark to-bar-darker flex items-center justify-center px-4 py-12">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          colors={['#39ff14', '#ff10f0', '#f4a900']}
        />
      )}
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-5xl md:text-6xl font-bold text-neon-green mb-4 drop-shadow-[0_0_20px_rgba(57,255,20,0.5)]"
        >
          Results Are In!
        </motion.h1>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="my-12"
        >
          <LeprechaunDisplay level={level} showAnimation={true} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-bar-dark/50 border-2 border-neon-pink rounded-lg p-8 mb-8"
        >
          <h2 className="text-4xl font-bold text-beer-gold mb-4">
            Level {level.level}: {level.name}
          </h2>
          
          <p className="text-2xl text-gray-300 mb-6">
            {level.message}
          </p>
          
          <div className="text-neon-green text-lg">
            Total Score: <span className="font-bold text-3xl">{totalScore}</span> / 500
          </div>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="bg-neon-pink text-white px-8 py-4 rounded-lg text-xl font-bold 
                       hover:bg-neon-pink/80 transition-colors duration-300 
                       shadow-[0_0_20px_rgba(255,16,240,0.3)] flex items-center justify-center gap-2"
          >
            <Share2 /> Share Results
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="bg-neon-green text-bar-dark px-8 py-4 rounded-lg text-xl font-bold 
                       hover:bg-beer-gold transition-colors duration-300 
                       shadow-[0_0_20px_rgba(57,255,20,0.3)] flex items-center justify-center gap-2"
          >
            <RotateCcw /> Take Again
          </motion.button>
        </div>
        
        <p className="text-gray-500 mt-8 text-sm">
          Remember: This is for entertainment only. Please drink responsibly! 🍺
        </p>
      </motion.div>
    </div>
  );
};

