/**
 * Simulación de un servicio de IA externo (como OpenAI o Anthropic).
 * Aquí aplicamos Asincronía pura.
 */

/**
 * externalAiService.js - Simulador de Red
 */
export const fetchExternalReflection = async (prompt) => {
  // 1. Usamos el prompt aunque sea en un console.log para que el linter esté feliz
  console.log(`[Network]: Enviando datos de longitud: ${prompt.length}`);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  // --- ÁREA DE PRUEBAS DE FALLO ---
  // Para probar la resiliencia (Safe Mode), descomenta la línea de abajo.
  //throw new Error('API_OVERLOADED');
  // --------------------------------

  // Si el throw está comentado, este código ya es alcanzable
  return {
    aiResponse: '[IA]: El reflejo es nítido. Estás observando el mecanismo.',
    status: 200,
  };
};
