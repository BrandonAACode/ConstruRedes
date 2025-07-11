function ServiciosRedes() {
  const servicios = [
    {
      titulo: 'CCTV',
      desc: 'Instalación y configuración de sistemas de videovigilancia IP y análogos.',
      img: `${import.meta.env.BASE_URL}cctv.jpg`,
    },
    {
      titulo: 'Control de Acceso',
      desc: 'Lectores biométricos, torniquetes, tarjetas y software de seguridad.',
      img: `${import.meta.env.BASE_URL}control-acceso.jpg`,
    },
    {
      titulo: 'Redes y Switches',
      desc: 'Armado y organización de redes LAN, cableado estructurado y administración de switches.',
      img: `${import.meta.env.BASE_URL}switches.jpg`,
    },
  ];

  return (
  <div className="container py-5">
    <h3 className="text-center mb-4">Servicios de Redes</h3>
    <div className="row">
      {servicios.map((serv, i) => (
        <div
        className="col-md-4 mb-4"
        key={i}
        style={{ animationDelay: `${i * 0.2}s` }} // Retardo progresivo 
        >
          <div className="servicio-card flip-card">
            <img src={serv.img} className="card-img-top" alt={serv.titulo} />
            <div className="card-body">
              <h5 className="card-title">{serv.titulo}</h5>
              <p className="card-text">{serv.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default ServiciosRedes;