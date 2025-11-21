export type Question = {
  id: number;
  text: string;
  answers: { text: string; score: number }[];
};

export type DrunkLevel = {
  level: number;
  name: string;
  image: string; // leprechaun state image
  message: string;
  minScore: number;
  maxScore: number;
  leprechaunEmoji: string; // fallback emoji
};

export type QuizState = {
  currentQuestion: number;
  totalScore: number;
  isComplete: boolean;
  answers: number[];
};

