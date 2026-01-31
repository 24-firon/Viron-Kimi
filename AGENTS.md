# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Project Context

This is a **CLI-based development environment** (meta-tool) for managing full-stack projects. It generates project scaffolding from templates and orchestrates workflows.

## Critical Distinctions

- **`src/`** contains the CLI tool source code (Commander.js/OCLIF based)
- **`app/`** is for the active application instance being developed (NOT CLI source)
- **`templates/`** contains project templates: `full-stack/`, `backend-api/`, `frontend-spa/`
- **`.spec/`** stores specifications: `requirements/`, `architecture/`, `workflows/`

## Commands (When Implemented)

```bash
# CLI tool development
npm run dev          # Watch mode for CLI
npm run build        # Compile TypeScript
npm test             # Run tests

# Using the CLI (after build)
node bin/cli.js init                    # Initialize environment
node bin/cli.js create <template> <name> # Create project from template
node bin/cli.js workflow <name>         # Run defined workflow
```

## Key Patterns

- Templates use EJS or Handlebars for variable substitution
- Config stored in YAML with JSON schema validation in `config/schemas/`
- Local data in `storage/projects.json` (SQLite for production)
- Full-stack template: React 18 + Vite frontend, Node.js + Express + Prisma backend

## Testing Conventions

- Tests co-located with source or in `tests/` at root
- Template validation tests required for any new template
