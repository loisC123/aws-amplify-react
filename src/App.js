import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-left">
            <img src="logo40.png" alt="Logo" className="logo" />
            
          </div>
          <nav className="main-nav">
            <Link to="/" className="nav-link">Get Started</Link>
            <Link to="/learn" className="nav-link">Learn</Link>
            <Link to="/build" className="nav-link">Build</Link>
            <Link to="/maintain" className="nav-link">Maintain</Link>
          </nav>
          <div className="header-right">
            <button className="theme-toggle">🌙</button>
            <button className="search-button">🔍</button>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;