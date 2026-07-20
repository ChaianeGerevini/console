import { atualizarStatus } from "../../Services/MelhoriasServices";
import "../../Components/Cards/MelhoriaCard.css";


function MelhoriaCard({ item, atualizar }) {


async function concluir() {

  const novoStatus =
    item.status === "Concluído"
      ? "Pendente"
      : "Concluído";


  await atualizarStatus(
    item.id,
    novoStatus
  );


  atualizar();
}


return (

<div
  className={
    item.status === "Concluído"
      ? "melhoriaCard concluido"
      : "melhoriaCard"
  }

  onClick={concluir}
>


  <div className="checkBox">
    {item.status === "Concluído" ? "✓" : ""}
  </div>


  <span>
    {item.descricao}
  </span>


</div>

);

}


export default MelhoriaCard;