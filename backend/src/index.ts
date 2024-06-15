import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let currentTime = 180;
let isResting = false;
let interval: NodeJS.Timeout;

app.post('/timer/start', (req, res) => {
  if (interval) clearInterval(interval);
  interval = setInterval(() => {
    if (currentTime > 0) {
      currentTime--;
    } else {
      isResting = !isResting;
      currentTime = isResting ? 60 : 180; // 1 minuto de descanso, 3 minutos de round
    }
  }, 1000);
  res.send({ message: 'Timer started' });
});

app.post('/timer/stop', (req, res) => {
  if (interval) clearInterval(interval);
  res.send({ message: 'Timer stopped' });
});

app.post('/timer/reset', (req, res) => {
  if (interval) clearInterval(interval);
  currentTime = 180;
  isResting = false;
  res.send({ message: 'Timer reset' });
});

app.get('/timer', (req, res) => {
  res.send({ currentTime, isResting });
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});

