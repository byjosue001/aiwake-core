/**
 * index.js - El Orquestador de Conciencia
 * Este es el punto de entrada de AIwake. Conecta la interfaz humana
 * con la lógica de procesamiento y resiliencia.
 */

import { loadJSON } from './utils/fileHandler.js';
import { analyzeMoment } from './services/brain.js';
import { startInteractiveSession } from './interface/terminal.js';

const run = async () => {
  // 1. CARGA DE IDENTIDAD (El Personaje)
  // Necesitamos saber quién es el Observador para que el espejo sea personal.
  const avatar = await loadJSON('./src/data/avatar.json');

  if (!avatar) {
    console.error(
      'Error: No se pudo cargar el perfil de usuario. Revisa src/data/avatar.json'
    );
    return;
  }

  try {
    // 2. INICIO DE LA EXPERIENCIA (El Sentir)
    // Aquí es donde el programa se detiene y abre el espacio para el usuario.
    const currentMoment = await startInteractiveSession(avatar.name);

    console.log(
      '\n[Sistema]: Sintonizando el espejo con tu estado actual...\n'
    );

    // 3. PROCESAMIENTO (El Reflejo)
    // Enviamos el 'momento' recién capturado y el contexto del 'avatar'.
    const reflection = await analyzeMoment(currentMoment, avatar);

    // 4. ENTREGA DE LA SALIDA (La Desidentificación)
    console.log('===========================================');
    console.log(`🪞 REFLEJO PARA EL OBSERVADOR:`);
    console.log('===========================================');
    console.log(`\n${reflection.mirrorReflection}\n`);
    console.log('===========================================');

    // Información técnica discreta para el desarrollo (DevOps mode)
    if (reflection.source || reflection.technicalMeta) {
      console.log(
        `\n[Metadata]: Fuente: ${reflection.source} | Estado: ${reflection.technicalMeta?.state}`
      );
    }
  } catch (error) {
    // Resiliencia de última instancia
    console.error('\n[!] Se detectó una interferencia en la sesión:');
    console.error(`Detalle: ${error.message}`);
    console.log('Intenta centrar tu atención y reiniciar la sesión.\n');
  }
};

// Arrancamos el motor
run();
