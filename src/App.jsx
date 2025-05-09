import './styles/styles.css';
import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios'; // ← ¡Lo importas pero no lo usas!
import Reservas from './components/Reservas';   // ← También importado pero no usado
import Historia from './components/Historia';
import Tienda from './components/Tienda';
import Contacto from "./components/Contactos";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Servicios />   {/* Asegúrate de que este componente esté creado */}
      <Reservas />    {/* Lo mismo, si no lo necesitas, elimina el import */}
      <Historia />
      <Tienda />
      <Contacto />
      <footer>
        <p>&copy; 2025 PetCare. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
