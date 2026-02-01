# Viron Kimi 🚀

> CLI-based development environment for managing full-stack projects

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/24-firon/Viron-Kimi)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)

## Overview

**Kimi** is a command-line interface (CLI) tool designed to streamline the creation and management of full-stack projects. It provides a scaffolding system with pre-configured templates, workflow automation, and an extensible architecture.

### Key Features

- 🏗️ **Project Scaffolding** - Generate full-stack, backend, or frontend projects from templates
- 📋 **Workflow Automation** - Execute predefined workflows for common development tasks
- 🔧 **Extensible Architecture** - Hook system for custom extensions and post-generation scripts
- 📚 **Specification-Driven** - Requirements and architecture specifications drive implementation
- 🎯 **TypeScript First** - Built with TypeScript for type safety and better developer experience

## Installation

### Global Installation (Recommended)

```bash
npm install -g viron-kimi
```

### Local Installation

```bash
npm install viron-kimi
npx kimi --help
```

### Development Setup

```bash
git clone https://github.com/24-firon/Viron-Kimi.git
cd Viron-Kimi
npm install
npm run dev
```

## Quick Start

### 1. Initialize Development Environment

```bash
kimi init
```

This creates the necessary directory structure:
```
.spec/              # Specifications
  ├── requirements/
  ├── architecture/
  └── workflows/
templates/          # Project templates
config/             # Configuration files
storage/            # Local data storage
```

### 2. Create a New Project

```bash
# Create a full-stack project
kimi create full-stack my-awesome-app

# Create a backend API
kimi create backend-api my-api

# Create a frontend SPA
kimi create frontend-spa my-frontend
```

### 3. Run a Workflow

```bash
kimi workflow setup-ci
```

## Available Templates

| Template | Description | Tech Stack |
|----------|-------------|------------|
| `full-stack` | Complete web application | React + Node.js + Express + PostgreSQL |
| `backend-api` | RESTful API server | Node.js + Express + Prisma |
| `frontend-spa` | Single page application | React + Vite + TypeScript |

## Commands

### `init [options]`

Initialize a new development environment.

**Options:**
- `-f, --force` - Force initialization even if directory is not empty

**Example:**
```bash
kimi init --force
```

### `create <template> <name> [options]`

Create a new project from a template.

**Arguments:**
- `template` - Template name (`full-stack`, `backend-api`, `frontend-spa`)
- `name` - Project name

**Options:**
- `-d, --directory <path>` - Target directory (default: current directory)

**Example:**
```bash
kimi create full-stack my-app -d ./projects
```

### `workflow <name> [options]`

Execute a defined workflow.

**Arguments:**
- `name` - Workflow name

**Options:**
- `-p, --params <json>` - Workflow parameters as JSON string

**Example:**
```bash
kimi workflow deploy --params '{"env": "production"}'
```

## Project Structure

```
viron-kimi/
├── src/
│   ├── commands/        # CLI commands
│   │   ├── init.ts
│   │   ├── create.ts
│   │   └── workflow.ts
│   ├── core/            # Core logic
│   │   ├── scaffold.ts
│   │   └── template-engine.ts
│   ├── hooks/           # Extension hooks
│   └── utils/           # Utilities
├── templates/           # Project templates
├── .agents/             # AI agent rules
│   ├── rules-code/
│   ├── rules-debug/
│   ├── rules-ask/
│   └── rules-architect/
├── AGENTS.md            # Project guidance
└── IMPLEMENTATION_PLAN.md
```

## Configuration

Kimi uses a hierarchical configuration system:

1. CLI arguments (highest priority)
2. Environment variables
3. Project config (`./kimi.config.yaml`)
4. User config (`~/.kimi/config.yaml`)
5. Default values

### Example Configuration

```yaml
# kimi.config.yaml
defaultTemplate: full-stack
templatesDir: ./templates
storage:
  type: json
  path: ./storage/projects.json
workflows:
  postCreate:
    - npm install
    - git init
```

## Development

### Scripts

```bash
npm run dev          # Development with hot reload
npm run build        # Compile TypeScript
npm run test         # Run tests
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
```

### Project Conventions

- **Commands**: Located in `src/commands/`, use Commander.js
- **Templates**: Self-contained in `templates/<name>/` with `template.json` manifest
- **Tests**: Co-located with source files (`*.test.ts`)
- **Error Handling**: Always use try-catch with proper error messages

### AI Agent Support

This project includes an AGENTS.md system for AI assistants:

- **Global**: `~/.vscode/agents.md` - Personal preferences
- **Project**: `AGENTS.md` - Project context
- **Mode-specific**: `.agents/rules-*/AGENTS.md` - Specialized rules

See `.agents/` directory for detailed guidance on code, debug, ask, and architect modes.

## Roadmap

- [x] CLI foundation with Commander.js
- [x] AGENTS.md system for AI assistants
- [ ] Template engine with EJS/Handlebars
- [ ] Full-stack template (React + Node.js + PostgreSQL)
- [ ] Backend API template (Express + Prisma)
- [ ] Frontend SPA template (React + Vite)
- [ ] Workflow orchestration
- [ ] Plugin system
- [ ] Configuration management
- [ ] Test suite with Vitest

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT](LICENSE) © Viron

## Acknowledgments

- Built with [Commander.js](https://github.com/tj/commander.js/)
- Inspired by [Vue CLI](https://cli.vuejs.org/) and [Create React App](https://create-react-app.dev/)
- AGENTS.md system influenced by best practices from AI-assisted development

---

<p align="center">
  Made with ❤️ by the Viron team
</p>