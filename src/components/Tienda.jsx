import React from 'react';
import '../styles/tienda.css';

const productos = [
  { nombre: "Juguete Mordedor", precio: "S/ 25", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTf5IWItY1oPBOznqeHe1SYny7VhagbZ-wA&s" },
  { nombre: "Collar para Gato", precio: "S/ 18", imagen: "https://i0.wp.com/cat-oh.com/wp-content/uploads/2020/05/C5079424.jpg?fit=425%2C425&ssl=1" },
  { nombre: "Pelota para Perro", precio: "S/ 15", imagen: "https://media.falabella.com/falabellaPE/126648585_01/public" },
  { nombre: "Correa Retráctil", precio: "S/ 30", imagen: "https://gopet.vtexassets.com/arquivos/ids/162627/CORREA-RETRACTIL-AZUL.jpg?v=638399253867670000" },
];

function Tienda() {
  return (
    <section id="tienda" className="section">
      <h2>NUESTRA TIENDA</h2>
      <div className="tienda-grid">
        {productos.map((prod, index) => (
          <div className="producto" key={index}>
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>{prod.precio}</p>
            <p className="descuento">Descuento: 10% </p>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tienda;
