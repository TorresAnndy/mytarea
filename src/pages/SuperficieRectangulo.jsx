import { useRef, useState } from "react";
import GradosC from '../components/GradosC'

const SuperficieRectangulo = () => {
    const anchoRef = useRef();
    const altoRef = useRef();
    const resultadoRef = useRef();

    const calcular = () => {
        const anchoValue = parseFloat(anchoRef.current.value);
        const altoValue = parseFloat(altoRef.current.value);
        const r = anchoValue * altoValue;
        resultadoRef.current.innerHTML = isNaN(r) ? 'Valores inválidos' : r;
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h2>Superficie Rectángulo</h2>
            <div style={{ display: 'inline-flex', gap: '1rem' }}>
                <input type="number" ref={anchoRef} placeholder="Ancho" />
                <input type="number" ref={altoRef} placeholder="Alto" />
            </div>
            <div>
                <button onClick={calcular} style={{ marginTop: '1rem' }}>Enviar</button>
            </div>
            <div ref={resultadoRef} style={{ marginTop: '1rem', fontWeight: 'bold' }}></div>
        </div>
    );
};

const SuperficieRectanguloStatus = () =>{
    const widthRef = useRef();
    const heightRef = useRef();
    const [area, setArea] = useState(0);

    const calcular = () =>{
        setArea(widthRef.current.value*heightRef.current.value)
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h2>Superficie Rectángulo</h2>
            <div style={{ display: 'inline-flex', gap: '1rem' }}>
                <input type="number" ref={widthRef} placeholder="Ancho" />
                <input type="number" ref={heightRef} placeholder="Alto" />
            </div>
            <div>
                <button onClick={calcular} style={{ marginTop: '1rem' }}>Enviar</button>
            </div>
            <div style={{ marginTop: '1rem', fontWeight: 'bold' }}> {area} </div>
        </div>
    );
}

const SuperficieRectanguloFull = () => {
  return (
    <div>
      <SuperficieRectangulo />
      <SuperficieRectanguloStatus />
      <GradosC/>
    </div>
  );
};

export default SuperficieRectanguloFull;
