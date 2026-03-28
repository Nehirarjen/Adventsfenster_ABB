import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Quiz from './components/Quiz';
import { adventDays, getThemeBackground } from './data/adventDays';
import './styles/main.css';

function QuizPage() {
  const [day, setDay] = useState<number>(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const dayParam = params.get('day');
    if (dayParam) {
      const parsedDay = parseInt(dayParam, 10);
      if (parsedDay >= 1 && parsedDay <= 24) {
        setDay(parsedDay);
      }
    }
  }, []);

  const dayData = adventDays[day] || adventDays[1];
  const background = getThemeBackground(day);

  return (
    <div 
      className="advent-door quiz-page"
      style={{ 
        background: `linear-gradient(180deg, ${background} 0%, ${background}dd 100%)`
      }}
    >
      <motion.div
        className="quiz-page-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="quiz-page-title">Tag {day}</h1>
        <p className="quiz-page-subtitle">{dayData.title}</p>
        
        <div className="quiz-page-card">
          <Quiz quiz={dayData.quiz} />
        </div>

        <a href="/" className="back-link">
          Zurück zum Adventsfenster
        </a>
      </motion.div>
    </div>
  );
}

export default QuizPage;
