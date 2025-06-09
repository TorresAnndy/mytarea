import { useRef, useState } from "react"

const BotonEstado = () =>{
    const[contador, setContador] = useState(1);
    return <div>
        <button onClick={() => setContador(contador + 1)} style={{ marginTop: '1rem' }}>{contador}</button>
    </div>
    
    
}

export default BotonEstado;