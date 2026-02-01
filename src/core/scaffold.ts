import { promises as fs } from 'fs';
import { resolve } from 'path';
import { logger } from '../utils/logger.js';

interface ScaffoldOptions {
  force?: boolean;
}

const DIRECTORIES = [
  '.spec/requirements',
  '.spec/architecture',
  '.spec/workflows',
  'templates/full-stack',
  'templates/backend-api',
  'templates/frontend-spa',
  'src/commands',
  'src/core',
  'src/hooks',
  'src/utils',
  'config/schemas',
  'storage/cache',
  'tests'
];

export async function createDirectoryStructure(options: ScaffoldOptions): Promise<void> {
  const rootDir = process.cwd();
  
  for (const dir of DIRECTORIES) {
    const fullPath = resolve(rootDir, dir);
    
    try {
      await fs.mkdir(fullPath, { recursive: true });
      logger.debug(`Created directory: ${dir}`);
    } catch (error) {
      if (!options.force) {
        throw new Error(`Failed to create directory ${dir}: ${error}`);
      }
    }
  }
  
  // Create initial files
  await createInitialFiles(rootDir);
}

async function createInitialFiles(rootDir: string): Promise<void> {
  // Create .gitignore
  const gitignoreContent = `node_modules/
bin/
*.log
.env
storage/projects.json
storage/cache/
`;
  
  await fs.writeFile(resolve(rootDir, '.gitignore'), gitignoreContent);
  
  // Create storage/projects.json template
  const projectsContent = JSON.stringify({ projects: [] }, null, 2);
  await fs.writeFile(resolve(rootDir, 'storage/projects.json'), projectsContent);
  
  logger.debug('Created initial configuration files');
}