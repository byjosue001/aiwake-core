import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

// Cargar las variables de entorno (busca el archivo .env)
dotenv.config();

// Verificación de seguridad: ¿Existe la llave?
if (!process.env.GEMINI_API_KEY) {
  console.error(
    '❌ ERROR CRÍTICO: No se encontró la GEMINI_API_KEY en el archivo .env'
  );
  process.exit(1); // Detiene la app si no hay llave
}

// Inicializar el cliente de Google
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Configuración del Modelo (Usamos Gemini 1.5 Flash por velocidad)
export const model = genAI.getGenerativeModel({
  // Mantén el modelo que te funcionó (si es 'gemini-1.5-flash' o el que usaste)
  model: 'gemini-2.5-flash',

  generationConfig: {
    // 1. SOLUCIÓN AL CORTE: Aumentamos de 500 a 2000
    // Esto le da espacio para terminar la frase y desarrollar la idea.
    maxOutputTokens: 2000,

    // 2. SOLUCIÓN A LA MEDIOCRIDAD: Subimos la temperatura
    // 0.7 es seguro/conservador.
    // 0.9 permite conexiones más abstractas y "filosóficas" (ideal para AIwake).
    temperature: 0.9,

    // Opcional: TopP y TopK ayudan a variar el vocabulario
    topP: 0.95,
    topK: 40,
  },
});
