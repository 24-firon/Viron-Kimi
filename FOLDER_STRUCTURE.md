# Geplante Ordnerstruktur

```
c:/Workspace/Repos/KIMI/                 # Root: CLI-Tool / Entwicklerumgebung
│
├── app/                                  # Die Full-Stack Anwendung
│   ├── backend/                          # Node.js + Express + TypeScript
│   │   ├── prisma/
│   │   │   ├── schema.prisma            # Datenbank-Schema
│   │   │   ├── migrations/              # Datenbank-Migrationen
│   │   │   └── seed.ts                  # Test-Daten Seed
│   │   ├── src/
│   │   │   ├── routes/                  # API Routes
│   │   │   ├── controllers/             # Request Handler
│   │   │   ├── middleware/              # Express Middleware
│   │   │   ├── utils/                   # Hilfsfunktionen
│   │   │   └── index.ts                 # Entry Point
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── .env
│   │
│   └── frontend/                         # React + TypeScript + Vite
│       ├── src/
│       │   ├── components/              # UI Komponenten
│       │   ├── pages/                   # Seiten
│       │   ├── hooks/                   # Custom React Hooks
│       │   ├── services/                # API Service Layer
│       │   ├── types/                   # TypeScript Types
│       │   ├── utils/                   # Hilfsfunktionen
│       │   └── main.tsx                 # Entry Point
│       ├── package.json
│       ├── tsconfig.json
│       └── index.html
│
├── docker-compose.yml                    # PostgreSQL Container
├── .gitignore                           # Global Git Ignore
├── README.md                            # Projekt-Dokumentation
└── .env.example                         # Beispiel-Umgebungsvariablen
```

## Technologie-Stack

| Bereich | Technologien |
|---------|--------------|
| **Backend** | Node.js, Express, TypeScript, Prisma ORM |
| **Frontend** | React 18, TypeScript, Vite |
| **Datenbank** | PostgreSQL (Docker) |
| **Tools** | npm, Docker Compose |

## Scripts (nach Init verfügbar)

```bash
# Backend starten
cd app/backend && npm run dev

# Frontend starten
cd app/frontend && npm run dev

# Datenbank starten
docker-compose up -d

# Prisma Migrationen
cd app/backend && npx prisma migrate dev
```
