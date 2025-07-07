// Importamos React hooks y el componente Link para navegar sin recargar la página
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  // Estado para saber si el usuario hizo scroll y cambiar el estilo del menú
  const [scrolled, setScrolled] = useState(false);

  // Hook que escucha el evento scroll y cambia el estado "scrolled"
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);// Si se desplazó más de 50px, aplica fondo sólido
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
  className={`navbar navbar-expand-lg bg-azulrey navbar-dark fixed-top px-4`}
  style={{
    backgroundColor: scrolled ? '#4169e1' : 'rgba(65, 105, 225, 0.85)', // fondo dinámico
    transition: 'background-color 0.3s ease', // transición suave al hacer scroll
    zIndex: 10,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4)', // sombra para resaltar el menú
  }}
    >
      <div className="container">
        {/* Inicio, redirige al inicio */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
        <img src="/logo.jpg" alt="Logo ConstruRedes" height="30" />
        <span className="fw-bold">ConstruRedes</span>
        </Link>

        {/* Botón de hamburguesa visible en pantallas pequeñas (menú colapsable) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces de navegación principales */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quienes-somos">Quiénes Somos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;