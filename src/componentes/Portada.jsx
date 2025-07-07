// Portada que muestra una imagen horizontal completa
function Portada() {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        width: '100%',
        paddingTop: '56px',       // Espacio para que no tape el navbar fijo
        backgroundColor: '#fff',  // Fondo blanco para que se vea limpio
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}Portada.jpg`}
        alt="Logo ConstruRedes"
        style={{
          width: '100%',         // Que ocupe el ancho completo de la pantalla
          height: 'auto',        // Que mantenga su proporción
          maxWidth: '1024px',    // Limita el tamaño máximo en pantallas grandes
        }}
      />
    </div>
  );
}

export default Portada;
