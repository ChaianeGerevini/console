//importamos bibliotecas e arquivos q vamos ultilizar 
import { useEffect, useState } from "react";
import { buscarAcessosMesSalao } from "../../Services/Salao/logsServiceSalao";
import DashboardCardSalao from "../../Components/Cards/Salao/DashboardCardSalao";
import { buscarSuporteSalao } from "../../Services/Salao/suporte";
import ChamadoCardSalao from "../../Components/Cards/Salao/ChamadoCardSalao";

//criamos a funcao da pagina
function Salao () {
const [acessosSalao, setAcessosSalao] = useState(0);
const [suporteSalao, setSuporteSalao] = useState([]);
 //criamos o useState,ele diz o estado da váriavel

useEffect(() => {

    async function carregarSuporteSalao() {
      const dados = await buscarSuporteSalao();
      setSuporteSalao(dados);
    }

    carregarSuporteSalao();

  }, []);

//aqui diz q ao carregar busque o total de acessos com a funcao de buscar
useEffect(() => {
  async function carregarAcessosSalao() {
    const dados = await buscarAcessosMesSalao();
setAcessosSalao(dados);
  }

  carregarAcessosSalao();
}, []);

    return (
      
    //o return é o que aparece em tela, neste caso tem o titulo 
    //Depois ele puxa as info do componente q criamos com as respectivas props
      <>
          <div className="container">
      <h1>Salao Tainara</h1>

    <DashboardCardSalao
      buscarSuporteSalao={suporteSalao}
    buscarAcessosMesSalao={acessosSalao} />


  <h2>Chamados em Aberto</h2>

      {suporteSalao
      .filter((chamado) => chamado.status === "pendente")
      .map((chamado) => (
        <ChamadoCardSalao
          key={chamado.id}
          chamado={chamado}
        />
      ))}


    </div>
    </>
    //filter filtra tabela por coluna e seu conteudo
    //.map cria um componente para cada chamado, ou seja ele identifica um novo e cria novo card
    //key serve para identificar q um dado é diferente do outro pois sao ids diferentes
  
  );
}

export default Salao;