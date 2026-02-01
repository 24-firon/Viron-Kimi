#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { createCommand } from './commands/create.js';
import { workflowCommand } from './commands/workflow.js';

const program = new Command();

program
  .name('kimi')
  .description('CLI-based development environment for managing full-stack projects')
  .version('0.1.0');

program.addCommand(initCommand);
program.addCommand(createCommand);
program.addCommand(workflowCommand);

if (process.argv.length === 2) {
  program.help();
}

program.parse();