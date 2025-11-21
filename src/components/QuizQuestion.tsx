import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../types';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (score: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuizQuestion = ({ 
  question, 
  onAnswer, 
  questionNumber, 
  totalQuestions 
}: QuizQuestionProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-3xl mx-auto"
      >
        <div className="mb-8">
          <p className="text-neon-pink text-sm font-bold mb-2">
            Question {questionNumber} of {totalQuestions}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {question.text}
          </h2>
        </div>
        
        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02, x: 10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAnswer(answer.score)}
              className="w-full text-left p-6 bg-bar-dark border-2 border-neon-green/30 
                         rounded-lg hover:border-neon-green hover:bg-bar-dark/80 
                         transition-all duration-300 group"
            >
              <p className="text-lg text-gray-200 group-hover:text-neon-green transition-colors">
                {answer.text}
              </p>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

