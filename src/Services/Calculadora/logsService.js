import { supabase } from "../../lb/supabase";

//funcao registrar acessos
export async function registrarAcesso(pagina) {
  try {
    await supabase.from("acessos").insert({
      pagina,
      navegador: navigator.userAgent,
    });
  } catch (error) {
    console.error("Erro ao registrar acesso:", error);
  }
}
// funcao buscar acessosMes
export async function buscarAcessosMes() {

  const inicioMes = new Date();

  inicioMes.setDate(1);
  inicioMes.setHours(0,0,0,0);

  const { count, error } = await supabase
    .from("acessos")
    .select("*", { count: "exact", head: true })
    .eq("pagina", "calculadora")
    .gte("created_at", inicioMes.toISOString());
    
  if(error){
    console.error(error);
    return 0;
  }

  return count;
}