import React, { useState } from 'react';
import TimesheetForm from './TimesheetForm';
import TimesheetList from './TimesheetList';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  const handleTimesheetAdded = () => {
    setRefreshKey(oldKey => oldKey + 1);
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleRegister = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="app">
      <header>
        <h1>KloudGuru TimeTracker</h1>
        {/* You would replace this with an actual logo */}
        <div className="logo">Logo</div>
      </header>
      {user ? (
        <div>
          <p>Welcome, {user}! <button onClick={handleLogout}>Logout</button></p>
          <TimesheetForm onTimesheetAdded={handleTimesheetAdded} />
          <TimesheetList key={refreshKey} />
        </div>
      ) : showLogin ? (
        <Login onLogin={handleLogin} onSwitchToRegister={() => setShowLogin(false)} />
      ) : (
        <Register onRegister={handleRegister} onSwitchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;