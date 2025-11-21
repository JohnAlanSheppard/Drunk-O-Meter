import { motion } from 'framer-motion';
import { Beer } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bar-dark to-bar-darker flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl mb-8"
        >
          🍺
        </motion.div>
        
        <h1 className="text-6xl font-bold text-neon-green mb-4 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">
          DRUNK-O-METER
        </h1>
        
        <h2 className="text-3xl text-beer-gold mb-8">
          Deluxe Edition
        </h2>
        
        <p className="text-gray-300 text-xl mb-12">
          Answer 100 brutally honest questions to discover your true level of intoxication.
          <br />
          <span className="text-neon-pink">Warning: Results may hurt feelings</span>
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="bg-neon-green text-bar-dark px-12 py-4 rounded-lg text-2xl font-bold 
                     hover:bg-beer-gold transition-colors duration-300 
                     shadow-[0_0_20px_rgba(57,255,20,0.3)]"
        >
          Let's Find Out <Beer className="inline-block ml-2" />
        </motion.button>
        
        <p className="text-gray-500 mt-8 text-sm">
          Must be 21+ to take this quiz (or pretend to be)
        </p>
      </motion.div>
    </div>
  );
};

