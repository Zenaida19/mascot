import React from 'react';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">PetCare</div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#historias">Historias</a></li>
          <li><a href="#tienda">Tienda</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
