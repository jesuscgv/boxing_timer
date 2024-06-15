import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Timer: React.FC = () => {
  const [time, setTime] = useState(180);
  const [isResting, setIsResting] = useState(false);

  useEffect(() => {
    const fetchTimer = async () => {
      const response = await axios.get('http://localhost:4000/timer');
      setTime(response.data.currentTime);
      setIsResting(response.data.isResting);
    };

    const interval = setInterval(fetchTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="timer">
      <h1>{isResting ? 'Rest' : 'Round'}</h1>
      <h2>{formatTime(time)}</h2>
    </div>
  );
};

export default Timer;

