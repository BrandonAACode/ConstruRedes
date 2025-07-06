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
    <BrowserRouter>
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<><Portada /><Home /></>} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;