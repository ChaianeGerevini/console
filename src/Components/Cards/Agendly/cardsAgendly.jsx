import "../../Cards/Agendly/cardsAgendly.css";

function CardsAgendly({
  usuarios = 0,
  premium = 0,
  suporte = 0,
}) {
    
  return (
    <div className="dashboardCards">

      <div className="dashboardCard">
        <span>Usuários App Agendly</span>
        <h2>{usuarios}</h2>
      </div>

      <div className="dashboardCard">
        <span>Premium App Agendly</span>
        <h2>{premium}</h2>
      </div>

      <div className="dashboardCard">
        <span>Chamados Agendly</span>
        <h2>{suporte}</h2>
      </div>

    </div>
  );
}

export default CardsAgendly;