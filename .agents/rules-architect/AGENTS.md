# AGENTS.md - Architect Mode

This file provides guidance to agents when architecting in this repository.

## Architecture Principles

- **Separation of Concerns**: CLI tool (`src/`) vs generated apps (`app/`)
- **Template-Driven**: All project scaffolding via `templates/` directory
- **Specification-First**: Requirements in `.spec/` drive implementation
- **Hook System**: Extensible via hooks in `src/hooks/`

## Core Components

```
src/
├── commands/       # CLI interface layer
├── core/          # Business logic engine
│   ├── TemplateEngine     # EJS/Handlebars processing
│   ├── WorkflowOrchestrator  # Workflow execution
│   └── SpecManager        # Specification management
├── hooks/         # Extension points
└── utils/         # Cross-cutting utilities
```

## Configuration Strategy

- YAML files in `config/` with JSON schema validation
- Environment-specific overrides supported
- Storage abstraction: JSON for dev, SQLite for production

## Template System Design

- Templates are self-contained in `templates/<name>/`
- Each template has `template.json` manifest defining variables and hooks
- Post-generation hooks for custom setup (npm install, migrations, etc.)

## Design Patterns

### Command Pattern for CLI

Each command is self-contained with clear responsibilities:
```typescript
// commands/init.ts
export const initCommand = new Command('init')
  .description('Initialize environment')
  .option('-f, --force', 'Force initialization')
  .action(async (options) => {
    // Command logic here
  });
```

Benefits:
- Easy to test in isolation
- Simple to add new commands
- Clear separation of concerns

### Strategy Pattern for Templates

```typescript
interface TemplateStrategy {
  name: string;
  validate(): Promise<boolean>;
  generate(context: GenerationContext): Promise<void>;
}

class FullStackTemplate implements TemplateStrategy {
  name = 'full-stack';
  
  async validate(): Promise<boolean> {
    // Check prerequisites
    return true;
  }
  
  async generate(context: GenerationContext): Promise<void> {
    // Generate React + Node.js + PostgreSQL setup
  }
}
```

### Plugin Architecture for Hooks

```typescript
interface Hook {
  name: string;
  execute(context: HookContext): Promise<void>;
}

// Example hooks
const npmInstallHook: Hook = {
  name: 'npm-install',
  async execute({ projectPath }) {
    await execa('npm', ['install'], { cwd: projectPath });
  }
};

const gitInitHook: Hook = {
  name: 'git-init',
  async execute({ projectPath }) {
    await execa('git', ['init'], { cwd: projectPath });
  }
};
```

## Architecture Decision Records (ADRs)

**ADR-001: Use Commander.js over OCLIF**
- Status: Accepted
- Context: Need lightweight CLI framework
- Decision: Use Commander.js for simplicity
- Consequences: Less boilerplate, easier to customize

**ADR-002: TypeScript with strict mode**
- Status: Accepted
- Context: Need type safety for maintainability
- Decision: Enable all strict TypeScript options
- Consequences: More upfront effort, fewer runtime errors

**ADR-003: EJS for templating**
- Status: Accepted
- Context: Need logic in templates (conditionals, loops)
- Decision: Use EJS over Handlebars
- Consequences: More powerful but requires careful escaping

## Scalability Considerations

### Horizontal Scaling of Templates

```
templates/
├── full-stack/
│   ├── variants/
│   │   ├── with-auth/      # Full-stack + authentication
│   │   ├── with-docker/    # Full-stack + Docker setup
│   │   └── with-graphql/   # Full-stack + GraphQL API
│   └── base/               # Base full-stack template
```

### Configuration Hierarchy

```typescript
// Priority (highest to lowest):
// 1. CLI arguments
// 2. Environment variables
// 3. Project config (./kimi.config.yaml)
// 4. User config (~/.kimi/config.yaml)
// 5. Default values

const config = mergeConfig([
  defaultConfig,
  userConfig,
  projectConfig,
  envConfig,
  cliArgs
]);
```

### Extension Points

**For custom templates:**
```typescript
// ~/.kimi/templates/my-template/template.json
{
  "extends": "full-stack",
  "variables": [
    { "name": "customFeature", "default": true }
  ],
  "hooks": ["custom-setup"]
}
```

**For custom commands:**
```typescript
// ~/.kimi/commands/my-command.ts
export default {
  name: 'deploy',
  execute: async (args) => {
    // Custom deployment logic
  }
};
```

## Testing Architecture

### Test Pyramid
```
        /\
       /  \     E2E Tests (CLI integration)
      /____\
     /      \   Integration Tests (Template generation)
    /________\
   /          \ Unit Tests (Individual functions)
  /____________\
```

### Test Data Strategy

```typescript
// Use in-memory file system for tests
import { memfs } from 'memfs';

const { fs } = memfs({
  '/mock/templates/full-stack': {
    'template.json': JSON.stringify({ name: 'full-stack' }),
    'package.json.ejs': '{"name": "<%= name %>"}'
  }
});

// Inject into template engine
const engine = new TemplateEngine({ fs });
```

## Security Considerations

### Template Safety
```typescript
// Sanitize template variables
function sanitizeVariable(value: unknown): string {
  if (typeof value !== 'string') return String(value);
  // Prevent path traversal
  return value.replace(/[\.\.\/\\]/g, '');
}

// Validate template paths
function validateTemplatePath(templatePath: string): boolean {
  const resolved = path.resolve(templatePath);
  const templatesDir = path.resolve(process.cwd(), 'templates');
  return resolved.startsWith(templatesDir);
}
```

### Hook Isolation
```typescript
// Run hooks in sandbox
import { VM } from 'vm2';

async function runHookSafely(hookCode: string, context: HookContext) {
  const vm = new VM({
    timeout: 5000,      // 5 second timeout
    sandbox: { context }
  });
  
  return vm.run(hookCode);
}
```
