import { useState } from "react";
import { criarMelhoria } from "../../Services/MelhoriasServices";
import "../../Components/Cards/MelhoriasCard.css";
function MelhoriasCards ({atualizar}) {

const [descricao, setdescricao] = useState("")

async function enviar () {
    if (!descricao.trim()) return;

    await criarMelhoria(descricao);

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