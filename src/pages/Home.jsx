import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Servicios from '../components/Servicios';
import Historia from '../components/Historia';
import Tienda from '../components/Tienda';
import Contacto from "../components/Contactos";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Servicios />
      <Historia />
      <Tienda />
      <Contacto />
      <footer>
        <p>&copy; 2025 PetCare. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default Home;
