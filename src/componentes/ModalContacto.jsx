import React, { useState } from 'react';

// Este componente muestra un formulario dentro de un modal Bootstrap
function ModalContacto() {
  // Estado para saber qué tipo de servicio eligió (construcción o redes)
  const [tipoServicio, setTipoServicio] = useState('');
  const [subServicios, setSubServicios] = useState([]);

  // Define los sub-servicios disponibles
  const opciones = {
    construccion: ['Remodelación', 'Pintura', 'Tabiquería', 'Electricidad', 'Cerámicas'],
    redes: ['CCTV', 'Control de Acceso', 'Redes LAN y Switches'],
  };

  // Cuando cambia el tipo de servicio, actualizamos la lista de sub-servicios
  const handleTipoChange = (e) => {
    const tipo = e.target.value;
    setTipoServicio(tipo);
    setSubServicios(opciones[tipo] || []);
  };

  // Esta función se ejecuta cuando el usuario hace clic en "Enviar"
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página o se caiga en 404
    alert('✅ Tu solicitud fue enviada correctamente. ¡Gracias por contactarnos!');
  };

  return (
    // Modal Bootstrap
    <div className="modal fade" id="modalContacto" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h5 className="modal-title">Contáctanos</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>

          {/* Formulario de contacto */}
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
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

              {/* Nombre de empresa (opcional) */}
              <div className="mb-3">
                <label htmlFor="empresa" className="form-label">Nombre de la empresa (opcional)</label>
                <input type="text" className="form-control" id="empresa" />
              </div>

              {/* Región */}
              <div className="mb-3">
                <label htmlFor="region" className="form-label">Región</label>
                <select className="form-select" id="region" required>
                  <option value="">Seleccione su región</option>
                  <option>Región Metropolitana de Santiago</option>
                  <option>Valparaíso</option>
                  <option>Biobío</option>
                  <option>Araucanía</option>
                  <option>Los Lagos</option>
                  <option>Coquimbo</option>
                  <option>Antofagasta</option>
                  <option>Magallanes</option>
                  <option>Tarapacá</option>
                  {/* Puedes agregar más regiones si quieres */}
                </select>
              </div>

              {/* Tipo de servicio (construcción o redes) */}
              <div className="mb-3">
                <label htmlFor="tipoServicio" className="form-label">Área de trabajo</label>
                <select
                  className="form-select"
                  id="tipoServicio"
                  value={tipoServicio}
                  onChange={handleTipoChange}
                  required
                >
                  <option value="">Seleccione un área</option>
                  <option value="construccion">Construcción</option>
                  <option value="redes">Redes</option>
                </select>
              </div>

              {/* Subservicio, depende del tipo seleccionado */}
              <div className="mb-3">
                <label htmlFor="subServicio" className="form-label">Servicio específico</label>
                <select className="form-select" id="subServicio" required>
                  <option value="">Seleccione un servicio</option>
                  {subServicios.map((servicio, i) => (
                    <option key={i}>{servicio}</option>
                  ))}
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
  );
}

export default ModalContacto;