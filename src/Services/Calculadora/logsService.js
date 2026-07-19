import { supabase } from "../../lb/supabase";

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
export async function buscarAcessosMes() {

  const inicioMes = new Date();

  inicioMes.setDate(1);
  inicioMes.setHours(0,0,0,0);

  const { count, error } = await supabase
    .from("acessos")
    .select("*", { count: "exact", head: true })
    .gte("criado_em", inicioMes.toISOString());

  if(error){
    console.error(error);
    return 0;
  }

  return count;
}