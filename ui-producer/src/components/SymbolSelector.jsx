import React from 'react';

export default function SymbolSelector({ params, setParams }) {
  return (
    <div className="mb-4">
      <label className="block mb-1">Number of events to fetch:</label>
      <input
        type="number"
        value={params.limit}
        onChange={e => setParams({ ...params, limit: +e.target.value })}
        className="border p-1"
      />
    </div>
  );
}

