import { useState } from 'react';

function Servicios() {
  const [mostrarConstruccion, setMostrarConstruccion] = useState(false);
  const [mostrarRedes, setMostrarRedes] = useState(false);

  const serviciosConstruccion = [
    {
      titulo: 'Remodelaciones',
      desc: 'Transformación total de espacios antiguos en áreas modernas y funcionales.',
      img: '/remodelacion.jpg',
    },
    {
      titulo: 'Pintura',
      desc: 'Aplicación profesional de pintura en interiores y exteriores.',
      img: '/pintura.png',
    },
    {
      titulo: 'Tabiquería',
      desc: 'Instalación de tabiques para separar ambientes con aislación térmica y acústica.',
      img: '/tabiqueria.png',
    },
    {
      titulo: 'Eléctricidad',
      desc: 'Instalaciones eléctricas con norma y certificación SEC.',
      img: '/electricidad.png',
    },
    {
      titulo: 'Cerámicas',
      desc: 'Instalación profesional de cerámicas para interiores y exteriores.',
      img: '/ceramica.png',
    },
  ];

  const serviciosRedes = [
    {
      titulo: 'CCTV',
      desc: 'Instalación y configuración de sistemas de videovigilancia IP y análogos.',
      img: '/cctv.jpg',
    },
    {
      titulo: 'Control de Acceso',
      desc: 'Lectores biométricos, torniquetes, tarjetas y software de seguridad.',
      img: '/control-acceso.jpg',
    },
    {
      titulo: 'Redes y Switches',
      desc: 'Armado y organización de redes LAN, cableado estructurado y administración de switches.',
      img: '/switches.jpg',
    },
  ];

  return (
    <div className="container py-5 mt-5">
      <h2 className="text-center mb-5"><i>Nuestros Servicios</i></h2>

      <div className="mb-4 d-flex gap-3 flex-wrap justify-content-center">
        <button className="btn btn-outline-primary" onClick={() => setMostrarConstruccion(!mostrarConstruccion)}>
          {mostrarConstruccion ? 'Ocultar' : 'Ver'} Servicios de Construcción
        </button>

        <button className="btn btn-outline-primary" onClick={() => setMostrarRedes(!mostrarRedes)}>
          {mostrarRedes ? 'Ocultar' : 'Ver'} Servicios de Redes
        </button>
      </div>

      {mostrarConstruccion && (
        <>
          <h4 className="text-uppercase text-primary mb-4">Área de Construcción</h4>
          <div className="row mb-5">
            {serviciosConstruccion.map((serv, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card h-100 bg-dark text-white border-primary">
                  <img src={serv.img} className="card-img-top" alt={serv.titulo} />
                  <div className="card-body">
                    <h5 className="card-title">{serv.titulo}</h5>
                    <p className="card-text">{serv.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {mostrarRedes && (
        <>
          <h4 className="text-uppercase text-primary mb-4">Área de Redes</h4>
          <div className="row mb-5">
            {serviciosRedes.map((serv, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card h-100 bg-dark text-white border-primary">
                  <img src={serv.img} className="card-img-top" alt={serv.titulo} />
                  <div className="card-body">
                    <h5 className="card-title">{serv.titulo}</h5>
                    <p className="card-text">{serv.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Servicios;