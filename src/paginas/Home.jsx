import { useState } from 'react';
import '../index.css';

import serviciosImg from '/servicios.jpg';     // Imagen para categoría Construcción
import redesImg from '/redes.jpg';             // Imagen para categoría Redes

import ServiciosConstruccion from '../componentes/ServiciosConstruccion';

import ServiciosRedes from '../componentes/ServiciosRedes';

import { useScrollAnimation } from '../Hooks/useScrollAnimation';

function Home() {
  const [refHeader, isVisibleHeader] = useScrollAnimation();
  const [mostrarConstruccion, setMostrarConstruccion] = useState(false);
  const [mostrarRedes, setMostrarRedes] = useState(false);
  const [refQuienes, isVisibleQuienes] = useScrollAnimation();
  const [refConstruccion, isVisibleConstruccion] = useScrollAnimation();const [refRedes, isVisibleRedes] = useScrollAnimation();


  return (
    <>
      {/* Portada con texto */}
      <header
      id="top"
      ref={refHeader}
      className={`d-flex align-items-center justify-content-center text-center text-white portada-home animated ${isVisibleHeader ? 'fade-in' : 'opacity-0'}`}
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}Portada.jpg')`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',
        height: '100vh',
        }}
      >
        <div className="bg-dark bg-opacity-50 p-4 rounded">
          <h1 className="display-4 fw-bold"><b>ConstruRedes</b></h1>
          <p className="lead"><i>Potenciamos tus ideas, creamos tu mundo.</i></p>
          <a href="#servicios" className="btn btn-dark mt-3">
            Revisa nuestros servicios
            </a>
            </div>
       </header>

      <section
      id="quienes-somos"
      ref={refQuienes}
      className={`py-5 animated ${isVisibleQuienes ? 'fade-in-up' : ''}`}
      >
        <div className="container">
          <h2 className="text-center mb-4"><b>¿Quiénes Somos?</b></h2>
          <p className="lead text-center">
            <i>En <b>ConstruRedes</b> nos especializamos en ofrecer servicios integrales en construcción y redes, combinando experiencia técnica, compromiso con la calidad y una atención personalizada. Nuestro equipo está compuesto por profesionales capacitados en trabajos de remodelación, terminaciones, tabiquería, electricidad y más, asegurando un resultado confiable y estético. Además, contamos con personal calificado en tecnologías de seguridad y redes como CCTV, control de acceso y cableado estructurado.</i></p>
            <p className='lead text-center'><i>Cumplimos con las normativas vigentes en cada área, buenas prácticas de construcción en tabiquería y terminaciones, y normas de instalación para sistemas de seguridad.Nos adaptamos a cada proyecto según las necesidades de nuestros clientes, brindando soluciones duraderas y seguras.</i>
          </p>
        </div>
      </section>

      {/* Sección de categorías */}
      <section id="servicios" className="py-5 bg-azulrey text-white">
        <div className="container">
        </div>
          <h2 className="text-center mb-5">Áreas de Trabajo</h2>
          <div className="row">
            {/* Categoría: Construcción */}
            <div
            ref={refConstruccion}
            className={`col-md-6 mb-4 ${isVisibleConstruccion ? 'slide-in-left' : 'opacity-0'}`}
            >
              <div
              className="categoria-box position-relative"
              onClick={() => {
                setMostrarConstruccion(true);
                setMostrarRedes(false);
              }}
              >
                {/* Imagen */}
                <img
                src={serviciosImg}
                alt="Construcción"
                className="categoria-img"
                />
                {/* Overlay con nombre */}
                <div className="categoria-overlay d-flex justify-content-center align-items-center">
                <h3 className="categoria-titulo">
                  Construcción
                </h3>
                </div>
              </div>
            </div>

            {/* Categoría: Redes */}
            <div
            ref={refRedes}
            className={`col-md-6 mb-4 ${isVisibleRedes ? 'slide-in-right' : 'opacity-0'}`}
            >
              <div
              className="categoria-box position-relative"
              onClick={() => {
                setMostrarRedes(true);
                setMostrarConstruccion(false);
              }}
              >
                <img
                src={redesImg}
                alt="Redes"
                className="categoria-img"
                />
                <div className="categoria-overlay d-flex justify-content-center align-items-center">
                <h3 className="categoria-titulo">
                  Redes
                </h3>
                  </div>
              </div>
           </div>

          {/* Mostrar tarjetas de construcción */}
          {mostrarConstruccion && (
            <div className="mt-5 position-relative">
              <button
                className="btn-close-servicio"
                onClick={() =>
                setMostrarConstruccion(false)}
                >
                ×
                </button>
              <ServiciosConstruccion />
              <div className="text-center mt-3">
                <div className="text-center mt-4">
                  
                <button
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#modalContacto"
                >
                  Solicitar este servicio
                </button>
                </div>
              </div>
            </div>
          )}

          {/* Mostrar tarjetas de redes */}{mostrarRedes && (
            <div className="mt-5 position-relative">
                <button
                className="btn-close-servicio"
                onClick={() => setMostrarRedes(false)}
              >
                ×
                </button>
              <ServiciosRedes />
              <div className="text-center mt-3">
              <button
              className="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#modalContacto"
              >
                Solicitar este servicio
              </button>
            </div>
          </div>
        )}
        </div>
      </section>
    </>
  );
}

export default Home;