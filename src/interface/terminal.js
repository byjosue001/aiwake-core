import inquirer from 'inquirer';
import chalk from 'chalk';

export const startInteractiveSession = async (avatarName) => {
  console.clear();
  // Un inicio más humano y estético
  console.log(chalk.cyan.bold(`\n🌙 [ AIwake ]`));
  console.log(chalk.dim(`Sesión de observación para: ${avatarName}`));
  console.log(chalk.dim('-------------------------------------------\n'));

  const answers = await inquirer.prompt([
    // 1. Energía con colores de estado
    {
      type: 'rawlist',
      name: 'energyLevel',
      message: '¿Cómo se siente tu motor biológico en este instante?',
      choices: [
        { name: chalk.red(' [■         ]  Agotado / Sin reservas'), value: 2 },
        { name: chalk.yellow(' [■■■■■     ]  Bajo / Modo ahorro'), value: 4 },
        { name: chalk.blue(' [■■■■■■■■  ]  Estable / Operativo'), value: 7 },
        { name: chalk.green(' [■■■■■■■■■■]  Pleno / Flujo vital'), value: 10 },
      ],
    },
    // 2. Clima mental con iconos claros
    {
      type: 'rawlist',
      name: 'density',
      message: 'Si tu mente fuera un paisaje ahora mismo, ¿qué verías?',
      choices: [
        {
          name: `✨ ${chalk.white('Claridad total / Espacio abierto')}`,
          value: 2,
        },
        { name: `☁️  ${chalk.gray('Nublado / Ruido persistente')}`, value: 6 },
        {
          name: `🌪️  ${chalk.magenta('Tormenta / Caos identificado')}`,
          value: 9,
        },
      ],
    },
  ]);

  // --- EL MOMENTO DEL UMBRAL ---
  // Hacemos una pausa visual para cambiar el "chip" del usuario
  console.log(`\n${chalk.italic.cyan('... preparando el espejo ...')}\n`);

  console.log(chalk.bgWhite.black.bold(' ESPACIO DE DESAHOGO '));
  console.log(
    chalk.white(`
No busques ser coherente, Josué. No busques tener razón. 
Este es tu rincón de silencio, un espacio seguro y sin juicio.
Simplemente deja que las palabras caigan, con su peso y su verdad actual.
¿Qué está intentando decirte tu mente ahora mismo?
  `)
  );

  const desahogo = await inquirer.prompt([
    {
      type: 'input',
      name: 'thoughtContent',
      message: chalk.cyan('->'),
      validate: (input) =>
        input.length > 0 ||
        'Incluso el silencio tiene palabras, intenta soltar al menos una.',
    },
    {
      type: 'rawlist',
      name: 'attachment',
      message:
        '\nObserva lo que acabas de escribir. ¿Qué tanto crees que "TÚ" eres ese pensamiento?',
      choices: [
        {
          name: chalk.blue(
            '1 - Es solo un objeto mental que observo desde fuera'
          ),
          value: 1,
        },
        {
          name: chalk.yellow(
            '5 - Siento que me arrastra, me cuesta no creerlo'
          ),
          value: 5,
        },
        {
          name: chalk.red(
            '10 - Identificación total: Yo soy este pensamiento ahora'
          ),
          value: 10,
        },
      ],
    },
  ]);

  return {
    content: desahogo.thoughtContent,
    metadata: {
      energyLevel: answers.energyLevel,
      density: answers.density,
      attachmentScore: desahogo.attachment,
      timestamp: new Date().toISOString(),
    },
  };
};
