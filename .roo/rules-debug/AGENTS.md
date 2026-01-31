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
