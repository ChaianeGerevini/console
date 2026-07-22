import { supabase } from "../../../lb/supabase";
import "../../Cards/Calculadora/ChamadoCard.css";
import { useState } from "react";

function ChamadoCard ({ chamado }) {
    const [statusChamado, setStatusChamado] = useState (chamado.status);

  async function mudarStatus(event) {
    const novoStatus = event.target.value;

    setStatusChamado(novoStatus);

    const { error } = await supabase
    .from("chamados")
    .update({ status: novoStatus })
    .eq("id", chamado.id);

    if (error) {
        console.log(error);
        alert("Erro ao atualizar status");
        return;
    }
    
    console.log("status atualizado");
    
  }

    return (
        <div className="chamadoCard">
            <div className="topo">
                <h3>{chamado.tipo}</h3>
              
             <select value={statusChamado} onChange={mudarStatus}>
                <option value="Aberto">Aberto</option>
               <option value="Fechado">Fechado</option>

                </select>

            </div>

            <p>{chamado.descricao}</p>

            <div className="rodape">
                {new Date (chamado.criado_em).toLocaleString("pt-BR")} {""}
                {chamado.nome}
            </div>


        </div>

    );
}

export default ChamadoCard;