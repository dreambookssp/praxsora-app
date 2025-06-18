
import React, { useState } from 'react';
import './App.css';

function App() {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => setSelected(e.target.value);

  return (
    <div className="App" style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to PRAXSORA</h1>
      <p>Unlock your professional potential.<br />Each method here is your path to certification.</p>
      <select value={selected} onChange={handleChange} style={{ padding: '0.5rem', marginTop: '1rem' }}>
        <option value="">Choose your test</option>
        <option value="ccm">The CCM Certification Method</option>
        <option value="cefm">The C-EFM Certification Method</option>
        <option value="cpc">The CPC Certification Method</option>
        <option value="fnp">The FNP Certification Method</option>
      </select>
      {selected && (
        <div style={{ marginTop: '2rem' }}>
          <a href={`/${selected}`} style={{ padding: '0.75rem 1.5rem', background: '#4db8ff', color: 'black', textDecoration: 'none', borderRadius: '4px', display: 'inline-block' }}>
            Start your study
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
