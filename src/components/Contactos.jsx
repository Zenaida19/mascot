import React from 'react';
import '../styles/contactos.css';


function Contacto() {
  return (
    <section id="contacto" className="section">
      <h2>Contáctanos</h2>
      <form>
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
