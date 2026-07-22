import "../../Cards/Salao/DashboardCardSalao.css";

//criada funcao dash com os parametros das funcoes criadas em logService e calculadoraExcelService
function DashboardCardSalao({
  suporte = [],
  buscarAcessosMesSalao = []
}) {
  const totalAcessosSalao = buscarAcessosMesSalao;
 //variavel = quantidade da funcao q busca


    return (
       <div className="dashboardCards">

        <div className="dashboardCard">
      <span>Acessos do Salão</span>
     <h2>{buscarAcessosMesSalao}</h2>
    </div>
    </div>
    //Cards criados com className para o css
    //h2 {nome da propriedade ou variavel}
    );
}



export default DashboardCardSalao