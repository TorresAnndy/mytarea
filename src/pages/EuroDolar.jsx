import React, { useRef, useState } from "react";
import Dollars from '../components/Dollars'

const EuroDolar = () => {
  const eurosRef = useRef();
  const resultadoRef = useRef();

  const calcular = () => {
    const eurosValue = parseFloat(eurosRef.current.value);
    const dolares = eurosValue * 2;
    resultadoRef.current.innerHTML = isNaN(dolares) ? 'Valor inválido' : dolares;
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

const EuroDolarState = () => {
  const eurosRef = useRef();
  const [dolares, setDolares] = useState(0);

  const calcular = () => {
    const eurosValue = parseFloat(eurosRef.current.value);
    const dolaresValue = eurosValue * 2;
    setDolares(isNaN(dolaresValue) ? 0 : dolaresValue);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Conversor Euro a Dólar (useState)</h2>
      <input type="text" ref={eurosRef} placeholder="Cantidad en euros" />
      <button onClick={calcular} style={{ marginLeft: '1rem' }}>Enviar</button>
      <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>{dolares}</div>
    </div>
  );
};


const Conversores = () => {
  return (
    <div>
      <EuroDolar />
      <EuroDolarState />
      <Dollars/>
    </div>
  );
};

export default Conversores;
