# KIMI CLI Implementation Plan

## Current Status

### ✅ Completed
- AGENTS.md system (Root + 4 Mode variants)
- Global agents.md in `C:/Users/bachl/.vscode/`
- GitHub repositories created (Viron Knowledge, Viron Learnings, Viron Kimi)
- Basic package.json and tsconfig.json
- Initial src/ structure

### 🔄 In Progress
- CLI command implementation
- `.roo/` folder naming decision

### 📋 Next Steps

## Phase 1: Tool-Agnostic Naming
**Decision needed:** Rename `.roo/` to tool-agnostic name

Options:
- `.agents/` (descriptive, generic)
- `.vscode/agents/` (VS Code standard)
- Keep `.roo/` (de-facto standard)

## Phase 2: CLI Architecture

### Commands to Implement
1. `init` - Initialize environment (✅ basic structure)
2. `create <template> <name>` - Create project from template
3. `workflow <name>` - Execute defined workflow
4. `spec validate` - Validate specifications
5. `spec link` - Link specifications

### Core Components
- `TemplateEngine` (EJS/Handlebars)
- `WorkflowOrchestrator`
- `SpecManager`
- `HookSystem`

## Phase 3: Templates

### Required Templates
1. `full-stack/` - React + Node.js + PostgreSQL
2. `backend-api/` - Node.js API only
3. `frontend-spa/` - React SPA only

Each template needs:
- `template.json` manifest
- Source files with variable substitution
- Post-generation hooks

## Phase 4: Configuration

- YAML config files in `config/`
- JSON schema validation in `config/schemas/`
- Project index in `storage/projects.json`

## Phase 5: Testing

- Unit tests with Vitest
- Template validation tests
- Integration tests for CLI commands

## Decision Points

1. **Tool folder name**: `.roo/` vs `.agents/` vs other?
2. **Template engine**: EJS vs Handlebars?
3. **Database**: SQLite (dev) vs PostgreSQL (prod)?
4. **Config format**: YAML vs JSON?

## Success Criteria

- [ ] All 5 CLI commands working
- [ ] 3 project templates functional
- [ ] AGENTS.md updated with discovered patterns
- [ ] Tests passing
- [ ] Documentation complete
