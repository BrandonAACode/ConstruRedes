// Este componente muestra una imagen principal a pantalla completa (estilo hero)
function Portada() {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-primary text-center"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}Portada.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',            // Abarca el ancho completo
        height: '100vh',
        marginTop: '56px',         // Deja espacio debajo del navbar
        overflow: 'hidden'
      }}
    >
      <div className="container"></div>
    </div>
  );
}

export default Portada;
