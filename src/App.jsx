// Importamos navegación y los componentes principales
import { BrowserRouter } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Home from './paginas/Home';
import ModalContacto from './componentes/ModalContacto';

function App() {
  return (
    // Activamos navegación con React Router
    <BrowserRouter>
      {/* Menú principal */}
      <Navbar />

      {/* Página principal */}
      <main className="flex-grow-1">
        <Home />
      </main>

      {/* Pie de página y modal de contacto */}
      <Footer />
      <ModalContacto />
    </BrowserRouter>
  );
}

export default App;