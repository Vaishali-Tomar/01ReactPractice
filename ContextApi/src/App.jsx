// src/App.jsx
import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext.jsx';
import ThemeToggler from './components/ThemeToggler.jsx';
import './App.css';

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" data-theme={theme}>
      <header className="App-header">
        <h1>Theme Context API Example</h1>
        <ThemeToggler />
      </header>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
      
    </ThemeProvider>
  );
}

export default App;
