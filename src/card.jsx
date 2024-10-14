import React, { useState } from "react";

const Card = ({ title, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-32 rounded overflow-hidden shadow-lg bg-pink-400 flex justify-between transition-all duration-300 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="w-auto h-auto mb-4 mx-auto mt-4" src={image} alt="Not Found" />

      <div className="flex-1 flex flex-col justify-center px-6 py-4 relative"> {/* Cambiar 'justify-between' a 'justify-center' */}
        {/* Título */}
        <div
          className={`cursor-default font-bold text-l transition-transform duration-500 ${
            isHovered ? '-translate-y-11 text-l' : 'translate-y-0 text-2xl'
          }`}
        >
          {title}
        </div>

        {/* Descripción, oculta por defecto */}
        <p
          className={`cursor-default text-gray-700 text-base transition-opacity duration-300 absolute ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
