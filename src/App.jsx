import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";

const Home = lazy(() => import("./components/Home"));
const Contenido = lazy(() => import("./components/Contenido"));
const Contacto = lazy(() => import("./components/Contacto"));
const Ejercicio1 = lazy(() => import("./components/Ejercicio1"));
const Ejercicio2 = lazy(() => import("./components/Ejercicio2"));
const Ejercicio3 = lazy(() => import("./components/Ejercicio3"));
const Ejercicio4 = lazy(() => import("./components/Ejercicio4"));
const Ejercicio5 = lazy(() => import("./components/Ejercicio5"));

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <SkipLink />
      <Navbar />
      <main id="contenido-principal" className="container mx-auto p-4">
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contenido" element={<Contenido />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/ejercicio1" element={<Ejercicio1 />} />
            <Route path="/ejercicio2" element={<Ejercicio2 />} />
            <Route path="/ejercicio3" element={<Ejercicio3 />} />
            <Route path="/ejercicio4" element={<Ejercicio4 />} />
            <Route path="/ejercicio5" element={<Ejercicio5 />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
