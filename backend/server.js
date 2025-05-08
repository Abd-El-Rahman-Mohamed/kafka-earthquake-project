const express = require('express');
const cors    = require('cors');
const { spawn, exec } = require('child_process');
let producerProcess = null;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/start', (req, res) => {
  if (producerProcess) return res.status(400).send('Already running.');
  producerProcess = spawn('python', ['../producer/producer.py'], {
    cwd: __dirname
  });
  producerProcess.stdout.pipe(process.stdout);
  producerProcess.stderr.pipe(process.stderr);
  res.send('Producer started');
});

app.post('/stop', (req, res) => {
  if (!producerProcess) return res.status(400).send('Not running.');
  producerProcess.kill();
  producerProcess = null;
  res.send('Producer stopped');
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Control API listening on :${PORT}`));

