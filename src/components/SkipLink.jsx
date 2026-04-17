const SkipLink = () => {
  return (
    <a
      href="#contenido-principal"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-teal-700 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:font-medium"
    >
      Saltar al contenido
    </a>
  );
};

export default SkipLink;
