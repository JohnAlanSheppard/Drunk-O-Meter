import { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { QuizQuestion } from './components/QuizQuestion';
import { ResultsScreen } from './components/ResultsScreen';
import { ProgressBar } from './components/ProgressBar';
import { QUESTIONS } from './data/questions';
import { DRUNK_LEVELS } from './data/drunkLevels';
import { QuizState, Question } from './types';

type AppState = 'start' | 'quiz' | 'results';

// Function to randomly select questions
function getRandomQuestions(count: number): Question[] {
  const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function App() {
  const [appState, setAppState] = useState<AppState>('start');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    totalScore: 0,
    isComplete: false,
    answers: [],
  });
  
  // Randomly select 5-7 questions (regenerated each time quiz starts)
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  const handleStart = () => {
    // Generate new random questions each time
    const questionCount = Math.floor(Math.random() * 3) + 5; // Random between 5-7
    const newQuestions = getRandomQuestions(questionCount);
    setSelectedQuestions(newQuestions);
    
    setAppState('quiz');
    setQuizState({
      currentQuestion: 0,
      totalScore: 0,
      isComplete: false,
      answers: [],
    });
  };

  const handleAnswer = (score: number) => {
    const newAnswers = [...quizState.answers, score];
    const newScore = quizState.totalScore + score;
    const nextQuestion = quizState.currentQuestion + 1;

    if (nextQuestion >= selectedQuestions.length) {
      setQuizState({
        ...quizState,
        totalScore: newScore,
        answers: newAnswers,
        isComplete: true,
      });
      setAppState('results');
    } else {
      setQuizState({
        ...quizState,
        currentQuestion: nextQuestion,
        totalScore: newScore,
        answers: newAnswers,
      });
    }
  };

  const handleRestart = () => {
    // Clear selected questions so new ones are generated on next start
    setSelectedQuestions([]);
    setAppState('start');
    setQuizState({
      currentQuestion: 0,
      totalScore: 0,
      isComplete: false,
      answers: [],
    });
  };

  const getCurrentLevel = () => {
    // Scale the score based on number of questions (max score per question is 5)
    // For 5-7 questions, max possible score is 25-35, so we scale to 0-500 range
    const maxPossibleScore = selectedQuestions.length * 5;
    const scaledScore = Math.round((quizState.totalScore / maxPossibleScore) * 500);
    
    return DRUNK_LEVELS.find(
      level => scaledScore >= level.minScore && scaledScore <= level.maxScore
    ) || DRUNK_LEVELS[0];
  };

  return (
    <div className="min-h-screen bg-bar-darker">
      {appState === 'start' && <StartScreen onStart={handleStart} />}
      
      {appState === 'quiz' && selectedQuestions.length > 0 && (
        <div className="min-h-screen bg-gradient-to-b from-bar-dark to-bar-darker py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <ProgressBar 
              current={quizState.currentQuestion + 1} 
              total={selectedQuestions.length} 
            />
            <QuizQuestion
              question={selectedQuestions[quizState.currentQuestion]}
              onAnswer={handleAnswer}
              questionNumber={quizState.currentQuestion + 1}
              totalQuestions={selectedQuestions.length}
            />
          </div>
        </div>
      )}
      
      {appState === 'results' && (
        <ResultsScreen
          level={getCurrentLevel()}
          totalScore={quizState.totalScore}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;

