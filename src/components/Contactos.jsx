import React from 'react';
import '../styles/contactos.css';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';

function Contacto() {
  return (
    <section id="contacto" className="section contacto-section">
      <h2>Contáctanos</h2>

      <div className="contact-info-blocks">
        <div className="info-card">
          <FaMapMarkerAlt className="icon" />
          <p><strong>Dirección:</strong><br />FONAVI II</p>
        </div>
        <div className="info-card">
          <FaPhone className="icon" />
          <p><strong>Teléfono:</strong><br />+51 987 654 321</p>
        </div>
        <div className="info-card">
          <FaEnvelope className="icon" />
          <p><strong>Correo:</strong><br />contacto@petcare.com</p>
        </div>
        <div className="info-card">
          <p><strong>Horario de atención:</strong><br />Lunes a Sábado de 8:00 a.m. a 6:00 p.m.</p>
        </div>
        <div className="info-card">
          <FaFacebook className="icon" />
          <p><strong>Facebook:</strong><br /><a href="#">@PetCare</a></p>
        </div>
        <div className="info-card">
          <FaInstagram className="icon" />
          <p><strong>Instagram:</strong><br /><a href="#">@PetCareIG</a></p>
        </div>
        <div className="info-card">
          <FaTwitter className="icon" />
          <p><strong>Twitter:</strong><br /><a href="#">@PetCareTw</a></p>
        </div>
      </div>

  <div>
    <p><br /></p>
  </div>

      <form className="contact-form">
        <label htmlFor="nombre">Tu nombre:</label>
        <input type="text" id="nombre" placeholder="Tu nombre" required />

        <label htmlFor="email">Tu correo:</label>
        <input type="email" id="email" placeholder="Tu correo" required />

        <label htmlFor="mensaje">Tu mensaje:</label>
        <textarea id="mensaje" placeholder="Tu mensaje" required></textarea>

        <button type="submit" className="btn">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;
