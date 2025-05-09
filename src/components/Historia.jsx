import React from 'react';
import '../styles/histooria.css';

const perritos = [
  {
    nombre: "Luna",
    imagen: "https://placedog.net/400/300?id=1",
    historia: "Luna fue rescatada de la calle y ahora vive feliz con una familia amorosa."
  },
  {
    nombre: "Max",
    imagen: "https://placedog.net/400/300?id=2",
    historia: "Max superó una enfermedad grave y se convirtió en un compañero leal."
  },
  {
    nombre: "Simba",
    imagen: "https://placedog.net/400/300?id=3",
    historia: "Simba fue adoptado de un refugio y es el rey de su hogar."
  },
  {
    nombre: "Nina",
    imagen: "https://placedog.net/400/300?id=4",
    historia: "Nina ayudó emocionalmente a su dueña en tiempos difíciles."
  },
  {
    nombre: "Shilcan",
    imagen: "https://previews.123rf.com/images/irinashatilova/irinashatilova2201/irinashatilova220100301/180790377-adorable-gatito-gato-gris-atigrado-con-modelo-de-juguete-peque%C3%B1o-blanco-sobre-un-fondo-de-mesa-blanc.jpg",
    historia: "Shilcan es el gato mas amado y hermoso de su hogar."
  }
];

function Historia() {
  return (
    <section id="historias" className="section">
      <h2>HISTORIA DE PERRITOS</h2>
      <div className="historia-grid">
        {perritos.map((perro, index) => (
          <div className="historia-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={perro.imagen} alt={perro.nombre} />
                <h3>{perro.nombre}</h3>
              </div>
              <div className="card-back">
                <p>{perro.historia}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Historia;
