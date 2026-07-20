import { supabase } from "../lb/supabase";


export async function buscarMelhorias() {
  const { data, error } = await supabase
    .from("melhorias")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}


export async function criarMelhoria(descricao) {
  const { error } = await supabase
    .from("melhorias")
    .insert([
      {
        descricao,
        status: "Pendente"
      }
    ]);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}

export async function atualizarStatus(id, status) {

  const { error } = await supabase
    .from("melhorias")
    .update({
      status
    })
    .eq("id", id);


  if(error){
    console.error(error);
    return false;
  }

  return true;
}