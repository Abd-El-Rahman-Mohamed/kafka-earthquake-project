import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export default function MagnitudeChart({ events }) {
  const data = events
    .slice().reverse()
    .map(ev => ({ time: new Date(ev.time).toLocaleTimeString(), mag: ev.mag }));

  return (
    <div>
      <h2 className="text-xl mb-2">Magnitude Over Time</h2>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="time" />
        <YAxis domain={['auto','auto']} />
        <Tooltip />
        <Line type="monotone" dataKey="mag" dot={false} />
      </LineChart>
    </div>
  );
}

