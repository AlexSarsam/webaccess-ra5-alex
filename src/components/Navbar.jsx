import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const linkClass = "hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1";

const Navbar = () => {
  return (
    <header>
      <nav aria-label="Navegación principal" className="bg-teal-700 dark:bg-teal-900 p-4 text-white flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded">
          WebAccess
        </Link>
        <ul className="flex items-center gap-4 list-none m-0 p-0">
          <li><Link className={linkClass} to="/">Inicio</Link></li>
          <li><Link className={linkClass} to="/contenido">Contenido</Link></li>
          <li><Link className={linkClass} to="/contacto">Contacto</Link></li>
          <li><Link className={linkClass} to="/ejercicio1">Ejercicio 1</Link></li>
          <li><Link className={linkClass} to="/ejercicio2">Ejercicio 2</Link></li>
          <li><Link className={linkClass} to="/ejercicio3">Ejercicio 3</Link></li>
          <li><Link className={linkClass} to="/ejercicio4">Ejercicio 4</Link></li>
          <li><Link className={linkClass} to="/ejercicio5">Ejercicio 5</Link></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
