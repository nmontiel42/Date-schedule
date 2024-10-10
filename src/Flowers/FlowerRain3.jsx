import React from 'react';
import './FlowerRain.css'; // Asegúrate de crear este archivo CSS

const FlowerRain3 = () => {
  const flowers = Array.from({ length: 30 }).map((_, index) => (
    <div key={index} className="flower" style={{
      left: `${Math.random() * 100}vw`, // Posición aleatoria en el eje X
      animationDuration: `${Math.random() * 2 + 3}s` // Duración de la caída
    }}>
      🌼
    </div>
  ));

  return <div className="flower-rain">{flowers}</div>;
};

export default FlowerRain3;
