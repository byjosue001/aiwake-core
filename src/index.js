import { analyzeThought } from './services/brain.js';

console.log('--- AIwake System Initialized ---');

// Simulamos una entrada del usuario
const userPrompt =
  'Me siento muy estresado y tengo que hacer muchas cosas hoy.';

console.log(`Usuario dice: "${userPrompt}"`);

// El Cerebro procesa
const result = analyzeThought(userPrompt);

// El sistema responde
console.log('--- Análisis de Conciencia ---');
console.log(`Estado Detectado: ${result.state}`);
console.log(`Sugerencia: ${result.suggestion}`);
