# AGENTS.md - Ask Mode

This file provides guidance to agents when answering questions about this repository.

## Project Context

This is a **CLI-based development environment** (meta-tool) - it generates and manages other projects, not a standalone application.

## Key Documentation Sources

- [`INIT_PROMPT.md`](INIT_PROMPT.md) - Project initialization requirements
- [`FOLDER_STRUCTURE.md`](FOLDER_STRUCTURE.md) - Planned folder structure
- `.spec/requirements/` - Requirements specifications (when created)
- `.spec/architecture/` - Architecture decisions (when created)
- `templates/<name>/README.md` - Template-specific documentation

## Critical Distinctions

- `src/` = CLI tool source (the meta-tool)
- `app/` = Generated application (user code, not this tool's source)
- `templates/` = Project scaffolding templates

## Planned Templates

- `full-stack/` - React + Node.js + PostgreSQL (defined in FOLDER_STRUCTURE.md)
- `backend-api/` - Node.js API only
- `frontend-spa/` - React SPA only
