import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section id="inicio" className="hero">
      <h1>Bienvenido a PetCare</h1>
      <p>El mejor cuidado para tu mascota mientras tú no estás</p>
      <Link to="/login" className="btn">Reserva un servicio</Link>
    </section>
  );
}

export default Hero;
