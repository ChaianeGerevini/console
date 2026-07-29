import { useEffect, useState } from "react";
import { buscarMetricasAgendly } from "../../Services/Agendly/agendlyServices";
import CardsAgendly from "../../Components/Cards/Agendly/cardsAgendly";
import MelhoriasCards from "../../Components/Cards/Calculadora/MelhoriasCard";
import { buscarMelhorias } from "../../Services/MelhoriasServices";
import MelhoriaCard from "../../Components/Cards/Calculadora/MelhoriaCard";

function Agendly() {
    const [melhorias,setMelhorias] = useState([]);

    const [dados, setDados] = useState({
        usuarios: 0,
        premium: 0,
        suporte: 0,
    });

    useEffect(() => {
        carregar();
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
            <h1>Agendly</h1>

            <CardsAgendly
    usuarios={dados.usuarios}
    premium={dados.premium}
    suporte={dados.suporte}
/>
   <h3>Melhorias</h3>

    <MelhoriasCards
  atualizar={carregarMelhorias}
  sistema="Agendly"
/>

{melhorias
.filter((melhorias)=> melhorias.sistema === "Agendly" )
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

export default Agendly