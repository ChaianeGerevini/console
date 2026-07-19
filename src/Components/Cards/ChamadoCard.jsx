import "../../Components/Cards/ChamadoCard.css";

function ChamadoCard ({ chamado }) {

    return (
        <div className="chamadoCard">
            <div className="topo">
                <h3>{chamado.tipo}</h3>

                <span>{chamado.status}</span>
            </div>

            <p>{chamado.descricao}</p>

            <div className="rodape">
                {new Date (chamado.criado_em).toLocaleString("pt-BR")}
            </div>


        </div>

    );
}

export default ChamadoCard;