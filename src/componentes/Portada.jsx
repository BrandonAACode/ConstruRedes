// Portada con imagen horizontal que se adapta a celular y escritorio sin recortes
function Portada() {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        width: '100%',
        height: 'calc(100vh - 56px)', // Resta el alto del navbar fijo
        marginTop: '56px',            // Deja espacio debajo del navbar
        backgroundColor: '#000',      // Fondo negro para evitar bordes blancos
        overflow: 'hidden'
      }}
    >
      {/* Imagen del logo portada adaptada para que no se deforme */}
      <img
        src={`${import.meta.env.BASE_URL}Portada.jpg`}
        alt="Logo ConstruRedes"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          height: 'auto',
          width: 'auto'
        }}
      />
    </div>
  );
}

export default Portada;