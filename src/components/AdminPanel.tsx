import { useState } from 'react';
import { motion } from 'framer-motion';

interface AdminPanelProps {
  currentDay: number;
  onDayChange: (day: number) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ currentDay, onDayChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pin, setPin] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const ADMIN_PIN = '1234';

  const handlePin = () => {
    if (pin === ADMIN_PIN) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Falscher PIN');
      setPin('');
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setPin('');
    setIsOpen(false);
  };

  const days = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <>
      <button className="admin-toggle" onClick={() => setIsOpen(!isOpen)}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
        </svg>
      </button>

      {isOpen && (
        <motion.div
          className="admin-panel"
          initial={{ x: 320 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', damping: 25 }}
        >
          <div className="panel-header">
            <h2>Admin</h2>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          {!authenticated ? (
            <div className="pin-form">
              <p>Admin-PIN:</p>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                maxLength={4}
                onKeyDown={(e) => e.key === 'Enter' && handlePin()}
                placeholder="••••"
              />
              <button className="submit-btn" onClick={handlePin}>OK</button>
              {error && <p className="error">{error}</p>}
            </div>
          ) : (
            <div className="day-picker">
              <p>Aktueller Tag: <strong>{currentDay}</strong></p>
              <div className="day-grid">
                {days.map((d) => (
                  <button
                    key={d}
                    className={`day-btn ${currentDay === d ? 'active' : ''}`}
                    onClick={() => onDayChange(d)}
                  >
                    {d}
                  </button>
                ))}
              </div>
              <button className="logout-btn" onClick={logout}>Abmelden</button>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default AdminPanel;
