import React from 'react';
import Home from './components/Home';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="jumbo">
        <h1 className="main-header"><FontAwesomeIcon icon={faPrayingHands} /> High Fiver</h1>
        <hr />
        <h4 className="main-subheader">
          - Here to help hit your targets -
    </h4>
      </div>
      <Home />
    </div>
  );
}

export default App;
