import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../lb/firebase";

export default function Login() {

  async function entrar() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={entrar}>
        Entrar com Google
      </button>
    </div>
  );
}