import { supabase } from "../../lb/supabasesalao";

//funcao registrar acessos salao
export async function registrarAcessoSalao(pagina) {
  try {
    await supabase.from("acessos").insert({
      pagina,
      navegador: navigator.userAgent,
    });
  } catch (error) {
    console.error("Erro ao registrar acesso:", error);
  }
}

// funcao buscar acessosMes salao
export async function buscarAcessosMesSalao() {

  const inicioMes = new Date();

  inicioMes.setDate(1);
  inicioMes.setHours(0,0,0,0);

  const { count, error } = await supabase
    .from("acessos")
    .select("*", { count: "exact", head: true })
    .eq("pagina", "Agenda")
    .gte("created_at", inicioMes.toISOString());
    
  if(error){
    console.error(error);
    return 0;
  }

  return count;
}

