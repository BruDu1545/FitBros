import { supabase } from "./lib/supabase";

export default async function loginAuth(login, pass) {
  const userLogin = String(login ?? "").trim();
  const userPass = String(pass ?? "").trim();
  if (!userLogin || !userPass)
    return { success: false, message: "Parâmetros inválidos" };

  const { data, error } = await supabase
    .from("users")
    .select("id, name")
    .eq("login", userLogin)
    .eq("password", userPass)
    .maybeSingle();

  try {
    const { data, error } = await supabase
      .from("users")
      .select("id, name")
      .eq("login", userLogin) // use .ilike(...) se quiser case-insensitive
      .eq("password", userPass) // senha em texto puro é só para demo!
      .maybeSingle();

    if (error) return { success: false, message: error.message };

    if (!data) return { success: false, message: "Usuário não encontrado" };

    await AsyncStorage.setItem(
      "@user",
      JSON.stringify({ id: data.id, name: data.name })
    );
    
    return { success: true, message: "Login realizado com sucesso!" };
  } catch (e) {
    return { success: false, message: "Falha inesperada no login" };
  }
}
