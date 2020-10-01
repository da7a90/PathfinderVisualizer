import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pathfinder from './pathfinder/pathfinder'

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1><span>Breadth-first Real-time Pathfinder</span></h1>
      </div>
      <h3>Navigate your way with the mouse around the obstacles to find the shortest path in real-time and click on any hexagon to change the starting position.</h3>
      <br></br>
      <Pathfinder></Pathfinder>
      
    </div>
  );
}

export default App;
