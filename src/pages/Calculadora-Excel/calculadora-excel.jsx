//importamos bibliotecas e arquivos q vamos ultilizar 
import { useEffect, useState } from "react";
import { buscarSuporte } from "../../Services/Calculadora/calculadoraExcelService";
import ChamadoCard from "../../Components/Cards/Calculadora/ChamadoCard";
import DashboardCards from "../../Components/Cards/Calculadora/DashboardCards";
import { buscarAcessosMes } from "../../Services/Calculadora/logsService";
import MelhoriasCards from "../../Components/Cards/Calculadora/MelhoriasCard";
import { buscarMelhorias } from "../../Services/MelhoriasServices";
import MelhoriaCard from "../../Components/Cards/Calculadora/MelhoriaCard";

//criamos a funcao da pagina
function CalculadoraExcel () {
    const [acessosMes, setAcessosMes] = useState(0);
    const [suporte, setSuporte] = useState([]);
    const [melhorias,setMelhorias] = useState([]);
 //criamos o useState,ele diz o estado da váriavel

  //criamos o useEffect a permite mudar valores
  //o async esta dizendo q ao carregar a pagina busque os dados da funcao buscar suporte e altere os dados
  useEffect(() => {

    async function carregarSuporte() {
      const dados = await buscarSuporte();
      setSuporte(dados);
    }

    carregarSuporte();

  }, []);

async function carregarMelhorias(){
  const dados = await buscarMelhorias();
  setMelhorias(dados);
}


useEffect(()=>{
  carregarMelhorias();
},[]);



//aqui diz q ao carregar busque o total de acessos com a funcao de buscar
  useEffect(() => {
  async function carregarAcessos() {
    const totalAcessos = await buscarAcessosMes();
    setAcessosMes(totalAcessos);
  }

  carregarAcessos();
  //funcao carregar pagina
}, []);

   
    return (
      
    //o return é o que aparece em tela, neste caso tem o titulo 
    //Depois ele puxa as info do componente q criamos com as respectivas props
      <>
          <div className="container">
      <h1>Calculadora Excel</h1>

    <DashboardCards suporte={suporte}
      acessosMes={acessosMes} />

  <h2>Chamados em Aberto</h2>

      {suporte
      .filter((chamado) => chamado.status === "Aberto")
      .map((chamado) => (
        <ChamadoCard
          key={chamado.id}
          chamado={chamado}
        />
      ))}

    <h3>Melhorias</h3>

    <MelhoriasCards
  atualizar={carregarMelhorias}
/>

{melhorias
.filter((melhorias)=> melhorias.status === "Pendente" )
.map((item) => (
  <MelhoriaCard
    key={item.id}
    item={item}
    atualizar={carregarMelhorias}
  />
))}

    </div>
    </>
    //filter filtra tabela por coluna e seu conteudo
    //.map cria um componente para cada chamado, ou seja ele identifica um novo e cria novo card
    //key serve para identificar q um dado é diferente do outro pois sao ids diferentes
  
  );
}

export default CalculadoraExcel;