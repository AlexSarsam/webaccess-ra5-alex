import { useState } from "react";

const ImageOptimizer = () => {
  const [originalFile, setOriginalFile] = useState(null);
  const [optimizedImages, setOptimizedImages] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setOriginalFile(file);
      generateOptimizedImages(file);
    }
  };

  const generateOptimizedImages = (file) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const formats = ["image/webp", "image/avif"];
      const results = formats.map((format) => {
        const dataUrl = canvas.toDataURL(format, 0.8);
        return {
          format,
          url: dataUrl,
        };
      });
      setOptimizedImages(results);
    };
  };

  return (
    <div className="flex flex-col items-center">
      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
      {originalFile && (
        <div className="w-full">
          <h2 className="text-xl font-bold mt-4">Imagen Original</h2>
          <img src={URL.createObjectURL(originalFile)} alt="Original" className="w-60 mt-2" />
        </div>
      )}
      {optimizedImages.length > 0 && (
        <div className="mt-6 w-full">
          <h2 className="text-xl font-bold">Imágenes Optimizadas</h2>
          <table className="mt-4 border-collapse border border-gray-300 w-full text-center">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 p-2">Formato</th>
                <th className="border border-gray-300 p-2">Imagen</th>
              </tr>
            </thead>
            <tbody>
              {optimizedImages.map((img, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 p-2">{img.format}</td>
                  <td className="border border-gray-300 p-2">
                    <img src={img.url} alt={img.format} className="w-60 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ImageOptimizer;
