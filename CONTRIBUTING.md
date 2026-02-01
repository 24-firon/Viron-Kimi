# Contributing to Viron Kimi

First off, thank you for considering contributing to Viron Kimi! It's people like you that make Viron Kimi such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our commitment to:
- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Assume good intentions

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to see if the problem has already been reported. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (commands, configuration files)
- **Describe the behavior you observed** and what behavior you expected
- **Include error messages and stack traces**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples** to demonstrate the enhancement
- **Explain why this enhancement would be useful**

### Pull Requests

1. Fork the repository
2. Create a new branch from `main` (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run the tests (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Setup

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Viron-Kimi.git
cd Viron-Kimi

# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests
npm test
```

## Project Structure

```
viron-kimi/
├── src/
│   ├── commands/        # CLI commands (init, create, workflow)
│   ├── core/            # Core logic and template engine
│   ├── hooks/           # Extension hooks
│   └── utils/           # Shared utilities
├── templates/           # Project templates
├── .agents/             # AI agent rules
├── tests/               # Test files
└── docs/                # Documentation
```

## Coding Standards

### TypeScript

- Use **strict mode** TypeScript
- Add explicit return types for public functions
- Use `const` and `let`, avoid `var`
- Prefer `async/await` over Promises

Example:
```typescript
// Good
export async function createProject(name: string): Promise<Project> {
  const project = await initializeProject(name);
  return project;
}

// Bad
export function createProject(name) {
  return initializeProject(name).then(project => project);
}
```

### Error Handling

- Always wrap async operations in try-catch
- Use custom error classes for domain-specific errors
- Provide helpful error messages

```typescript
try {
  await fs.mkdir(projectPath);
} catch (error) {
  if (error instanceof Error) {
    logger.error(`Failed to create project: ${error.message}`);
  }
  throw new TemplateError('Directory creation failed', templateName);
}
```

### Testing

- Write tests for new features
- Place tests alongside source files (`*.test.ts`)
- Use descriptive test names

```typescript
describe('create command', () => {
  it('should create project directory when template is valid', async () => {
    // Test implementation
  });
  
  it('should throw error when template does not exist', async () => {
    // Test implementation
  });
});
```

### Documentation

- Update README.md if you change functionality
- Add JSDoc comments for public APIs
- Update AGENTS.md if you discover new patterns

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, missing semi-colons, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Build process or auxiliary tool changes

Examples:
```
feat(template): add authentication to full-stack template
fix(cli): handle missing template manifest gracefully
docs(readme): update installation instructions
```

## Adding New Templates

### Template Structure

```
templates/
└── your-template/
    ├── template.json      # Template manifest
    ├── README.md          # Template documentation
    └── files/             # Template files
        ├── package.json.ejs
        ├── src/
        └── ...
```

### Template Manifest (template.json)

```json
{
  "name": "your-template",
  "description": "Description of your template",
  "version": "1.0.0",
  "variables": [
    {
      "name": "projectName",
      "description": "Name of the project",
      "required": true
    },
    {
      "name": "includeTests",
      "description": "Include test setup",
      "default": true
    }
  ],
  "hooks": {
    "postGenerate": ["npm install", "git init"]
  }
}
```

### Template Guidelines

1. Use EJS for file templates (`<%= variableName %>`)
2. Include a comprehensive README.md
3. Add comments explaining complex configuration
4. Test the template before submitting

## Adding New Commands

1. Create a new file in `src/commands/`
2. Export a named Command object
3. Add the command to `src/index.ts`
4. Write tests
5. Update documentation

Example:
```typescript
// src/commands/my-command.ts
import { Command } from 'commander';

export const myCommand = new Command('my-command')
  .description('Description of my command')
  .argument('<required-arg>', 'Description')
  .option('-o, --optional <value>', 'Optional flag')
  .action(async (arg, options) => {
    // Command implementation
  });
```

## AI Agent Support

This project uses an AGENTS.md system to guide AI assistants. When contributing:

- Update `.agents/rules-code/AGENTS.md` if you introduce new coding patterns
- Update `.agents/rules-debug/AGENTS.md` with new debugging techniques
- Update `.agents/rules-architect/AGENTS.md` with architectural decisions

## Questions?

Feel free to open an issue with your question or join our discussions.

Thank you for contributing! 🎉