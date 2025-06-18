
import React, { useState } from 'react';
import './App.css';

function App() {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => setSelected(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" alt="Praxsora Logo" className="logo" />
        <hr className="divider" />
        <h1>Welcome to PRAXSORA</h1>
        <p>Unlock your professional potential.<br />
        Each method here is your path to certification.</p>
      </header>

      <div className="App-content">
        <select value={selected} onChange={handleChange}>
          <option value="">Choose your test</option>
          <option value="ccm">The CCM Certification Method</option>
          <option value="cefm">The C-EFM Certification Method</option>
          <option value="cpc">The CPC Certification Method</option>
          <option value="fnp">The FNP Certification Method</option>
        </select>

        {selected && (
          <a href={`/${selected}`} className="start-button">Start your study</a>
        )}
      </div>
    </div>
  );
}

export default App;
