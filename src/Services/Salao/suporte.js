import { supabase } from "../../lb/supabasesalao";

export async function buscarSuporteSalao() {

  const { data, error } = await supabase
    .from("chamados")
    .select("*")

    
  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
