// 1. Importamos herramientas nativas de Node.js
import fs from 'fs/promises'; // La versión asíncrona de File System
import path from 'path'; // Utilidad para manejar rutas de archivos

/**
 * Función para cargar y procesar archivos JSON
 * 'async' indica que esta función no es instantánea, devuelve una "Promesa"
 */
export const loadJSON = async (relativePath) => {
  try {
    // 2. path.resolve: Convierte una ruta relativa (./data) en una ruta absoluta
    // desde la raíz de tu disco (C:/Usuarios/Josue/...). Esto evita errores de "archivo no encontrado".
    const absolutePath = path.resolve(relativePath);

    // 3. fs.readFile: Lee el archivo.
    // 'utf-8' le dice que lo lea como texto humano y no como ceros y unos (binario).
    // 'await' detiene la ejecución de ESTA función hasta que la lectura termine.
    const rawData = await fs.readFile(absolutePath, 'utf-8');

    // 4. JSON.parse: Convierte un STRING (texto) en un OBJECT (JavaScript).
    // Sin esto, no podrías hacer avatar.name, porque sería solo un texto plano.
    return JSON.parse(rawData);
  } catch (error) {
    // 5. Manejo de errores: Si el archivo no existe o el JSON está mal escrito,
    // el programa no "muere", simplemente nos avisa aquí.
    console.error(`Error de sistema en ruta: ${relativePath}`, error);
    return null;
  }
};
