import { useRef, useState } from "react"


const Grados = () =>{
  const centigradosRef = useRef();
  const resultadoRef = useRef();

  const calcular = ()=>{
    const centigradosValue = centigradosRef.current.value;
    const fahrenheit = centigradosValue * 9/5+32;
    resultadoRef.current.innerHTML = fahrenheit;
  }

  return <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Conversion Centigrados a Fahrenheit</h2>
      <input type="text" ref={centigradosRef} placeholder="Grados" />
      <button onClick={calcular} style={{ marginLeft: '1rem' }}>Enviar</button>
      <div ref={resultadoRef} style={{ marginTop: '1rem', fontWeight: 'bold' }}></div>
    </div>
}

export const GradosState = () =>{
  const gradosCRef = useRef();
  const [gradoF, setGradosF] = useState(0);

  const calcular = ()=>{
    const gradoC = gradosCRef.current.value;
    setGradosF(gradoC * 9/5 + 32);
  }

  return <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Conversion Centigrados a Fahrenheit Sate</h2>
      <input type="text" ref={gradosCRef} placeholder="Grados" />
      <button onClick={calcular} style={{ marginLeft: '1rem' }}>Enviar</button>
      <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>{gradoF} </div>
    </div>

}

const GradosFull = () => {
  return (
    <div>
      <Grados />
      <GradosState />

    </div>
  );
};

export default GradosFull;