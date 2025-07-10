import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Detecta el scroll para aplicar fondo sólido
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top px-4"
      style={{
        backgroundColor: scrolled ? '#1c4966' : 'transparent',
        transition: 'background-color 0.4s ease-in-out',
        backdropFilter: 'blur(6px)', // Desenfoque elegante
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.4)' : 'none',
        zIndex: 9999,
      }}
    >
      <div className="container">
        {/* Logo + Nombre que vuelve al tope */}
        <a href="#" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}logo.jpg`}
            alt="Logo ConstruRedes"
            height="32"
            style={{ borderRadius: '4px' }}
          />
          <span className="fw-bold">ConstruRedes</span>
        </a>

        {/* Botón del menú hamburguesa para móvil */}
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

        {/* Menú principal */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#quienes-somos">Quiénes Somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="modal" data-bs-target="#modalContacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;