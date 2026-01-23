/**
 * Brain Service - Versión 0.1
 * Objetivo: Clasificar la "Densidad Mental" del input del usuario.
 */

const analyzeThought = (input) => {
  // 1. Normalización: Pasamos todo a minúsculas para facilitar la búsqueda
  const text = input.toLowerCase();

  // 2. Definición de Patrones (Nuestra "Base de Conocimiento" inicial)
  const patterns = {
    highDensity: ['estrés', 'ansiedad', 'apurado', 'tengo que', 'muchas cosas'],
    lowDensity: ['paz', 'claridad', 'observo', 'presente', 'fluir'],
  };

  // 3. Lógica de Clasificación
  // Buscamos si el texto incluye alguna palabra de nuestros patrones
  const isHighDensity = patterns.highDensity.some((word) =>
    text.includes(word)
  );
  const isLowDensity = patterns.lowDensity.some((word) => text.includes(word));

  // 4. Retorno de Estado (El Espejo)
  if (isHighDensity) {
    return {
      state: 'Alta Densidad',
      suggestion:
        'Recomendación: Pausa de 2 minutos. Respira antes de continuar.',
    };
  }

  if (isLowDensity) {
    return {
      state: 'Baja Densidad (Claridad)',
      suggestion:
        'Estado óptimo. Momento ideal para la autoobservación profunda.',
    };
  }

  return {
    state: 'Neutral',
    suggestion: 'Continúa observando el flujo de tus pensamientos.',
  };
};

// Exportamos la función para que el "Director de Orquesta" (index.js) la use
export { analyzeThought };
