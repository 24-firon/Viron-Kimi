# Getting Started with Viron Kimi

Welcome! This guide will help you get started with Viron Kimi, whether you're a user, contributor, or AI assistant.

## Table of Contents

1. [For Users](#for-users) - Using Kimi CLI
2. [For Contributors](#for-contributors) - Developing Kimi
3. [For AI Assistants](#for-ai-assistants) - Understanding the codebase

---

## For Users

### Quick Start (5 minutes)

```bash
# 1. Install Kimi globally
npm install -g viron-kimi

# 2. Initialize your environment
mkdir my-projects && cd my-projects
kimi init

# 3. Create your first project
kimi create full-stack my-app

# 4. Navigate and start developing
cd my-app
npm run dev
```

### Understanding the Basics

**What is Kimi?**
Kimi is a CLI tool that generates project scaffolding from templates. Think of it like `create-react-app` but for full-stack projects.

**Core Concepts:**
- **Templates**: Pre-configured project setups (full-stack, backend, frontend)
- **Scaffolding**: Automatic generation of files and folders
- **Workflows**: Automated development tasks

### Available Commands

| Command | Purpose | Example |
|---------|---------|---------|
| `init` | Setup development environment | `kimi init --force` |
| `create` | Generate new project | `kimi create full-stack my-app` |
| `workflow` | Run automation tasks | `kimi workflow setup-ci` |

### Template Selection Guide

Choose based on your needs:

```
Full-Stack Project?
├── Yes → full-stack template
│         (React + Node.js + PostgreSQL)
│
└── No → API only?
         ├── Yes → backend-api template
         │         (Express + Prisma)
         │
         └── No → frontend-spa template
                   (React + Vite)
```

---

## For Contributors

### Development Setup

**Prerequisites:**
- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

**Step-by-Step:**

```bash
# 1. Fork and clone
git clone https://github.com/YOUR_USERNAME/Viron-Kimi.git
cd Viron-Kimi

# 2. Install dependencies
npm install

# 3. Verify setup
npm run typecheck    # Should pass with no errors
npm run lint         # Should show no issues

# 4. Run in development mode
npm run dev -- --help

# 5. Run tests
npm test
```

### Project Architecture

```
Kimi/
├── src/
│   ├── commands/     ← Add new CLI commands here
│   ├── core/         ← Core logic (template engine, etc.)
│   ├── hooks/        ← Extension points
│   └── utils/        ← Helper functions
│
├── templates/        ← Project templates
│   ├── full-stack/
│   ├── backend-api/
│   └── frontend-spa/
│
├── .agents/          ← AI assistant rules
│   ├── rules-code/
│   ├── rules-debug/
│   ├── rules-ask/
│   └── rules-architect/
│
└── AGENTS.md         ← Project guidance for AI
```

### Your First Contribution

**Easy first tasks:**
1. Fix a typo in documentation
2. Add a test for existing code
3. Improve error messages
4. Add JSDoc comments

**Workflow:**
```bash
# 1. Create branch
git checkout -b fix/typo-in-readme

# 2. Make changes
# ... edit files ...

# 3. Test
npm run typecheck
npm test

# 4. Commit
git commit -m "docs: fix typo in README"

# 5. Push and create PR
git push origin fix/typo-in-readme
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## For AI Assistants

### Understanding This Repository

**Project Type**: CLI tool for project scaffolding
**Language**: TypeScript with Node.js
**Architecture**: Commander.js CLI with plugin system

### Key Files to Read

1. **Start here**: [AGENTS.md](AGENTS.md) - Project overview
2. **Implementation**: [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) - Roadmap
3. **Your role**: [.agents/rules-*/AGENTS.md](.agents/) - Mode-specific guidance

### Mode Selection

When working on this codebase, use the appropriate mode:

| Task | Mode | Guidance File |
|------|------|---------------|
| Writing code | Code | `.agents/rules-code/AGENTS.md` |
| Debugging | Debug | `.agents/rules-debug/AGENTS.md` |
| Answering questions | Ask | `.agents/rules-ask/AGENTS.md` |
| Architecture decisions | Architect | `.agents/rules-architect/AGENTS.md` |

### Common Patterns

**Adding a Command:**
```typescript
// 1. Create file in src/commands/
// 2. Export Command object
// 3. Register in src/index.ts
// 4. Add tests
// 5. Update documentation
```

**Error Handling:**
```typescript
try {
  await operation();
} catch (error) {
  logger.error(error.message);
  process.exit(1);
}
```

### Critical Context

- **Never put CLI source in `app/`** - that's for generated projects
- **Always use named exports** for commands (not default exports)
- **Template variables** use EJS syntax: `<%= variableName %>`
- **Tests** should be co-located: `feature.ts` + `feature.test.ts`

---

## Next Steps

### For Users
- [ ] Create your first project: `kimi create full-stack test-app`
- [ ] Explore the generated project structure
- [ ] Read about [workflows](#) (coming soon)

### For Contributors
- [ ] Read [CONTRIBUTING.md](CONTRIBUTING.md) completely
- [ ] Pick a [good first issue](https://github.com/24-firon/Viron-Kimi/labels/good%20first%20issue)
- [ ] Join discussions

### For AI Assistants
- [ ] Read all `.agents/rules-*/AGENTS.md` files
- [ ] Understand the [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md)
- [ ] Review existing code patterns in `src/`

---

## Getting Help

- **Documentation**: Check README.md and this guide
- **Issues**: [GitHub Issues](https://github.com/24-firon/Viron-Kimi/issues)
- **Discussions**: [GitHub Discussions](https://github.com/24-firon/Viron-Kimi/discussions)

---

**Ready to start?** Pick your path above and dive in! 🚀