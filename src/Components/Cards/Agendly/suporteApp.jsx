import "../../Cards/Agendly/suporteApp.css";
import { useState } from "react";
import { db } from "../../../lb/firebase";
import { doc, updateDoc } from "firebase/firestore";


function suporteApp ({ chamado }) {
    const [statusChamado, setStatusChamado] = useState (chamado.status);

  async function mudarStatus(event) {
    const novoStatus = event.target.value;

     try {
      const chamadoRef = doc(db, "chamados", chamado.id);

      await updateDoc(chamadoRef, {
        status: novoStatus,
      });

      console.log("Status atualizado");

    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar status");
      setStatusChamado(chamado.status);
    }
  }

  return (
   <div className="chamadoCard">
  <div className="topo">
    <h3>{chamado.emailConta}</h3>

    <select value={statusChamado} onChange={mudarStatus}>
      <option value="pendente">Pendente</option>
      <option value="respondido">Respondido</option>
      <option value="fechado">Fechado</option>
    </select>
  </div>

  <p>{chamado.mensagem}</p>

  <div className="rodape">
    {chamado.dataCriacao?.toDate().toLocaleString("pt-BR")}
    {" • "}
    {chamado.contatoRetorno}
  </div>
    </div>
  );
}

export default suporteApp;