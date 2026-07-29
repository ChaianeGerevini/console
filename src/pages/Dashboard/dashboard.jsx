import { useEffect, useState } from "react";
import { buscarMetricasAgendly } from "../../Services/Agendly/agendlyServices";
import CardsAgendly from "../../Components/Cards/Agendly/cardsAgendly";
import MelhoriasCards from "../../Components/Cards/Calculadora/MelhoriasCard";
import { buscarMelhorias } from "../../Services/MelhoriasServices";
import MelhoriaCard from "../../Components/Cards/Calculadora/MelhoriaCard";
import { buscarSuporte } from "../../Services/Calculadora/calculadoraExcelService";
import DashboardCards from "../../Components/Cards/Calculadora/DashboardCards";
import { buscarAcessosMes } from "../../Services/Calculadora/logsService";
import DashboardCardSalao from "../../Components/Cards/Salao/DashboardCardSalao";
import { buscarAcessosMesSalao } from "../../Services/Salao/logsServiceSalao";
import { buscarSuporteSalao } from "../../Services/Salao/suporte";
import ChamadoCardSalao from "../../Components/Cards/Salao/ChamadoCardSalao";


function Dashboard() {
    const [melhorias,setMelhorias] = useState([]);
    const [acessosMes, setAcessosMes] = useState(0);
    const [suporte, setSuporte] = useState([]);
    const [acessosSalao, setAcessosSalao] = useState(0);
    const [suporteSalao, setSuporteSalao] = useState([]);

    const [dados, setDados] = useState({
        usuarios: 0,
        premium: 0,
        suporte: 0,
    });

    useEffect(() => {
        carregar();
        carregarMelhorias();
    }, []);

  useEffect(() => {

    async function carregarSuporte() {
      const dados = await buscarSuporte();
      setSuporte(dados);
    }

    carregarSuporte();

  }, []);

  useEffect(() => {
  async function carregarSuporteSalao() {
    const dados = await buscarSuporteSalao();
    setSuporteSalao(dados);
  }

  carregarSuporteSalao();
}, []);

useEffect(() => {
  async function carregarAcessosSalao() {
    const total = await buscarAcessosMesSalao();
    setAcessosSalao(total);
  }

  carregarAcessosSalao();
}, []);
  useEffect(() => {
  async function carregarAcessos() {
    const totalAcessos = await buscarAcessosMes();
    setAcessosMes(totalAcessos);
  }

  carregarAcessos();
  //funcao carregar pagina
}, []);

    async function carregar() {
        const info = await buscarMetricasAgendly();
        setDados(info);
    }
    async function carregarMelhorias(){
  const dados = await buscarMelhorias();
  setMelhorias(dados);
}

    return (
        <>
            <h1>Dashboard Geral</h1>
<h3>App Agendly</h3>

            <CardsAgendly
    usuarios={dados.usuarios}
    premium={dados.premium}
    suporte={dados.suporte}
/>

<h3>Calculadora Excel</h3>

<DashboardCards suporte={suporte}
      acessosMes={acessosMes} />

<h3>Sistema salão</h3>

<DashboardCardSalao
      buscarSuporteSalao={suporteSalao}
    buscarAcessosMesSalao={acessosSalao} />


   <h3>Melhorias</h3>

    <MelhoriasCards
  atualizar={carregarMelhorias}
  sistema="Agendly"
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
        </>
    );
}

export default Dashboard