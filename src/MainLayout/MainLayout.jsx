
import { useState } from "react";
import Header from "../Components/header";
import Sidebar from "../Components/sidebar";


function MainLayout({ children }) {
    const [sidebarAberta, setSidebarAberta] = useState(true);
  return (
    <>
      <Header 
      toggleSidebar={() => setSidebarAberta(!sidebarAberta)}
/>
      <div style={styles.layout}>
        <Sidebar aberta={!sidebarAberta}/>

        <main style={styles.content}>
          {children}
        </main>
      </div>
    </>
  );
}

const styles = {
  layout: {
    display: "flex",
    height: "100%", // altura da tela menos o header
  },

  content: {
    flex: 1,
    padding: "20px",
    overflow: "auto",
    background: "linear-gradient(135deg, #ffffff 0%, #707276ff 100%)",
  },
};

export default MainLayout

//aqui colocamos o sidebar e header, assim eles serao renderizados em toda a pagina ja q importamos o mainlayout no app.jsx