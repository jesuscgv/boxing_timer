import React from 'react';
import Timer from './components/Timer';
import Controls from './components/Controls';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Timer />
      <Controls />
    </div>
  );
};

export default App;

