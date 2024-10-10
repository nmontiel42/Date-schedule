// AnotherPage.js
import React from 'react';

const AnotherPage = ({ onBack }) => {
  return (
    <div>
      <h1>Pagina para mostrar ideas de citas</h1>
      <h2>Todavia en desarrollo ;)</h2>
      <button 
      onClick={onBack}
      className='border border-black rounded-lg w-full bg-pink-300'
      >
        Regresar</button>
    </div>
  );
};

export default AnotherPage;
