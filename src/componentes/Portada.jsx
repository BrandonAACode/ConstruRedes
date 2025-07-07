// Este componente muestra una imagen principal (hero) que ocupa toda la pantalla al cargar la página
function Portada() {
  return (
    // Contenedor principal que envuelve toda la portada
    <div
      style={{
        position: 'relative', // Para poder posicionar el texto encima de la imagen
        width: '100%',        // Ocupa todo el ancho disponible
        height: '100vh',      // Ocupa todo el alto visible del navegador (viewport height)
        marginTop: '56px',    // Deja espacio para que no tape el navbar fijo
        overflow: 'hidden',   // Oculta cualquier contenido que se salga del área
      }}
    >
      {/* Imagen que se ajusta como fondo, pero usando la etiqueta <img> en vez de background-image */}
      <img
        src={`${import.meta.env.BASE_URL}Portada.jpg`} // Ruta de la imagen ajustada para producción con Vite
        alt="Portada" // Texto alternativo por accesibilidad
        style={{
          width: '100%',             // Hace que la imagen ocupe todo el ancho
          height: '100%',            // Hace que la imagen también cubra todo el alto
          objectFit: 'cover',        // Mantiene la proporción y recorta si es necesario para llenar el espacio
          objectPosition: 'center',  // Centra la imagen para que se vea equilibrada
        }}
      />

      {/* Este div sirve para poner contenido encima de la imagen, como texto o botones */}
      <div
        className="container d-flex align-items-center justify-content-center text-center text-white"
        style={{
          position: 'absolute', // Se posiciona encima de la imagen
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
      </div>
    </div>
  );
}

// Exportamos el componente para poder usarlo en otras partes del sitio
export default Portada;