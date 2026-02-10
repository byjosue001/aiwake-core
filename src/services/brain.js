// src/services/brain.js
import { buildSystemicPrompt } from './promptFactory.js';
import { fetchExternalReflection } from './externalAiService.js';
import { strategies } from './responseStrategies.js'; // Traemos las estrategias locales

export const analyzeMoment = async (moment, avatar) => {
  const { content, metadata } = moment;

  // 1. Lógica Local (Sigue siendo el Director)
  let stateKey =
    metadata.density >= 8 && metadata.attachmentScore >= 8
      ? 'DISCONNECTED'
      : 'SOCRATIC';
  if (metadata.energyLevel < 4) stateKey = 'GENTLE';

  const fullMetadata = { ...metadata, state: stateKey };
  const finalPrompt = buildSystemicPrompt(content, fullMetadata, avatar);

  // 2. INTENTO DE CONEXIÓN CON RESILIENCIA
  try {
    console.log(
      `[Sistema]: Intentando conexión externa para estado ${stateKey}...`
    );

    // Aquí es donde puede fallar (ej. timeout o API caída)
    const response = await fetchExternalReflection(finalPrompt);

    return {
      mirrorReflection: response.aiResponse,
      source: 'External_LLM',
      technicalMeta: { state: stateKey },
    };
  } catch (error) {
    // 3. EL PLAN B (Fallback Strategy)
    console.error('!!! Alerta de Conexión: La IA externa no responde.');
    console.log('[Sistema]: Activando Sabiduría Local (Safe Mode)...');

    // Usamos nuestra lógica local que ya teníamos en responseStrategies.js
    const localBackup = strategies[stateKey](avatar);

    return {
      mirrorReflection: `[SABIDURÍA LOCAL]: ${localBackup}`,
      source: 'Local_Resilience',
      technicalMeta: { state: stateKey, error: error.message },
    };
  }
};
