import React, { Component, useRef } from "react";

const EuroDolar = () => {
  const eurosRef = useRef();
  const resultadoRef = useRef();

  const calcular = () => {
    const eurosValue = eurosRef.current.value;
    const dolares = eurosValue * 2;
    resultadoRef.current.innerHTML = dolares;
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Conversor Euro a Dólar</h2>
      <input type="text" ref={eurosRef} placeholder="Cantidad en euros" />
      <button onClick={calcular} style={{ marginLeft: '1rem' }}>Enviar</button>
      <div ref={resultadoRef} style={{ marginTop: '1rem', fontWeight: 'bold' }}></div>
    </div>
  );
};

export default EuroDolar;
