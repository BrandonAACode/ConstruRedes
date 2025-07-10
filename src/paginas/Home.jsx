import { useState } from 'react';
import '../index.css';

import serviciosImg from '/servicios.jpg';     // Imagen para categoría Construcción
import redesImg from '/redes.jpg';             // Imagen para categoría Redes

import ServiciosConstruccion from '../componentes/ServiciosConstruccion';
import ServiciosRedes from '../componentes/ServiciosRedes';

function Home() {
  const [mostrarConstruccion, setMostrarConstruccion] = useState(false);
  const [mostrarRedes, setMostrarRedes] = useState(false);

  return (
    <>
      {/* Portada con texto */}
      <header
        className="d-flex align-items-center justify-content-center text-center text-white portada-home"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}Portada.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        }}
      >
        <div className="bg-black bg-opacity-50 p-4 rounded animated fade-in">
          <h1 className="display-4 fw-bold"><b>ConstruRedes</b></h1>
          <p className="lead"><i>Potenciamos tus ideas, creamos tu mundo.</i></p>
          <a href="#servicios" className="btn btn-primary mt-3">{/* Boton para servicios */}
            Revisa nuestros trabajos y servicios
          </a>
        </div>
      </header>

      <section className="py-5" id="quienes-somos">
        <div className="container">
          <h2 className="text-center mb-4"><b>¿Quiénes Somos?</b></h2>
          <p className="lead text-center">
            <i>En <strong>ConstruRedes</strong> nos especializamos en ofrecer servicios integrales en construcción y redes, combinando experiencia técnica, compromiso con la calidad y una atención personalizada. Nuestro equipo está compuesto por profesionales capacitados en trabajos de remodelación, terminaciones, tabiquería, electricidad y más, asegurando un resultado confiable y estético. Además, contamos con personal calificado en tecnologías de seguridad y redes como CCTV, control de acceso y cableado estructurado.</i>
          </p>
          <p>
            Cumplimos con las normativas vigentes en cada área, tales como la certificación SEC en trabajos eléctricos, buenas prácticas de construcción en tabiquería y terminaciones, y normas de instalación para sistemas de seguridad.Nos adaptamos a cada proyecto según las necesidades de nuestros clientes, brindando soluciones duraderas y seguras.
          </p>
        </div>
      </section>

      {/* Sección de categorías */}
      <section id="servicios" className="py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-5">Áreas de Trabajo</h2>
          <div className="row">
            {/* Categoría: Construcción */}
            <div className="col-md-6 mb-4">
              <div
                className="categoria-box"
                onClick={() => {
                  setMostrarConstruccion(true);
                  setMostrarRedes(false);
                }}
                style={{
                  backgroundImage: `url(${serviciosImg})`,
                }}
              >
                <div className="overlay">
                  <h3>Construcción</h3>
                </div>
              </div>
            </div>

            {/* Categoría: Redes */}
            <div className="col-md-6 mb-4">
              <div
                className="categoria-box"
                onClick={() => {
                  setMostrarRedes(true);
                  setMostrarConstruccion(false);
                }}
                style={{
                  backgroundImage: `url(${redesImg})`,
                }}
              >
                <div className="overlay">
                  <h3>Redes</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Mostrar tarjetas de construcción */}
          {mostrarConstruccion && (
            <div className="mt-5">
              <ServiciosConstruccion />
            </div>
          )}

          {/* Mostrar tarjetas de redes */}
          {mostrarRedes && (
            <div className="mt-5">
              <ServiciosRedes />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;