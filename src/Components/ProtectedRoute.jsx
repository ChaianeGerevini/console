import { useEffect, useState } from "react";
import { auth } from "../lb/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "../pages/Login/login";

const EMAIL_ADMIN = "chaianogerevini@gmail.com";

export default function ProtectedRoute({ children }) {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    return onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });
  }, []);

  if (user === undefined) {
    return <h2>Carregando...</h2>;
  }

  if (!user) {
    return <Login />;
  }

  if (user.email !== EMAIL_ADMIN) {
    return <h2>Acesso não autorizado.</h2>;
  }

  return children;
}