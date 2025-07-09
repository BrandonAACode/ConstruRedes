// Importamos herramientas de navegación de React y los componentes principales del sitio
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Portada from './componentes/Portada';
import Footer from './componentes/Footer';
import Home from './paginas/Home';
import QuienesSomos from './paginas/QuienesSomos';
import Servicios from './paginas/Servicios';

function App() {
  return (
    // Habilitamos el uso de rutas tipo SPA con React Router
    <BrowserRouter>
    {/* Menú de navegación, siempre visible */}
      <Navbar />
      {/* Contenido principal del sitio */}
      <main className="flex-grow-1">
        <Routes>
          {/* Ruta principal muestra la página de inicio */}
          <Route path="/" element={<Home />} />
          {/* Rutas secundarias con sus respectivas páginas */}
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </main>
      {/* Pie de página, siempre visible */}
      <Footer />
      {/* Modal de contacto */}
<div className="modal fade" id="modalContacto" tabIndex="-1" aria-labelledby="modalContactoLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-dark text-white">
      <div className="modal-header">
        <h5 className="modal-title" id="modalContactoLabel">Contáctanos</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" required minLength={3} />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="correo" required />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea className="form-control" id="mensaje" rows="4" required minLength={10}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</div>
    </BrowserRouter>
  );
}

export default App;