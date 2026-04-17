import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";

const ejercicios = [
  { id: 1, title: "Optimización de Imágenes", path: "/ejercicio1" },
  { id: 2, title: "Lazy Loading", path: "/ejercicio2" },
  { id: 3, title: "Manipulación con Canvas", path: "/ejercicio3" },
  { id: 4, title: "Figma a React", path: "/ejercicio4" },
];

const EjercicioCard = ({ title, path }) => (
  <div className="p-4 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-800">
    <h3 className="text-xl font-semibold">{title}</h3>
    <Link to={path} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
      Ver Ejercicio
    </Link>
  </div>
);

const MarkdownEditor = () => {
  const [text, setText] = useState(() => localStorage.getItem("tutorialContent") || "Escribe aquí tus notas...");

  useEffect(() => { localStorage.setItem("tutorialContent", text); }, [text]);

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("Tutorial_Notas.pdf");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setText((prev) => prev + `\n\n![Imagen subida](${reader.result})`);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-4">
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
      <textarea
        className="w-full h-40 border p-2 dark:bg-gray-700 dark:text-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3 className="text-lg font-bold mt-4">Vista Previa</h3>
      <div className="p-4 border bg-gray-100 dark:bg-gray-800">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      <button onClick={exportToPDF} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Exportar a PDF
      </button>
    </div>
  );
};

const allQuestions = [
  { question: "¿Cuál de estos formatos soporta transparencia?", options: ["JPEG", "PNG", "BMP", "TIFF"], answer: "PNG" },
  { question: "¿Qué formato es más eficiente en compresión para la web?", options: ["PNG", "JPEG", "WebP", "BMP"], answer: "WebP" },
  { question: "¿Cuál es el formato más moderno y eficiente para imágenes en la web?", options: ["JPEG", "PNG", "WebP", "AVIF"], answer: "AVIF" },
  { question: "¿Qué formato es ideal para gráficos vectoriales?", options: ["JPEG", "PNG", "SVG", "WebP"], answer: "SVG" },
  { question: "¿Qué tipo de compresión usa JPEG?", options: ["Sin pérdida", "Con pérdida", "Vectorial", "Sin compresión"], answer: "Con pérdida" },
  { question: "¿Cuál de estos formatos NO soporta animaciones?", options: ["GIF", "WebP", "JPEG", "AVIF"], answer: "JPEG" },
  { question: "¿Qué formato es mejor para fotografías con muchos colores?", options: ["SVG", "PNG", "JPEG", "GIF"], answer: "JPEG" },
  { question: "¿Qué formato produce archivos más pequeños que WebP?", options: ["JPEG", "PNG", "AVIF", "BMP"], answer: "AVIF" },
  { question: "¿Qué formato usa compresión sin pérdida por defecto?", options: ["JPEG", "PNG", "WebP", "AVIF"], answer: "PNG" },
  { question: "¿Qué herramienta online permite comparar calidad entre formatos?", options: ["Photoshop", "Squoosh", "Figma", "Canva"], answer: "Squoosh" },
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
              className={`mr-2 px-4 py-2 mt-2 rounded ${selectedAnswers[i] === opt ? "bg-blue-500 text-white" : "bg-gray-300"}`}
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

const Ejercicio5 = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Ejercicio 5: Tutorial Interactivo</h1>
      <p className="mb-4">Aquí puedes documentar y presentar los ejercicios realizados.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ejercicios.map((ejercicio) => (
          <EjercicioCard key={ejercicio.id} title={ejercicio.title} path={ejercicio.path} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-6">Notas del Estudiante</h2>
      <MarkdownEditor />
      <Test />
    </div>
  );
};

export default Ejercicio5;
