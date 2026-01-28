/**
 * analyzeMoment - Ahora recibe el avatar para dar contexto
 */
export const analyzeMoment = (moment, avatar) => {
  const { content, metadata } = moment;
  const { energyLevel, density } = metadata;

  // 1. Lógica Personalizada usando los datos del Avatar
  // Buscamos si el pensamiento tiene que ver con sus roles (ej. IT Support)
  const isWorkRelated =
    content.toLowerCase().includes('soporte') ||
    content.toLowerCase().includes('trabajo');

  let reflection = '';

  if (isWorkRelated && density > 7) {
    // Usamos datos del avatar para dar una salida con sentido
    reflection = `Josué, recuerda que tu rol de ${avatar.roles[0]} es un medio, no tu fin. Tu valor de "${avatar.coreValues[0]}" es lo que importa aquí.`;
  } else if (energyLevel < 3) {
    reflection = `Nivel de energía bajo detectado. Como corredor (${avatar.roles[2]}), sabes cuándo toca recuperar. Hoy el sistema sugiere descanso.`;
  } else {
    reflection = 'El espejo está claro. Sigue observando.';
  }

  return {
    stateAnalysis: reflection,
    timestamp: new Date().toISOString(),
  };
};
