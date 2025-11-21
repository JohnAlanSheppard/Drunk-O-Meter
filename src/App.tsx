import { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { QuizQuestion } from './components/QuizQuestion';
import { ResultsScreen } from './components/ResultsScreen';
import { ProgressBar } from './components/ProgressBar';
import { QUESTIONS } from './data/questions';
import { DRUNK_LEVELS } from './data/drunkLevels';
import { QuizState } from './types';

type AppState = 'start' | 'quiz' | 'results';

function App() {
  const [appState, setAppState] = useState<AppState>('start');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    totalScore: 0,
    isComplete: false,
    answers: [],
  });

  const handleStart = () => {
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

    if (nextQuestion >= QUESTIONS.length) {
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
    setAppState('start');
    setQuizState({
      currentQuestion: 0,
      totalScore: 0,
      isComplete: false,
      answers: [],
    });
  };

  const getCurrentLevel = () => {
    return DRUNK_LEVELS.find(
      level => quizState.totalScore >= level.minScore && quizState.totalScore <= level.maxScore
    ) || DRUNK_LEVELS[0];
  };

  return (
    <div className="min-h-screen bg-bar-darker">
      {appState === 'start' && <StartScreen onStart={handleStart} />}
      
      {appState === 'quiz' && (
        <div className="min-h-screen bg-gradient-to-b from-bar-dark to-bar-darker py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <ProgressBar 
              current={quizState.currentQuestion + 1} 
              total={QUESTIONS.length} 
            />
            <QuizQuestion
              question={QUESTIONS[quizState.currentQuestion]}
              onAnswer={handleAnswer}
              questionNumber={quizState.currentQuestion + 1}
              totalQuestions={QUESTIONS.length}
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

