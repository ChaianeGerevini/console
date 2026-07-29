import "../../Cards/Salao/DashboardCardSalao.css";

//criada funcao dash com os parametros das funcoes criadas em logService e calculadoraExcelService
function DashboardCardSalao({
  buscarSuporteSalao = [],
  buscarAcessosMesSalao = []
}) {
  const totalAcessosSalao = buscarAcessosMesSalao;
  const totalChamados = buscarSuporteSalao.length;

    const totalEmpresas = new Set (
        buscarSuporteSalao.map((item) => item.empresa) 
    ).length 


    return (
       <div className="dashboardCards">

        <div className="dashboardCard">
      <span>Acessos do Salão</span>
     <h2>{buscarAcessosMesSalao}</h2>
    </div>
      <div className="dashboardCard">
      <span>Total de Chamados</span>
     <h2>{totalChamados}</h2>
    </div>
    </div>
    //Cards criados com className para o css
    //h2 {nome da propriedade ou variavel}
    );
}



export default DashboardCardSalao