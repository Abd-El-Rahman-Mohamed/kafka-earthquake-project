import React from 'react';

export default function EventList({ events }) {
  return (
    <div className="overflow-y-auto h-96 border p-2">
      <h2 className="text-xl mb-2">Recent Quakes</h2>
      <ul>
        {events.map(ev => (
          <li key={ev.id} className="mb-1">
            {new Date(ev.time).toLocaleTimeString()} – {ev.place} (Mag {ev.mag})
          </li>
        ))}
      </ul>
    </div>
  );
}

