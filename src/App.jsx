import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./pages/Dashboard/dashboard";
import MainLayout from "./MainLayout/MainLayout";
import Agendly from "./pages/Agendly/agendly";
import CalculadoraExcel from "./pages/Calculadora-Excel/calculadora-excel";
import Salao from "./pages/Salao/salao";
import LojaVinhos from "./pages/Loja-Vinhos/loja-vinhos";
import LandingPages from "./pages/Landing-Pages/landing-pages";


function App() {
  return (
         
      <Routes>
      <Route
  path="/"
  element={
    <ProtectedRoute>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </ProtectedRoute>
  }
/>
      <Route 
      path="/Agendly"
      element={ 
        <MainLayout>
          <Agendly />
        </MainLayout>
      }
      />
      <Route 
      path="/excel"
      element={ 
        <MainLayout>
          <CalculadoraExcel />
        </MainLayout>
      }
      />
      <Route 
      path="/salao"
      element={ 
        <MainLayout>
          <Salao />
        </MainLayout>
      }
      />
      <Route 
      path="/loja"
      element={ 
        <MainLayout>
          <LojaVinhos />
        </MainLayout>
      }
      />
      <Route 
      path="/landing"
      element={ 
        <MainLayout>
          <LandingPages />
        </MainLayout>
      }
      />
      </Routes>
  
  );
}

export default App;

// agora o React executa a function App() e tudo que estiver nela
//exportamos no arquivo pra que o app possa importar e acessar
//depois na function ele informa em qual url deve aparecer o elemento (arquivo) em questao
