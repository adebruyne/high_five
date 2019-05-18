import React from 'react';
import Home from './components/Home';
import './App.css';




function App() {

  return (
    <div className="App">
      <div className="jumbo">
        <h1 className="main-header">High Fiver</h1>
        <hr />
        <h4>
          - Helping you hit your targets -
    </h4>

      </div>
      <Home />
    </div>
  );
}

export default App;
