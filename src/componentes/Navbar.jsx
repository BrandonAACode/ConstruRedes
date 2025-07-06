import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
  className={`navbar navbar-expand-lg bg-azulrey navbar-dark fixed-top px-4`}
  style={{
    backgroundColor: scrolled ? '#4169e1' : 'rgba(65, 105, 225, 0.85)',
    transition: 'background-color 0.3s ease',
    zIndex: 10,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
  }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">ConstruRedes</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/quienes-somos">Quiénes somos</Link>
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