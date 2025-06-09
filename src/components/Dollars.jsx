import { useState } from "react"

const Dollars = () =>{
    const [dolares, setDolares] = useState(0);
    
    return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Conversor Euro a Dólar (useState)</h2>
      <input type="text" onChange={e=> setDolares(e.target.value*2)} />
      <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>{dolares}</div>
    </div>
  );
}

export default Dollars