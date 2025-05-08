import React, { useState } from 'react';
import axios from 'axios';

export default function ControlButtons({ params }) {
  const [running, setRunning] = useState(false);

  const start = async () => {
    await axios.post('http://localhost:4000/start', params);
    setRunning(true);
  };
  const stop = async () => {
    await axios.post('http://localhost:4000/stop');
    setRunning(false);
  };

  return (
    <div>
      <button
        onClick={start}
        disabled={running}
        className="px-4 py-2 mr-2 bg-green-500 text-white rounded"
      >
        Start
      </button>
      <button
        onClick={stop}
        disabled={!running}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Stop
      </button>
    </div>
  );
}

