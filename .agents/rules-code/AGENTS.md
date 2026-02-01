# AGENTS.md - Code Mode

This file provides guidance to agents when working with code in this repository.

## Critical Code Patterns

- CLI commands go in `src/commands/` - use Commander.js or OCLIF patterns
- Templates in `templates/` use EJS or Handlebars for variable substitution
- Schema validation in `config/schemas/` validates YAML config files
- `app/` folder is for generated/active applications - do NOT put CLI source there

## Template Development

- Each template must have a `template.json` manifest
- Template variables use `{{variableName}}` syntax
- Template validation tests required in `tests/templates/`

## Project Structure Enforcement

```
src/
├── commands/     # CLI commands (init, create, workflow)
├── core/         # Core logic engine
├── hooks/        # Hook system for extensions
└── utils/        # Shared utilities
```

## Best Practices

### TypeScript Patterns

**Always use explicit return types for public functions:**
```typescript
// Good
export async function createProject(name: string): Promise<Project> {
  // implementation
}

// Bad - implicit return type
export async function createProject(name: string) {
  // implementation
}
```

**Use Zod for runtime validation:**
```typescript
import { z } from 'zod';

const ProjectSchema = z.object({
  name: z.string().min(1),
  template: z.enum(['full-stack', 'backend-api', 'frontend-spa']),
  directory: z.string().optional()
});

export type ProjectInput = z.infer<typeof ProjectSchema>;

// Validate user input
const result = ProjectSchema.safeParse(userInput);
if (!result.success) {
  logger.error('Invalid project configuration');
  process.exit(1);
}
```

### Error Handling

**Always wrap async operations with try-catch:**
```typescript
try {
  await fs.mkdir(projectPath);
  await copyTemplate(templatePath, projectPath);
  await runPostHooks(projectPath);
} catch (error) {
  if (error instanceof Error) {
    logger.error(`Failed to create project: ${error.message}`);
  } else {
    logger.error('Unknown error occurred');
  }
  process.exit(1);
}
```

**Use custom error classes for domain-specific errors:**
```typescript
class TemplateError extends Error {
  constructor(message: string, public templateName: string) {
    super(message);
    this.name = 'TemplateError';
  }
}

throw new TemplateError('Template manifest not found', 'full-stack');
```

### Testing Patterns

**Write tests alongside source files:**
```
src/
├── commands/
│   ├── init.ts
│   └── init.test.ts  # Co-located test
```

**Use descriptive test names:**
```typescript
import { describe, it, expect } from 'vitest';

describe('init command', () => {
  it('should create directory structure when run with --force', async () => {
    // test implementation
  });
  
  it('should fail gracefully when directory is not empty', async () => {
    // test implementation
  });
});
```

### Code Style

**Prefer early returns over nested conditionals:**
```typescript
// Good
function validateInput(input: unknown): boolean {
  if (!input) return false;
  if (typeof input !== 'object') return false;
  if (!('name' in input)) return false;
  return true;
}

// Bad - deeply nested
function validateInput(input: unknown): boolean {
  if (input) {
    if (typeof input === 'object') {
      if ('name' in input) {
        return true;
      }
    }
  }
  return false;
}
```

**Use destructuring for cleaner code:**
```typescript
// Good
const { name, template, directory = '.' } = options;

// Bad
const name = options.name;
const template = options.template;
const directory = options.directory || '.';
```
