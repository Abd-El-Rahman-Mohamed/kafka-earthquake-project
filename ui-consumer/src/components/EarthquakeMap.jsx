import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

export default function EarthquakeMap({ events }) {
  return (
    <MapContainer center={[0,0]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {events.map(ev => (
        <CircleMarker
          key={ev.id}
          center={[ev.lat, ev.lon]}
          radius={ev.mag * 2}
          fillOpacity={0.6}
        >
          <Popup>
            <strong>{ev.place}</strong><br/>
            Mag: {ev.mag}<br/>
            Time: {new Date(ev.time).toLocaleString()}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

