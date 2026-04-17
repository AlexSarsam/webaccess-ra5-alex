const Home = () => {
  return (
    <section aria-labelledby="titulo-home" className="p-6">
      <h1 id="titulo-home" className="text-3xl font-bold mb-4">WebAccess</h1>
      <p className="text-lg mb-6">
        Proyecto de optimización y manipulación de imágenes desarrollado en React.
        Explora los ejercicios o consulta el contenido sobre accesibilidad web.
      </p>

      <section aria-labelledby="que-encontraras">
        <h2 id="que-encontraras" className="text-xl font-semibold mb-3">¿Qué encontrarás aquí?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Ejercicios prácticos de optimización de imágenes en React</li>
          <li>Técnicas de carga diferida (Lazy Loading)</li>
          <li>Manipulación de imágenes con Canvas</li>
          <li>Formulario de contacto accesible</li>
        </ul>
      </section>
    </section>
  );
};

export default Home;
