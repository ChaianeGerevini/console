import "../../Components/Cards/DashboardCards.css"

//criada funcao dash com os parametros das funcoes criadas em logService e calculadoraExcelService
function DashboardCards({suporte, acessosMes})
{
    const totalChamados = suporte.length; //variavel = quantidade da funcao q busca
    const totalAcessos = acessosMes.length;

    
    const totalEmpresas = new Set (
        suporte.map((item) => item.empresa) 
    ).size //quantidade de chamados abertos pela coluna empresa

    const totalAbertos = suporte.filter(
    (item) => item.status === "Aberto"
  ).length; //quantidade de chamados abertos pela coluna status


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
      <span>Acessos da Calculadora</span>
     <h2>{acessosMes}</h2>
    </div>
    </div>
    //Cards criados com className para o css
    //h2 {nome da propriedade ou variavel}
    );
}


export default DashboardCards