const Contenido = () => {
  return (
    <article className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Optimización de imágenes en la web</h1>
      <p className="mb-6 text-lg">
        Optimizar imágenes es una de las cosas más importantes para que una web cargue rápido.
        Si las imágenes pesan demasiado, la página se vuelve lenta y la experiencia del usuario empeora.
      </p>

      <section aria-labelledby="formatos">
        <h2 id="formatos" className="text-2xl font-semibold mb-3">Formatos más usados</h2>
        <p className="mb-4">Cada formato tiene un uso distinto según el tipo de imagen:</p>
        <figure>
          <img
            src="/img/png-ejemplo.svg"
            alt="Círculo azul semitransparente sobre fondo de cuadros grises y blancos que representa la transparencia del formato PNG"
            className="rounded shadow mb-2 max-w-xs"
            width="280"
            height="200"
          />
          <figcaption className="text-sm text-gray-600 dark:text-gray-400">
            PNG: ideal para imágenes con transparencia
          </figcaption>
        </figure>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><strong>JPEG</strong>: fotografías y imágenes con muchos colores</li>
          <li><strong>PNG</strong>: imágenes con transparencia o bordes nítidos</li>
          <li><strong>WebP</strong>: formato moderno con mejor compresión</li>
          <li><strong>SVG</strong>: iconos y gráficos que se pueden escalar sin perder calidad</li>
        </ul>
      </section>

      <section aria-labelledby="lazy-loading" className="mt-8">
        <h2 id="lazy-loading" className="text-2xl font-semibold mb-3">Lazy Loading</h2>
        <p className="mb-4">
          La carga diferida hace que las imágenes solo se carguen cuando el usuario llega a verlas.
          Esto reduce el tiempo de carga inicial de la página.
        </p>
        <figure>
          <img
            src="/img/lazy-ejemplo.svg"
            alt="Ilustración con un bloque verde a la izquierda y líneas de texto simuladas a la derecha representando contenido cargado de forma diferida"
            loading="lazy"
            className="rounded shadow mb-2 max-w-xs"
            width="320"
            height="200"
          />
          <figcaption className="text-sm text-gray-600 dark:text-gray-400">
            Esta imagen se carga con lazy loading
          </figcaption>
        </figure>
        <p className="mt-2">
          En HTML se activa con{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">loading="lazy"</code>.
          En React se puede combinar con Intersection Observer para más control.
        </p>
      </section>

      <section aria-labelledby="canvas" className="mt-8">
        <h2 id="canvas" className="text-2xl font-semibold mb-3">Manipulación con Canvas</h2>
        <p>
          Canvas permite editar imágenes directamente en el navegador: cambiar brillo,
          aplicar filtros o exportar en otro formato, todo sin necesitar un servidor.
        </p>
      </section>
    </article>
  );
};

export default Contenido;
