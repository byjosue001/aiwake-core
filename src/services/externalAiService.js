import { model } from '../config/ai.js';

/**
 * externalAiService.js
 * El puente real hacia la Nube de Google.
 */
// ...
export const fetchExternalReflection = async (prompt) => {
  try {
    // Generar contenido
    const result = await model.generateContent(prompt);

    // IMPORTANTE: Aseguramos que la respuesta esté completa antes de convertirla a texto
    const response = await result.response;
    const text = response.text();

    // Validación de seguridad: Si viene vacío, lanzamos error para que entre el Fallback Local
    if (!text || text.length < 10) {
      throw new Error('Respuesta de IA vacía o incompleta');
    }

    return {
      aiResponse: text,
      status: 200,
      usage: { tokens: response.usageMetadata?.totalTokenCount || 0 },
    };
  } catch (error) {
    console.error('🔥 Error en la API de Gemini:', error.message);
    throw error;
  }
};
