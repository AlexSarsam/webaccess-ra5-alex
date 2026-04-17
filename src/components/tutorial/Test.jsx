import { useState, useMemo } from "react";

const allQuestions = [
  {
    question: "¿Cuál de estos formatos soporta transparencia?",
    options: ["JPEG", "PNG", "BMP", "TIFF"],
    answer: "PNG",
  },
  {
    question: "¿Qué formato es más eficiente en compresión para la web?",
    options: ["PNG", "JPEG", "WebP", "BMP"],
    answer: "WebP",
  },
  {
    question: "¿Cuál es el formato más moderno y eficiente para imágenes en la web?",
    options: ["JPEG", "PNG", "WebP", "AVIF"],
    answer: "AVIF",
  },
  {
    question: "¿Qué formato es ideal para gráficos vectoriales?",
    options: ["JPEG", "PNG", "SVG", "WebP"],
    answer: "SVG",
  },
  {
    question: "¿Qué tipo de compresión usa JPEG?",
    options: ["Sin pérdida", "Con pérdida", "Vectorial", "Sin compresión"],
    answer: "Con pérdida",
  },
  {
    question: "¿Cuál de estos formatos NO soporta animaciones?",
    options: ["GIF", "WebP", "JPEG", "AVIF"],
    answer: "JPEG",
  },
  {
    question: "¿Qué formato es mejor para fotografías con muchos colores?",
    options: ["SVG", "PNG", "JPEG", "GIF"],
    answer: "JPEG",
  },
  {
    question: "¿Qué formato produce archivos más pequeños que WebP?",
    options: ["JPEG", "PNG", "AVIF", "BMP"],
    answer: "AVIF",
  },
  {
    question: "¿Qué formato usa compresión sin pérdida por defecto?",
    options: ["JPEG", "PNG", "WebP", "AVIF"],
    answer: "PNG",
  },
  {
    question: "¿Qué herramienta online permite comparar calidad entre formatos?",
    options: ["Photoshop", "Squoosh", "Figma", "Canva"],
    answer: "Squoosh",
  },
  {
    question: "¿Qué hace Lazy Loading?",
    options: [
      "Carga todas las imágenes de inmediato",
      "Carga imágenes solo cuando son visibles",
      "Reduce la calidad de las imágenes",
    ],
    answer: "Carga imágenes solo cuando son visibles",
  },
  {
    question: "¿Qué API de JavaScript se usa para Lazy Loading?",
    options: ["Fetch API", "Intersection Observer", "Canvas API"],
    answer: "Intersection Observer",
  },
  {
    question: "¿Qué atributo HTML5 permite lazy loading nativo?",
    options: ["defer", "async", "loading='lazy'"],
    answer: "loading='lazy'",
  },
  {
    question: "¿Cuál es el principal beneficio del Lazy Loading?",
    options: [
      "Mejora la calidad de las imágenes",
      "Reduce el tiempo de carga inicial",
      "Aumenta el tamaño del archivo",
    ],
    answer: "Reduce el tiempo de carga inicial",
  },
  {
    question: "¿Qué hook de React se usa para implementar Intersection Observer?",
    options: ["useState", "useEffect", "useContext"],
    answer: "useEffect",
  },
  {
    question: "¿Qué API de JavaScript permite manipular imágenes en un canvas?",
    options: ["WebGL", "Canvas API", "Intersection Observer"],
    answer: "Canvas API",
  },
  {
    question: "¿Cuál de estos métodos obtiene los datos de píxeles de una imagen en Canvas?",
    options: ["getContext()", "getImageData()", "setTimeout()"],
    answer: "getImageData()",
  },
  {
    question: "¿Qué método se usa para dibujar una imagen en el canvas?",
    options: ["drawImage()", "putImageData()", "fillRect()"],
    answer: "drawImage()",
  },
  {
    question: "¿Qué método escribe los datos de píxeles modificados de vuelta al canvas?",
    options: ["setImageData()", "putImageData()", "drawImage()"],
    answer: "putImageData()",
  },
  {
    question: "¿Qué hook de React se usa para obtener una referencia al elemento canvas?",
    options: ["useState", "useEffect", "useRef"],
    answer: "useRef",
  },
  {
    question: "¿Qué formato es ideal para exportar iconos desde Figma?",
    options: ["JPEG", "PNG", "SVG"],
    answer: "SVG",
  },
  {
    question: "¿Qué plugin permite exportar código JSX desde Figma?",
    options: ["Tailwind CSS for Figma", "Anima for Figma", "SVG Export"],
    answer: "Anima for Figma",
  },
  {
    question: "¿Qué ventaja tiene exportar SVG desde Figma a React?",
    options: [
      "Se puede usar como componente React",
      "Tiene mejor compresión que JPEG",
      "No necesita estilos",
    ],
    answer: "Se puede usar como componente React",
  },
  {
    question: "¿Qué herramienta de diseño es más usada para crear interfaces web?",
    options: ["Photoshop", "Figma", "GIMP"],
    answer: "Figma",
  },
  {
    question: "¿Qué formato es mejor para imágenes estáticas optimizadas desde Figma?",
    options: ["SVG", "WebP", "BMP"],
    answer: "WebP",
  },
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const Test = () => {
  const questions = useMemo(() => shuffleArray(allQuestions), []);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(""));

  const handleSelect = (index, option) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = option;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const correct = selectedAnswers.filter((ans, i) => ans === questions[i].answer).length;
    alert(`Has respondido correctamente ${correct} de ${questions.length}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Test Final</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{q.question}</p>
          {q.options.map((opt) => (
            <button
              key={opt}
              className={`mr-2 px-4 py-2 mt-2 rounded ${
                selectedAnswers[i] === opt ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => handleSelect(i, opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      ))}
      <button onClick={checkAnswers} className="bg-green-500 text-white px-6 py-2 mt-4 rounded">
        Verificar respuestas
      </button>
    </div>
  );
};

export default Test;
