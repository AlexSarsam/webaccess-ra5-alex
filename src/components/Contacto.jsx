import { useState } from "react";

const Contacto = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const nuevosErrores = {};
    if (!form.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!form.email.trim()) {
      nuevosErrores.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nuevosErrores.email = "Introduce un email válido.";
    }
    if (!form.mensaje.trim()) nuevosErrores.mensaje = "El mensaje es obligatorio.";
    return nuevosErrores;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrores({ ...errores, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = validar();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }
    setEnviado(true);
    setForm({ nombre: "", email: "", mensaje: "" });
    setErrores({});
  };

  return (
    <section className="p-6 max-w-xl mx-auto" aria-labelledby="titulo-contacto">
      <h1 id="titulo-contacto" className="text-3xl font-bold mb-2">Contacto</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Rellena el formulario y te responderemos lo antes posible.
      </p>

      {/* aria-live anuncia el mensaje de éxito a lectores de pantalla */}
      <div aria-live="polite" aria-atomic="true">
        {enviado && (
          <p className="mb-4 p-3 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded font-medium">
            Mensaje enviado correctamente. ¡Gracias!
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-medium mb-1">
            Nombre <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errores.nombre ? "error-nombre" : undefined}
            className="w-full border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          {errores.nombre && (
            <p id="error-nombre" role="alert" className="text-red-600 text-sm mt-1">
              {errores.nombre}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Correo electrónico <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errores.email ? "error-email" : undefined}
            className="w-full border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          {errores.email && (
            <p id="error-email" role="alert" className="text-red-600 text-sm mt-1">
              {errores.email}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="mensaje" className="block font-medium mb-1">
            Mensaje <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            value={form.mensaje}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
            className="w-full border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          {errores.mensaje && (
            <p id="error-mensaje" role="alert" className="text-red-600 text-sm mt-1">
              {errores.mensaje}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-teal-700 hover:bg-teal-800 text-white font-medium px-6 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};

export default Contacto;
