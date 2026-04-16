import { useRef, useState, useCallback } from "react";

const ImageEditor = () => {
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);

  const drawImage = useCallback((src) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = new Image();
    img.src = src;
    img.onload = () => {
      canvas.width = img.width / 2;
      canvas.height = img.height / 2;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        drawImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyFilter = (filter) => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = image;
    img.onload = () => {
      canvas.width = img.width / 2;
      canvas.height = img.height / 2;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        if (filter === "grayscale") {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = avg;
          data[i + 1] = avg;
          data[i + 2] = avg;
        } else if (filter === "invert") {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };
  };

  return (
    <div className="text-center p-4">
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
      <div>
        <button
          onClick={() => applyFilter("grayscale")}
          className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
        >
          Escala de Grises
        </button>
        <button
          onClick={() => applyFilter("invert")}
          className="bg-red-500 text-white px-4 py-2 m-2 rounded"
        >
          Invertir Colores
        </button>
      </div>
      <canvas ref={canvasRef} className="border mt-4 mx-auto"></canvas>
    </div>
  );
};

export default ImageEditor;
