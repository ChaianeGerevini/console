import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../../lb/firebase";

export async function buscarMetricasAgendly() {
  const usuarios = await getDocs(collection(db, "usuarios"));
  const suporte = await getDocs(collection(db, "suporte"));

  const premium = await getDocs(
    query(
      collection(db, "usuarios"),
      where("plano", "==", "premium")
    )
  );

  return {
    usuarios: usuarios.size,
    premium: premium.size,
    suporte: suporte.size,
  };
}