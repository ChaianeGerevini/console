import { supabase } from "../../../lb/supabasesalao";
import "./ChamadoCardSalao.css";
import { useState } from "react";

function ChamadoCardSalao ({ chamado }) {
      console.log("Renderizando:", chamado);
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
                <option value="Pendente">Aberto</option>
               <option value="Concluido">Fechado</option>

                </select>

            </div>

            <p>{chamado.descricao}</p>

            <div className="rodape">
                {new Date (chamado.created_at).toLocaleString("pt-BR")} {""}
                {chamado.nome}
            </div>


        </div>

    );
}

export default ChamadoCardSalao;