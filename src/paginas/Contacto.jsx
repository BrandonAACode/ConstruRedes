import { useState } from 'react';

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    tipo: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, correo, tipo, mensaje } = formulario;

    if (!nombre || !correo || !tipo || mensaje.length < 10) {
      alert('Por favor completa todos los campos y que el mensaje tenga al menos 10 caracteres.');
      return;
    }

    setEnviado(true);
    setFormulario({ nombre: '', correo: '', tipo: '', mensaje: '' });
  };

  return (
    <div className="container mt-5 text-white">
      <h1 className="mb-4">Contáctanos</h1>

      {enviado && (
        <div className="alert alert-success" role="alert">
          ¡Mensaje enviado correctamente! Te responderemos pronto.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre completo</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={formulario.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tipo" className="form-label">Tipo de trabajo</label>
          <select
            className="form-select"
            id="tipo"
            name="tipo"
            value={formulario.tipo}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="construccion">Construcción</option>
            <option value="redes">Redes</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            id="mensaje"
            name="mensaje"
            rows="4"
            value={formulario.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;