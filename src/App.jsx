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
{/* Modal de contacto */}
<div className="modal fade" id="modalContacto" tabIndex="-1" aria-labelledby="modalContactoLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-dark text-white">
      <div className="modal-header">
        <h5 className="modal-title" id="modalContactoLabel">Contáctanos</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div className="modal-body">
        <form onSubmit="return enviarFormulario(event)">
          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" required minLength={3} />
          </div>

          {/* Correo */}
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="correo" required />
          </div>

          {/* Tipo de solicitante */}
          <div className="mb-3">
            <label className="form-label">¿Quién solicita?</label>
            <select className="form-select" id="tipoSolicitante" required>
              <option value="">Seleccione una opción</option>
              <option value="persona">Persona independiente</option>
              <option value="empresa">Empresa</option>
            </select>
          </div>

          {/* Nombre de empresa (si selecciona empresa) */}
          <div className="mb-3">
            <label htmlFor="empresa" className="form-label">Nombre de la empresa (opcional)</label>
            <input type="text" className="form-control" id="empresa" />
          </div>

          {/* Selección de región */}
          <div className="mb-3">
            <label htmlFor="region" className="form-label">Región</label>
            <select className="form-select" id="region" required>
              <option value="">Seleccione su región</option>
              <option>Región de Arica y Parinacota</option>
              <option>Región de Tarapacá</option>
              <option>Región de Antofagasta</option>
              <option>Región de Atacama</option>
              <option>Región de Coquimbo</option>
              <option>Región de Valparaíso</option>
              <option>Región Metropolitana de Santiago</option>
              <option>Región del Libertador Bernardo O'Higgins</option>
              <option>Región del Maule</option>
              <option>Región de Ñuble</option>
              <option>Región del Biobío</option>
              <option>Región de La Araucanía</option>
              <option>Región de Los Ríos</option>
              <option>Región de Los Lagos</option>
              <option>Región de Aysén</option>
              <option>Región de Magallanes y la Antártica Chilena</option>
            </select>
          </div>

          {/* Tipo de servicio */}
          <div className="mb-3">
            <label htmlFor="tipo" className="form-label">Tipo de servicio</label>
            <select className="form-select" id="tipo" required onChange={(e) => mostrarSubservicios(e.target.value)}>{/* Activo los subservicios */}
              <option value="">Seleccione una opción</option>
              <option value="construccion">Construcción</option>
              <option value="redes">Redes</option>
            </select>
          </div>

          {/* Subservicio */}
          <div className="mb-3">
            <label htmlFor="subtipo" className="form-label">Detalle del servicio</label>
            <select className="form-select" id="subtipo" required>
              <option value="">Seleccione un servicio</option>
            </select>
          </div>

          {/* Mensaje */}
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea className="form-control" id="mensaje" rows="4" required minLength={10}></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Enviar solicitud</button>
        </form>
      </div>
    </div>
  </div>
</div>
    </BrowserRouter>
  );
}

export default App;