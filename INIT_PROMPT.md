# Initialization Prompt - Entwicklerumgebung

## Kontext
Dies ist eine CLI-basierte Entwicklerumgebung zur Verwaltung von Full-Stack Projekten. Das Repository dient als zentrale Steuerung für Workflows, Spezifikationen und Projekt-Scaffolding.

## Ziel
Erstelle eine modulare Entwicklerumgebung mit folgenden Kernfunktionen:

### 1. Spezifikations-Management
- Zentrale Spezifikationsdateien (`.spec/`-Ordner)
- Verknüpfung zwischen Requirements, Architektur und Implementierung
- Versionierung von Spezifikationen

### 2. Projekt-Scaffolding
- Templates für verschiedene Projekttypen
- Automatische Generierung von Projektstrukturen
- Konfigurations-Management

### 3. Workflow-Orchestrierung
- Definierte Workflows für Entwicklungsprozesse
- Hook-System für benutzerdefinierte Erweiterungen
- Integration mit externen Tools

### 4. Speicher-Systeme
- Lokale Konfigurationsverwaltung
- Datenbank-Anbindung für Projektdaten
- Cache-Management

## Repository-Struktur (Vorschlag)
```
repo-root/
├── .spec/                    # Spezifikationsdateien
│   ├── requirements/         # Anforderungen
│   ├── architecture/         # Architektur-Dokumente
│   └── workflows/            # Workflow-Definitionen
├── templates/                # Projekt-Templates
│   ├── full-stack/          # React + Node.js + PostgreSQL
│   ├── backend-api/         # Node.js API only
│   └── frontend-spa/        # React SPA only
├── src/                      # CLI-Tool Quellcode
│   ├── commands/            # CLI Commands
│   ├── core/                # Kern-Logik
│   ├── hooks/               # Hook-System
│   └── utils/               # Hilfsfunktionen
├── config/                   # Konfiguration
│   ├── default.yaml         # Standard-Konfig
│   └── schemas/             # Konfig-Schemas
├── storage/                  # Lokale Daten
│   ├── projects.json        # Projekt-Index
│   └── cache/               # Cache-Verzeichnis
├── app/                      # [Optional] Aktive Anwendung
├── bin/                      # CLI Entry Points
├── docs/                     # Dokumentation
├── tests/                    # Tests
├── package.json             # Node.js Config
├── tsconfig.json            # TypeScript Config
└── README.md                # Haupt-Doku
```

## Technologie-Stack
- **Runtime:** Node.js
- **Language:** TypeScript
- **CLI Framework:** Commander.js oder OCLIF
- **Config:** YAML/JSON mit Schema-Validierung
- **Template Engine:** EJS oder Handlebars
- **Database:** SQLite (lokal) oder PostgreSQL (shared)

## Initialisierungs-Aufgaben
1. Erstelle Ordnerstruktur
2. Initialisiere Node.js Projekt mit TypeScript
3. Setze CLI-Framework auf
4. Erstelle erste Commands (`init`, `create`, `workflow`)
5. Implementiere Template-System
6. Setze Spezifikations-Verwaltung auf

## Workflow-Beispiele
- `init` - Initialisiert neue Entwicklerumgebung
- `create <template> <name>` - Erstellt neues Projekt aus Template
- `workflow <name>` - Führt definierten Workflow aus
- `spec validate` - Validiert Spezifikationen
- `spec link` - Verknüpft Spezifikationen

## Hinweise
- Fokus auf Modularität und Erweiterbarkeit
- Klare Trennung zwischen Core und Extensions
- Dokumentation ist kritisch
- Tests von Beginn an integrieren

---

## Aktueller Status
- Workspace ist leer
- Vorangegangene Planung hat App-Struktur (React + Node.js + PostgreSQL) definiert
- Diese soll als Template in `templates/full-stack/` integriert werden
