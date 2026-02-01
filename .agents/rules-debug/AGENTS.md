# AGENTS.md - Debug Mode

This file provides guidance to agents when debugging in this repository.

## Debug Entry Points

- CLI entry point: `bin/cli.js` (compiled from TypeScript)
- Source maps enabled in `tsconfig.json` for debugging
- Use `npm run dev` for watch mode with auto-restart

## Common Issues

- Template rendering fails silently if variable missing - check `template.json` manifest
- Schema validation errors show file path but not line number - validate YAML manually
- CLI commands not found: ensure build completed (`npm run build`)

## Log Locations

- CLI logs to console only (no log file by default)
- Set `DEBUG=*` environment variable for verbose logging
- Template generation logs to `storage/debug/` when enabled in config

## Debugging Best Practices

### Using VS Code Debugger

**Launch configuration for debugging CLI:**
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug CLI",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "npx",
      "runtimeArgs": ["tsx", "src/index.ts"],
      "args": ["init", "--force"],
      "cwd": "${workspaceFolder}",
      "sourceMaps": true,
      "console": "integratedTerminal"
    }
  ]
}
```

### Common Debugging Patterns

**Add strategic console.log for tracing:**
```typescript
// Before async operations
console.log('→ Starting template copy:', { from: templatePath, to: projectPath });

// After async operations
console.log('✓ Template copy completed');

// Before error-prone sections
console.log('→ Validating manifest:', manifestPath);
```

**Use debug package for conditional logging:**
```typescript
import createDebug from 'debug';

const debug = createDebug('kimi:template');
const debugError = createDebug('kimi:error');

// Usage
debug('Loading template from %s', templatePath);
debugError('Failed to parse manifest: %o', error);
```

Run with: `DEBUG=kimi:* npm run dev`

### Troubleshooting Workflow

**Step 1: Reproduce the issue**
```bash
# Run with verbose logging
DEBUG=* npx tsx src/index.ts create full-stack test-project
```

**Step 2: Check for silent failures**
```typescript
// Add explicit error boundaries
try {
  await riskyOperation();
} catch (error) {
  console.error('Operation failed:', error);
  console.error('Stack:', error.stack);
  throw error; // Re-throw after logging
}
```

**Step 3: Validate assumptions**
```typescript
// Check file exists before operations
const exists = await fs.access(templatePath)
  .then(() => true)
  .catch(() => false);
  
if (!exists) {
  console.error('Template not found:', templatePath);
  process.exit(1);
}
```

### Performance Debugging

**Measure execution time:**
```typescript
console.time('template-generation');
await generateTemplate(template, name);
console.timeEnd('template-generation');
// Output: template-generation: 145.023ms
```

**Profile memory usage:**
```typescript
const before = process.memoryUsage();
await heavyOperation();
const after = process.memoryUsage();

console.log('Memory delta:', {
  heapUsed: (after.heapUsed - before.heapUsed) / 1024 / 1024 + ' MB'
});
```

### Gotchas and Solutions

**Issue: EJS template errors don't show line numbers**
```typescript
// Wrap EJS rendering with context
try {
  const result = await ejs.renderFile(templatePath, data);
} catch (error) {
  console.error(`Template error in ${templatePath}:`);
  console.error(error.message);
  // Extract line number from error message
  const match = error.message.match(/line (\d+)/);
  if (match) {
    console.error(`Check line ${match[1]} in ${templatePath}`);
  }
}
```

**Issue: Async operations hanging**
```typescript
// Add timeout to promises
const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
  const timeout = new Promise<never>((_, reject) => 
    setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms)
  );
  return Promise.race([promise, timeout]);
};

// Usage
await withTimeout(generateTemplate(template, name), 30000);
```
