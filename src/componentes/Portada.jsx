// Este componente muestra una imagen principal a pantalla completa (estilo hero)
function Portada() {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-primary text-center"
      style={{
        backgroundImage: "url('/Portada.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '90vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <div className="container"></div>
    </div>
  );
}
export default Portada