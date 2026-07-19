import { useEffect, useState } from "react";
import { buscarSuporte } from "../../Services/Calculadora/calculadoraExcelService";
import ChamadoCard from "../../Components/Cards/ChamadoCard";
import DashboardCards from "../../Components/Cards/DashboardCards";
import { buscarAcessosMes } from "../../Services/Calculadora/logsService";

function CalculadoraExcel () {
    const [acessosMes, setAcessosMes] = useState(0);
     const [suporte, setSuporte] = useState([]);

  useEffect(() => {

    async function carregar() {
      const dados = await buscarSuporte();
      setSuporte(dados);
    }

    carregar();

  }, []);
    return (
      <>
          <div className="container">
      <h1>Suporte</h1>

<DashboardCards suporte={suporte}
  acessosMes={acessosMes} />

      {suporte
      .filter((chamado) => chamado.status === "Aberto")
      .map((chamado) => (
        <ChamadoCard
          key={chamado.id}
          chamado={chamado}
        />
      ))}

    </div>
    </>
  );
}

export default CalculadoraExcel;