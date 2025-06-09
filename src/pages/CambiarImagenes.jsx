const Animal_Imagen = {
  img1: '../src/Img/Gato.jpg',
  img2: '../src/Img/perro.jpg',
  img3: '../src/Img/Zorro.jpg',
};

import React, { useState } from "react";

const AnimalViewer = () => {
  const [imagenActual, setImagenActual] = useState("");

  const mostrarImagen = (clave) => {
    setImagenActual(Animal_Imagen[clave]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Visualizador de Animales</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => mostrarImagen("img1")}>Ver Animal 1</button>
        <button onClick={() => mostrarImagen("img2")} style={{ marginLeft: "1rem" }}>
          Ver Animal 2
        </button>
        <button onClick={() => mostrarImagen("img3")} style={{ marginLeft: "1rem" }}>
          Ver Animal 3
        </button>
      </div>
      {imagenActual && (
        <div>
          <img src={imagenActual} alt="Animal" style={{ width: "300px", height: "200px" }} />
        </div>
      )}
    </div>
  );
};

export default AnimalViewer;
