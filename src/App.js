import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let data = require("./data/mockData.json")
  console.log(data)
  console.log(data.companies[0].company_name)
  return (
    <div className="App">
      <h1>High Five
    </h1>
      <p>{data.companies[0].company_name}</p>
    </div>
  );
}

export default App;
