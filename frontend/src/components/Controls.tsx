import React from 'react';
import axios from 'axios';

const Controls: React.FC = () => {
  const handleStart = async () => {
    await axios.post('http://localhost:4000/timer/start');
  };

  const handleStop = async () => {
    await axios.post('http://localhost:4000/timer/stop');
  };

  const handleReset = async () => {
    await axios.post('http://localhost:4000/timer/reset');
  };

  return (
    <div className="controls">
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Controls;

