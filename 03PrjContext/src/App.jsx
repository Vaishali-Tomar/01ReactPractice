import React from "react";
import { CounterProvider } from "./context/CounterContext";
import CounterApp from "./components/CounterApp";
import "./App.css";

function App() {
  

  return (
    <CounterProvider>
      <div className="app">
        <header className="app-header">
          <h1>Counter Reduce Example</h1>
          <CounterApp />
        </header>
      </div>
    </CounterProvider>
  );
}

export default App;
