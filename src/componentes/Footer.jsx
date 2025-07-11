function Footer() {
  return (
    <footer className="bg-azulrey text-white py-5 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Columna 1: Empresa */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center gap-2">
              <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Logo" height="30" />
              <h5 className="mb-0"><b>ConstruRedes</b></h5>
            </div>

            <p><i>Especialistas en construcción y soluciones en redes para empresas y hogares.</i></p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contacto.</h5>
            <p className="mb-1">📧 <a href="mailto:informaciones@construredes.cl" className="text-white">informaciones@construredes.cl</a></p>
            <p className="mb-1">📞 +56 9 1234 5678</p>
            <p className="mb-0">📍 Av. Vicuña Mackenna 3864, Santiago.</p>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Síguenos en nuestras redes sociales.</h5>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-white fs-4 me-4 footer-icon">
              <i className="bi bi-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/constru_redes?igsh=MXg0MTJoMWJnc29hbQ==" target="_blank" rel="noopener noreferrer" className="text-white fs-4 me-4 footer-icon">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com/construredes.cad" target="_blank" rel="noopener noreferrer" className="text-white fs-4 footer-icon">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>

        <hr className="border-white mt-4" />
        <p className="text-center small mb-0">© 2025 ConstruRedes - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;