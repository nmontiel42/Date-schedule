// AnotherPage.js
import React from 'react';

const AnotherPage = ({ onBack }) => {
  return (
    <div>
      <h2>Aqui van ideas de citas</h2>
      <button onClick={onBack}>Regresar</button>
    </div>
  );
};

export default AnotherPage;
