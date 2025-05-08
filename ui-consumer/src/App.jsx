import React, { useEffect, useState } from 'react';
import EarthquakeMap from './components/EarthquakeMap';
import EventList from './components/EventList';
import MagnitudeChart from './components/MagnitudeChart';

export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:6789');
    ws.onmessage = e => {
      const msg = JSON.parse(e.data);
      setEvents(ev => [msg, ...ev].slice(0, 100));
    };
    return () => ws.close();
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      <EarthquakeMap events={events} />
      <EventList events={events} />
      <MagnitudeChart events={events} />
    </div>
  );
}

