import { loadJSON } from './utils/fileHandler.js';
import { analyzeMoment } from './services/brain.js';

// 1. Creamos la Memoria de Sesión (Un simple Array vacío)
// Usamos 'let' porque la lista irá creciendo
let sessionHistory = [];

const run = async () => {
  const avatar = await loadJSON('./src/data/avatar.json');
  if (!avatar) return;

  console.log(`--- AIwake Sesión para ${avatar.name} ---`);

  // 2. Simulamos una interacción (Input del usuario)
  const currentInput = {
    content: 'Tengo miedo de no poder con tanto trabajo y responsabilidades.',
    metadata: {
      energyLevel: 3,
      density: 3, // Alta carga mental
      attachmentScore: 9, // Nivel de identificación con el pensamiento
    },
    timestamp: new Date().toISOString(),
  };

  // 3. Procesamos el momento enviando TAMBIÉN el avatar
  const reflection = analyzeMoment(currentInput, avatar);

  // 4. GUARDAR EN MEMORIA: El método .push() añade el objeto al final de la lista
  sessionHistory.push({
    input: currentInput,
    output: reflection,
  });

  // Mostramos el resultado
  console.log(`> Espejo: ${reflection.stateAnalysis}`);
  console.log(
    `> Memoria: Tienes ${sessionHistory.length} momentos en esta sesión.`
  );
};

run();
