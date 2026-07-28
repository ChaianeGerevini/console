import { useEffect, useState } from "react";
import { buscarMetricasAgendly } from "../../Services/Agendly/agendlyServices";
import CardsAgendly from "../../Components/Cards/Agendly/cardsAgendly";

function Agendly() {

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

    return (
        <>
            <h1>Agendly</h1>

            <CardsAgendly
    usuarios={dados.usuarios}
    premium={dados.premium}
    suporte={dados.suporte}
/>
        </>
    );
}

export default Agendly