import { useState } from "react";

const FigmaComponent = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold">Diseño Exportado de Figma</h2>
      <p className="text-gray-600 dark:text-gray-300">
        Este componente fue diseñado en Figma y convertido en React.
      </p>
      <button
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
        onClick={() => setClicked(!clicked)}
      >
        {clicked ? "¡Componente activado!" : "¡Haz clic aquí!"}
      </button>
      {clicked && (
        <p className="mt-2 text-green-600 dark:text-green-400 font-semibold">
          Este diseño fue exportado desde Figma y convertido a JSX con Tailwind CSS.
        </p>
      )}
      <img
        src="https://picsum.photos/seed/figma/400/300"
        alt="Exportado de Figma"
        className="mt-4 mx-auto w-40 rounded"
      />
    </div>
  );
};

export default FigmaComponent;
