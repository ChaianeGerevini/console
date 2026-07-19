
function Sidebar({aberta}) {
    

    return (
        <aside style={{...styles.sidebar, width: aberta ? "170px" : "50px",
      }}>

        <nav style={styles.nav}>
        <a style={styles.menu} href="/">
          📊 {aberta && "Dashboard"}
        </a>

        <a style={styles.menu} href="/agendly">
          📅 {aberta && "Agendly"}
        </a>

        <a style={styles.menu} href="/excel">
          🧮 {aberta && "Calculadora Excel"}
        </a>

        <a style={styles.menu} href="/salao">
          💅 {aberta && "Salão de beleza"}
        </a>

        <a style={styles.menu} href="/loja">
          🍷 {aberta && "Loja de vinhos"}
        </a>

        <a style={styles.menu} href="/landing">
          🌐 {aberta && "Landing Pages"}
        </a>
      </nav>
        </aside>
    );

};

const styles = {
    sidebar: {
    height: "100%",
    backgroundColor: "#5B6472",
    color: "white",
    padding: "15px",
  
    

  },
    nav: {
    display: "flex",
    height: "100vw",
    flexDirection: "column",
    gap: "10px",
    
  },

    menu: {
        textDecoration: "none",
        color: "white",
        fontFamily: "Gill Sans, sans-serif",
        textAlign: "center",
        display: "flex",
        padding: 15,

    }


}

export default Sidebar