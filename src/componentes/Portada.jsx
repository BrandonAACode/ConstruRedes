// Portada que muestra una imagen horizontal completa
function Portada() {
  return (
    <div
    className="d-flex align-items-center justify-content-center text-center"
    style={{
      marginTop: '56px',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000',
      overflow: 'hidden',
      backgroundImage: `url('${import.meta.env.BASE_URL}Portada.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
    >
    </div>
  );
}

export default Portada;