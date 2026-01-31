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
