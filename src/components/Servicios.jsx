import React from 'react';
import '../styles/servicios.css';
import { FaDog, FaHome, FaPaw } from 'react-icons/fa';

function Servicios() {
  return (
    <section id="servicios" className="section servicios-section">
      <h2 className="section-title">Servicios Disponibles</h2>
      <div className="services-grid">
        <div className="service-card">
          <FaDog className="service-icon" />
          <h3>Paseo de Perros</h3>
          <p>Paseamos a tu perro con seguridad, cuidado y cariño.</p>
        </div>
        <div className="service-card">
          <FaHome className="service-icon" />
          <h3>Hospedaje Temporal</h3>
          <p>Hospedamos a tu mascota en un ambiente cómodo y seguro.</p>
        </div>
        <div className="service-card">
          <FaPaw className="service-icon" />
          <h3>Cuidado a Domicilio</h3>
          <p>Visitamos tu hogar para alimentar y cuidar a tu mascota.</p>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
