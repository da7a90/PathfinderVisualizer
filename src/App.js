import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pathfinder from './pathfinder/pathfinder'

function App() {
  return (
    <div className="App">
      
      <h1>Breadth-first Real-time Pathfinder</h1>
     
      <h3>Navigate your way with the mouse around the obstacles to find the shortest path in real-time and click on any hexagon to change the starting position.</h3>
      <div className='parent'>
      <Pathfinder></Pathfinder>
      </div>
    </div>
  );
}

export default App;
