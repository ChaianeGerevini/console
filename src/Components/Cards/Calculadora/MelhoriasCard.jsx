import { useState } from "react";
import { criarMelhoria } from "../../../Services/MelhoriasServices";
import "../../Cards/Calculadora/MelhoriaCard.css";


function MelhoriasCards ({atualizar, sistema}) {

const [descricao, setdescricao] = useState("")

async function enviar () {
    if (!descricao.trim()) return;

    await criarMelhoria(descricao, sistema);
    setdescricao("")
    atualizar();
}


    return(
    <div className="melhoriaFormulario">

         <input
        type="text"
        placeholder="Adicionar melhoria"
        value={descricao}
        onChange={(e) => setdescricao(e.target.value)}
      />

        <button onClick={enviar}>enviar</button>
</div>
    );
}

export default MelhoriasCards