import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Quiz as QuizType } from '../data/adventDays';

interface QuizProps {
  quiz: QuizType | null;
}

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(false);

  if (!quiz) {
    return <p className="no-quiz">Kein Quiz für diesen Tag verfügbar.</p>;
  }

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setCorrect(index === quiz.correctIndex);
    setShowResult(true);
  };

  const reset = () => {
    setSelected(null);
    setShowResult(false);
    setCorrect(false);
  };

  return (
    <motion.div
      className="quiz-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className="quiz-header">Wissensquiz</h3>
      <p className="quiz-question">{quiz.question}</p>

      <div className="quiz-options">
        {quiz.options.map((option, i) => (
          <motion.button
            key={i}
            className={`quiz-option ${
              showResult
                ? i === quiz.correctIndex
                  ? 'correct'
                  : i === selected
                  ? 'wrong'
                  : ''
                : selected === i
                ? 'selected'
                : ''
            }`}
            onClick={() => handleSelect(i)}
            whileHover={{ scale: showResult ? 1 : 1.02 }}
            whileTap={{ scale: showResult ? 1 : 0.98 }}
          >
            <span className="option-marker">{String.fromCharCode(65 + i)}</span>
            <span className="option-text">{option}</span>
            {showResult && i === quiz.correctIndex && <span className="check-mark">✓</span>}
            {showResult && i === selected && i !== quiz.correctIndex && <span className="x-mark">✗</span>}
          </motion.button>
        ))}
      </div>

      {showResult && (
        <motion.div
          className={`result-box ${correct ? 'success' : 'failure'}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="result-text">
            {correct ? 'Richtig! 🎉' : 'Leider falsch! 😕'}
          </p>
          <p className="explanation">{quiz.explanation}</p>
          <button className="retry-btn" onClick={reset}>
            Nochmal
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Quiz;
