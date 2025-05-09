import React from 'react';

function Reservas() {
  return (
    <section id="reservas" className="section">
      <h2>Reservar un Servicio</h2>
      <form id="reservaForm" className="reserva-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" placeholder="Tu correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="mascota">Nombre de tu mascota</label>
          <input type="text" id="mascota" name="mascota" placeholder="Nombre de tu mascota" required />
        </div>
        <div className="form-group">
          <label htmlFor="servicio">Tipo de Servicio</label>
          <select id="servicio" name="servicio" required>
            <option value="">Selecciona un servicio</option>
            <option value="paseo">Paseo</option>
            <option value="hospedaje">Hospedaje</option>
            <option value="domicilio">Domicilio</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha</label>
          <input type="date" id="fecha" name="fecha" required />
        </div>
        <button type="submit" className="btn">Reservar</button>
      </form>
    </section>
  );
}

export default Reservas;
