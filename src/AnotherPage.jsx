import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './components/card'; // Asegúrate de que la ruta sea correcta

const AnotherPage = () => {
  const navigate = useNavigate(); // Hook para la navegación

  return (
	// Contenedor principal
    <div className="relative mx-auto h-full mt-4 mb-4 py-4 w-[50%]" >

      {/* Contenedor azul */}
      <div className="relative items-center bg-blue-500 rounded-lg shadow-xl p-10 h-full py-4 overflow-hidden"> {/* Mantener el contenedor azul */}

        <h1 className="text-white text-2xl mb-4 flex justify-center cursor-default">Ideas de citas</h1>

        {/* Contenedor para las tarjetas con scroll */}
        <div className='overflow-y-scroll h-[90%] p-4 scrollbar-thin scrollbar-thumb-gray-400'> {/* Asegúrate de usar scrollbar-thin si usas Tailwind CSS */}
          <div className='flex flex-col space-y-4'>
            <Card
              title='Prueba 1: Título Largo'
              description='Descripción larga que debería empujar el contenido hacia abajo en la tarjeta. Este texto es un poco más largo para asegurarse de que la tarjeta maneje correctamente el contenido.'
              image='/public/favicon.png'
            />
            <Card
              title='Prueba 2: Título Corto'
              description='Descripción corta.'
              image='/public/favicon.png'
            />
            <Card
              title='Prueba 3: Otro Título Largo'
              description='Otra descripción larga para probar el comportamiento de la tarjeta.'
              image='/public/favicon.png'
            />
            <Card
              title='Prueba 4: Título Muy Largo'
              description='Esta tarjeta tiene una descripción extremadamente larga que va a hacer que el contenido de esta tarjeta ocupe más espacio vertical.'
              image='/public/favicon.png'
            />
            <Card
              title='Prueba 5: Más Títulos'
              description='Descripción de la tarjeta cinco.'
              image='/public/favicon.png'
            />
            <Card
              title='Prueba 6: Título Final'
              description='Descripción de la última tarjeta.'
              image='/public/favicon.png'
            />
            <Card
              title='Prueba 7: Título Final'
              description='Descripción de la última tarjeta.'
              image='/public/favicon.png'
            />

          </div>
		  
        </div>

		<div className="flex justify-center mt-2">
				<span className="cursor-default text-gray-800">⬇️ Desliza hacia abajo para más</span>
    	</div>

        {/* Botón para regresar */}
        <div className='absolute bottom-4 right-5'>
          <button 
            onClick={() => navigate(-1)}
            className='flex justify-end hover:underline transition duration-500 hover:-translate-y-1 hover:scale-110 text-white'>
            Atrás
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnotherPage;
