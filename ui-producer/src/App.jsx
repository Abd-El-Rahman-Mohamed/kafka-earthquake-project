import React, { useState } from 'react';
import SymbolSelector from './components/SymbolSelector';
import ControlButtons from './components/ControlButtons';

export default function App() {
  const [params, setParams] = useState({ limit: 50 });
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Earthquake Producer Control</h1>
      <SymbolSelector params={params} setParams={setParams} />
      <ControlButtons params={params} />
    </div>
  );
}

