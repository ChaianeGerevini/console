import { supabase } from "../../lb/supabase";

export async function buscarSuporte() {

  const { data, error } = await supabase
    .from("chamados")
    .select("*")
    .order("criado_em", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
