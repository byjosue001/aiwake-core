// src/services/brain.js

export const analyzeMoment = (moment, avatar) => {
  const { content, metadata } = moment;
  // Añadimos 'attachmentScore' a la desestructuración
  const { density, attachmentScore = 5 } = metadata;

  let reflection = '';

  // Lógica de desidentificación
  if (attachmentScore > 8) {
    reflection = `Estás muy identificado con este pensamiento. Recuerda, Josué: eres quien observa, no lo observado.`;
  } else if (content.toLowerCase().includes('soporte') && density > 7) {
    reflection = `El rol de ${avatar.roles[0]} está pesando. Respira.`;
  } else {
    reflection = 'El espejo muestra claridad.';
  }

  return {
    stateAnalysis: reflection,
    timestamp: new Date().toISOString(),
  };
};
