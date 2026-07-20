import { useEffect, useState } from "react";
import DashboardCards from "../../Components/Cards/DashboardCards";
import { registrarAcesso, buscarAcessosMes } from "../../Services/Calculadora/logsService";

function Dashboard() {
const [acessosMes, setAcessosMes] = useState(0);

useEffect(() => {
  async function carregar() {
      const totalAcessos = await buscarAcessosMes();

      setAcessosMes(totalAcessos);
    }

  carregar();
}, []);

  useEffect(() => {

    if (!sessionStorage.getItem("dashboardVisitado")) {
      registrarAcesso("dashboard");
      sessionStorage.setItem("dashboardVisitado", "true");
    }

  }, []);

  return (
  <div className="container"> 
  <h1>Dashboard</h1> <DashboardCards suporte={[]}   acessosMes={acessosMes} /> </div> 
);
}

export default Dashboard;