import { strategies } from './responseStrategies.js';

/**
 * Brain Service - Versión Orquestada
 */
export const analyzeMoment = (moment, avatar) => {
  const { metadata } = moment;
  const { density, attachmentScore } = metadata;

  // 1. DETERMINACIÓN DEL ESTADO (Lógica de Negocio)
  // Aquí definimos cuándo se activa cada "llave"
  let stateKey = 'DEFAULT';

  if (density >= 8 && attachmentScore >= 8) {
    stateKey = 'DISCONNECTED'; // Tu "Estado de Desconexión"
  } else if (density < 5 && attachmentScore < 5) {
    stateKey = 'SOCRATIC';
  } else if (metadata.energyLevel < 4) {
    stateKey = 'GENTLE';
  }

  // 2. EL ORQUESTADOR (Object Mapping)
  // En lugar de un IF, buscamos la función en nuestro catálogo
  // Si por alguna razón la llave no existe, usamos 'DEFAULT'
  const strategyToUse = strategies[stateKey] || strategies.DEFAULT;

  // 3. EJECUCIÓN
  // Ejecutamos la función de la estrategia elegida pasándole los datos necesarios
  const reflection = strategyToUse(avatar);

  return {
    stateDetected: stateKey,
    stateAnalysis: reflection,
    timestamp: new Date().toISOString(),
  };
};
