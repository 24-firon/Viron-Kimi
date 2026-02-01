import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { createDirectoryStructure } from '../core/scaffold.js';
import { logger } from '../utils/logger.js';

export const initCommand = new Command('init')
  .description('Initialize a new development environment')
  .option('-f, --force', 'Force initialization even if directory is not empty')
  .action(async (options) => {
    const spinner = ora('Initializing development environment...').start();
    
    try {
      logger.info('Starting initialization...');
      
      await createDirectoryStructure({
        force: options.force
      });
      
      spinner.succeed(chalk.green('Development environment initialized successfully!'));
      
      console.log(chalk.cyan('\nNext steps:'));
      console.log(chalk.white('  1. Run ') + chalk.yellow('kimi create <template> <name>') + chalk.white(' to create a new project'));
      console.log(chalk.white('  2. Or run ') + chalk.yellow('kimi workflow <name>') + chalk.white(' to execute a workflow'));
      
    } catch (error) {
      spinner.fail(chalk.red('Initialization failed'));
      logger.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });