import { useState } from 'react';
import { motion } from 'framer-motion';
import Quiz from './Quiz';
import QRCode from './QRCode';
import { adventDays, getThemeBackground, getThemeAccent } from '../data/adventDays';

interface AdventDoorProps {
  day: number;
}

const generateSnowflakes = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 5 + 8
  }));
};

const AdventDoor: React.FC<AdventDoorProps> = ({ day }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [snowflakes] = useState(() => generateSnowflakes(60));
  
  const dayData = adventDays[day] || adventDays[1];
  const background = getThemeBackground(day);
  const accent = getThemeAccent(day);
  const isSpecialDay = day === 24;

  const confettiColors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#FF9A9E'];

  return (
    <div 
      className="advent-door" 
      style={{ 
        background: `linear-gradient(180deg, ${background} 0%, ${background}dd 100%)`
      }}
    >
      <div className="snow-container">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="snowflake"
            style={{
              left: `${flake.x}%`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`
            }}
          />
        ))}
      </div>

      <div className="door-frame">
        <div className="door-decoration left">
          <svg viewBox="0 0 60 120" className="tree-svg">
            <polygon points="30,0 60,40 50,40 65,65 45,65 55,90 5,90 15,65 0,65 15,40 5,40" fill={accent} opacity="0.6"/>
            <rect x="25" y="90" width="10" height="30" fill="#8B4513"/>
          </svg>
        </div>

        <div className="door-decoration right">
          <svg viewBox="0 0 60 120" className="tree-svg">
            <polygon points="30,0 60,40 50,40 65,65 45,65 55,90 5,90 15,65 0,65 15,40 5,40" fill={accent} opacity="0.6"/>
            <rect x="25" y="90" width="10" height="30" fill="#8B4513"/>
          </svg>
        </div>

        <div className="door-content">
          <motion.div
            className="title-section"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="door-title">{dayData.title}</h1>
            <blockquote className="door-quote">"{dayData.quote}"</blockquote>
          </motion.div>

          <motion.div
            className="number-container"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          >
            <div 
              className={`day-circle ${isSpecialDay ? 'special' : ''}`}
              style={{ 
                borderColor: accent,
                boxShadow: `0 0 60px ${accent}66, inset 0 0 40px ${accent}33`
              }}
            >
              <span className="day-number" style={{ color: accent }}>{day}</span>
              {isSpecialDay && (
                <div className="glow-ring" style={{ borderColor: accent }} />
              )}
            </div>
          </motion.div>

          <motion.div
            className="fact-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="fact-icon">{dayData.emoji}</span>
            <p>{dayData.fact}</p>
          </motion.div>

          <motion.div
            className="interaction-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              className="action-btn quiz-btn"
              style={{ backgroundColor: accent }}
              onClick={() => setShowQuiz(!showQuiz)}
            >
              {showQuiz ? 'Schliessen' : 'Quiz'}
            </button>
            <button
              className="action-btn qr-btn"
              style={{ borderColor: accent, color: accent }}
              onClick={() => setShowQR(!showQR)}
            >
              QR-Code
            </button>
          </motion.div>

          <motion.div
            className="quiz-section"
            initial={false}
            animate={{
              height: showQuiz ? 'auto' : 0,
              opacity: showQuiz ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            {showQuiz && <Quiz quiz={dayData.quiz} />}
          </motion.div>

          <motion.div
            className="qr-section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: showQR ? 1 : 0,
              scale: showQR ? 1 : 0.9
            }}
            style={{ display: showQR ? 'block' : 'none' }}
          >
            <QRCode day={day} size={140} color={accent} />
          </motion.div>

          {isSpecialDay && (
            <motion.div
              className="christmas-special"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="lights-row">
                {confettiColors.map((color, i) => (
                  <motion.span
                    key={i}
                    className="light-bulb"
                    style={{ backgroundColor: color }}
                    animate={{
                      opacity: [1, 0.4, 1],
                      scale: [1, 0.85, 1]
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      repeat: Infinity
                    }}
                  />
                ))}
              </div>
              <h2 className="merry-christmas">Frohe Weihnachten!</h2>
            </motion.div>
          )}
        </div>
      </div>

      <div className="ambient-light" style={{ backgroundColor: accent }} />
    </div>
  );
};

export default AdventDoor;
