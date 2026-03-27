import { useState, useEffect } from 'react';
import AdventDoor from './components/AdventDoor';
import AdminPanel from './components/AdminPanel';
import './styles/main.css';

function App() {
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const today = new Date();
    const dayOfMonth = today.getDate();
    const month = today.getMonth();

    const storedDay = localStorage.getItem('advent_day');
    
    if (storedDay) {
      const parsedDay = parseInt(storedDay, 10);
      if (parsedDay >= 1 && parsedDay <= 24) {
        setCurrentDay(parsedDay);
      }
    } else if (month === 11 && dayOfMonth >= 1 && dayOfMonth <= 24) {
      setCurrentDay(dayOfMonth);
    }
    
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('advent_day', currentDay.toString());
    }
  }, [currentDay, isLoaded]);

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

  if (!isLoaded) {
    return (
      <div className="app loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="date-badge">
        <span className="greeting">{getGreeting()}</span>
        <span className="date">{getCurrentDate()}</span>
      </div>
      <AdventDoor day={currentDay} />
      <AdminPanel
        currentDay={currentDay}
        onDayChange={setCurrentDay}
      />
      <div className="app-footer">
        Digitales Adventsfenster 2026
      </div>
    </div>
  );
}

export default App;
