/**
 * responseStrategies.js
 * Catálogo de estrategias de respuesta (Strategy Pattern).
 * Cada función es una "herramienta" de conciencia distinta.
 */

export const strategies = {
  // Estrategia para el "Estado de Desconexión"
  // Objetivo: Choque de realidad y desidentificación inmediata.
  DISCONNECTED: (avatar) => {
    return `Alerta de Desconexión: Josué, la mente ha tomado el control total. Estás viendo el mapa, no el territorio. Tu rol de ${avatar.roles[0]} es solo una etiqueta en este momento. Respira y observa el pensamiento como un objeto ajeno.`;
  },

  // Estrategia Socrática
  // Objetivo: Generar duda en la mente neurótica.
  SOCRATIC: () => {
    return '¿Quién serías en este preciso instante si no fueras capaz de tener ese pensamiento?';
  },

  // Estrategia Compasiva
  // Objetivo: Bajar la guardia del ego cuando hay poca energía.
  GENTLE: () => {
    return 'La densidad es alta, pero tu energía es baja. No es momento de resolver, es momento de permitirte ser. Solo observa el cansancio sin juzgarlo.';
  },

  // Estrategia por defecto
  DEFAULT: () => 'El espejo está en silencio. Sigue observando.',
};
