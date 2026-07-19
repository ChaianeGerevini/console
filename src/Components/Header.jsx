
function Header ({toggleSidebar}){

    return (
     <header style={styles.header}>

     <button style={styles.button} onClick={toggleSidebar}>
        ☰
      </button>
        <h1>Console</h1>

        </header>

    );
    
}

const styles = {
    //Topo
    header: {
    display: "flex",
    color: "white",
    background: "linear-gradient(135deg, #ffffff 0%, #707276ff 100%)",
    textAlign: "center",
    justifyContent: "center",
    padding: "10px 20px",
    margin: 0,

},

//botao de abrir nav
button: {
    backgroundColor: "white",
    display: "inline-block",
    position: "absolute",
    left: 15,
    width: "50px",
    height: "50px",
    borderRadius: "30px",
}
    
};

export default Header;