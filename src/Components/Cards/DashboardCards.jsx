import "../../Components/Cards/DashboardCards.css"

function DashboardCards({suporte, acessosMes})
{
    const totalChamados = suporte.length;
    
    const totalEmpresas = new Set (
        suporte.map((item) => item.empresa) 
    ).size

    const totalAbertos = suporte.filter(
    (item) => item.status === "Aberto"
  ).length;


    return (
       <div className="dashboardCards">

      <div className="dashboardCard">
        <span>Total de Chamados</span>
        <h2>{totalChamados}</h2>
      </div>

      <div className="dashboardCard">
        <span>Empresas</span>
        <h2>{totalEmpresas}</h2>
      </div>

      <div className="dashboardCard">
        <span>Em Aberto</span>
        <h2>{totalAbertos}</h2>
      </div>
      
      <div className="dashboardCard">
  <span>Acessos do Mês</span>
  <h2>{acessosMes}</h2>
</div>

    </div>
    );
}


export default DashboardCards