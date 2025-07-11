import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-azulrey navbar-dark' : 'navbar-light'}`}
      style={{
        backgroundColor: scrolled ? '#1c4966' : 'rgba(253, 246, 236, 0.95)',
        transition: 'background-color 0.3s ease',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* Logo + nombre empresa */}
        <a href="#top" className={`navbar-brand fw-bold d-flex align-items-center ${scrolled ? 'text-white' : 'text-dark'}`}>
          <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Logo" height="40" className="me-2" />
          ConstruRedes
        </a>

        {/* Botón hamburguesa (colapsable en celular) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navLinks"
          aria-controls="navLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces del menú */}
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${scrolled ? 'text-white' : 'text-dark'}`} href="#quienes-somos">
                Quiénes Somos
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${scrolled ? 'text-white' : 'text-dark'}`} href="#servicios">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-sm ms-2 ${scrolled ? 'btn-light text-dark' : 'btn-outline-primary'}`}
                data-bs-toggle="modal"
                data-bs-target="#modalContacto"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;