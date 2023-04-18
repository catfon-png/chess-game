import React from 'react';
import { Chessboard } from './components/Chessboard/Chessboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>A chess game</h1>
      <Chessboard />
    </div>
  );
}

export default App;
