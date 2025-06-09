import { useState } from "react";

const Dollars = () => {
  const [ancho, setAncho] = useState(0);
  const [alto, setAlto] = useState(0);

  const area = ancho * alto;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Superficie Rectángulo</h2>
      <div style={{ display: "inline-flex", gap: "1rem" }}>
        <input
          type="number"
          placeholder="Ancho"
          onChange={(e) => setAncho(parseFloat(e.target.value) || 0)}
        />
        <input
          type="number"
          placeholder="Alto"
          onChange={(e) => setAlto(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div style={{ marginTop: "1rem", fontWeight: "bold" }}>{area}</div>
    </div>
  );
};

export default Dollars;
