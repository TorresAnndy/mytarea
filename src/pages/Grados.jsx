import { useRef } from "react"

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

export default Grados;