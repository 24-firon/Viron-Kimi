import { Command, Argument } from 'commander';
import chalk from 'chalk';
import { logger } from '../utils/logger.js';

export const createCommand = new Command('create')
  .description('Create a new project from a template')
  .addArgument(new Argument('<template>', 'Template to use').choices(['full-stack', 'backend-api', 'frontend-spa']))
  .addArgument(new Argument('<name>', 'Project name'))
  .option('-d, --directory <path>', 'Target directory', '.')
  .action(async (template, name, options) => {
    logger.info(`Creating project "${name}" from template "${template}"...`);
    
    try {
      // Template generation logic will be implemented here
      console.log(chalk.green(`✓ Project "${name}" created successfully!`));
      console.log(chalk.cyan(`\nNext steps:`));
      console.log(chalk.white(`  cd ${options.directory}/${name}`));
      console.log(chalk.white(`  npm install`));
      console.log(chalk.white(`  npm run dev`));
    } catch (error) {
      logger.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });