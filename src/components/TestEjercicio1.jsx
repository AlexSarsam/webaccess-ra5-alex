import { useState } from "react";

const questions = [
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
];

const TestEjercicio1 = () => {
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
      <h2 className="text-2xl font-bold mb-4">Test de Conocimientos</h2>
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

export default TestEjercicio1;
