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
