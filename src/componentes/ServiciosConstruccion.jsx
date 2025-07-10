function ServiciosConstruccion() {
  const servicios = [
    {
      titulo: 'Remodelaciones',
      desc: 'Transformación total de espacios antiguos en áreas modernas y funcionales.',
      img: `${import.meta.env.BASE_URL}remodelacion.jpg`,
    },
    {
      titulo: 'Pintura',
      desc: 'Aplicación profesional de pintura en interiores y exteriores.',
      img: `${import.meta.env.BASE_URL}pintura.png`,
    },
    {
      titulo: 'Tabiquería',
      desc: 'Instalación de tabiques para separar ambientes con aislación térmica y acústica.',
      img: `${import.meta.env.BASE_URL}tabiqueria.png`,
    },
    {
      titulo: 'Eléctricidad',
      desc: 'Instalaciones eléctricas bajo normas y certificación SEC.',
      img: `${import.meta.env.BASE_URL}electricidad.png`,
    },
    {
      titulo: 'Cerámicas',
      desc: 'Instalación profesional de cerámicas para interiores y exteriores.',
      img: `${import.meta.env.BASE_URL}ceramica.png`,
    },
  ];

  return (
    <div className="container py-5">
      <h3 className="text-center mb-4">Servicios de Construcción</h3>
      <div className="row">
        {servicios.map((serv, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card h-100 bg-azuloscuro text-white shadow">
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

export default ServiciosConstruccion;