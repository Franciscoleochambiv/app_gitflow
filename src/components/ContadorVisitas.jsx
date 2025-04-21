import { useState, useEffect } from "react";

const ContadorVisitas = () => {
  const [visitas, setVisitas] = useState(0);

  useEffect(() => {
    const visitasGuardadas = parseInt(localStorage.getItem("visitas")) || 0;
    const nuevasVisitas = visitasGuardadas + 1;
    localStorage.setItem("visitas", nuevasVisitas);
    setVisitas(nuevasVisitas);
  }, []);

  return <h3>Visitas: {visitas}</h3>;
};

export default ContadorVisitas;
