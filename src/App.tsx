import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdventDoor from './components/AdventDoor';
import AdminPanel from './components/AdminPanel';
import QuizPage from './QuizPage';
import './styles/main.css';

function App() {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const storedSelectedDay = localStorage.getItem('advent_selected_day');
    
    if (storedSelectedDay) {
      const parsed = parseInt(storedSelectedDay, 10);
      if (parsed >= 1 && parsed <= 24) {
        setSelectedDay(parsed);
      }
    } else {
      const today = new Date();
      const dayOfMonth = today.getDate();
      const month = today.getMonth();
      if (month === 11 && dayOfMonth >= 1 && dayOfMonth <= 24) {
        setSelectedDay(dayOfMonth);
      }
    }
    
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('advent_selected_day', selectedDay.toString());
    }
  }, [selectedDay, isLoaded]);

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString('de-CH', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Guten Morgen';
    if (hour < 18) return 'Guten Tag';
    return 'Guten Abend';
  };

  const formatTime = () => {
    return currentTime.toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' });
  };

  if (!isLoaded) {
    return (
      <div className="app loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={
        <div className="app">
          <div className="date-badge">
            <span className="greeting">{getGreeting()}</span>
            <span className="date">{getCurrentDate()}</span>
          </div>
          <AdventDoor day={selectedDay} />
          <AdminPanel
            currentDay={selectedDay}
            onDayChange={setSelectedDay}
          />
          <div className="app-footer">
            Digitales Adventsfenster 2026 | {formatTime()}
          </div>
        </div>
      } />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
}

export default App;
