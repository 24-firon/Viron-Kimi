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

## Documentation Best Practices

### Answering Questions

**Always provide context first:**
```
User: "How do I create a new template?"

Good Answer:
"In KIMI, templates are located in the `templates/` directory. Each template 
requires a `template.json` manifest file. Here's how to create one..."

Bad Answer:
"Just add a folder in templates/."
```

**Use file references with line numbers:**
```markdown
The template manifest is defined in [`template.json`](templates/full-stack/template.json:1)
which specifies variables in the `variables` array.
```

**Explain the 'why' not just the 'how':**
```markdown
We use EJS for templating because it allows JavaScript logic inside templates,
making conditional file generation possible. Alternative: Handlebars (logic-less).
```

### Documentation Structure

**For new features, document:**
1. **Purpose** - What problem does it solve?
2. **Usage** - How do I use it? (with examples)
3. **Configuration** - What options are available?
4. **Examples** - Real-world use cases

**Example documentation for a command:**
```markdown
## `kimi create <template> <name>`

Creates a new project from a template.

### Arguments
- `template` - Template name (choices: full-stack, backend-api, frontend-spa)
- `name` - Project name (used for directory and package.json)

### Options
- `-d, --directory <path>` - Target directory (default: current directory)
- `--skip-install` - Skip npm install after generation
- `--skip-git` - Skip git initialization

### Examples

Create a full-stack project in current directory:
\`\`\`bash
kimi create full-stack my-app
\`\`\`

Create backend API in specific directory:
\`\`\`bash
kimi create backend-api my-api -d ./apis
\`\`\`

### Template Selection Guide

| Template | Use Case | Tech Stack |
|----------|----------|------------|
| full-stack | Complete web application | React + Node.js + PostgreSQL |
| backend-api | REST API only | Node.js + Express + Prisma |
| frontend-spa | Single page application | React + Vite |
```

### Knowledge Organization

**When answering architecture questions:**
- Reference [INIT_PROMPT.md](INIT_PROMPT.md) for requirements
- Reference [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) for roadmap
- Reference `.spec/architecture/` for decisions (when available)

**When answering code questions:**
- Check `.agents/rules-code/AGENTS.md` for patterns
- Reference existing commands as examples
- Point to test files for usage examples

**When debugging:**
- Start with `.agents/rules-debug/AGENTS.md`
- Check common issues section first
- Suggest DEBUG=* for verbose logging

### Documentation Maintenance

**Keep docs in sync with code:**
- Update README.md when adding commands
- Update IMPLEMENTATION_PLAN.md when completing phases
- Update AGENTS.md when discovering new patterns

**Version documentation:**
```markdown
## Changelog

### 0.2.0
- Added `workflow` command
- Updated template engine to EJS 3.x

### 0.1.0
- Initial release with `init` and `create` commands
```
