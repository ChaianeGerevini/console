import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lb/firebase";

export async function buscarChamados() {
  try {
        const snapshot = await getDocs(collection(db, "suporte"));
console.log("Quantidade:", snapshot.size);

    snapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}