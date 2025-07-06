// Importamos herramientas de navegación de React y los componentes principales del sitio
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Portada from './componentes/Portada';
import Footer from './componentes/Footer';
import Home from './paginas/Home';
import QuienesSomos from './paginas/QuienesSomos';
import Servicios from './paginas/Servicios';
import Contacto from './paginas/Contacto';

function App() {
  return (
    // Habilitamos el uso de rutas tipo SPA con React Router
    <BrowserRouter>
    {/* Menú de navegación, siempre visible */}
      <Navbar />
      {/* Contenido principal del sitio */}
      <main className="flex-grow-1">
        <Routes>
          {/* Ruta principal muestra la portada y la página de inicio */}
          <Route path="/" element={<><Portada /><Home /></>} />
          {/* Rutas secundarias con sus respectivas páginas */}
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      {/* Pie de página, siempre visible */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;