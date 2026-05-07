# AGENTS.md

## Overview

This is a React/Redux single-page application ("Accessible Code Theme Designer") that helps developers design accessible CodeMirror syntax highlighting themes. It uses Create React App v1 (react-scripts 1.0.17).

## Cursor Cloud specific instructions

### Technology Stack
- React 16.1 with Redux 3.x
- Create React App v1 (react-scripts 1.0.17)
- Tachyons CSS (processed via tachyons-cli)
- Package manager: Yarn (yarn.lock present)

### Node.js Version Requirement
This project uses react-scripts v1.0.17 which requires **Node.js 12** (LTS Erbium). Node 22 is too new and will cause build/runtime failures. Use `nvm use 12` after installing Node 12.

### Key Commands
- **Install**: `yarn install`
- **Dev server**: `yarn start` (starts on port 3000; automatically runs CSS preprocessing via the `prestart` hook)
- **Tests**: `yarn test` (Jest with jsdom, runs in watch mode by default; use `CI=true yarn test` for single run)
- **Build**: `yarn build`
- **CSS only**: `yarn css` (processes `src/css/app.css` through tachyons-cli to `src/index.css`)

### Architecture Notes
- No backend, no database, no Docker — purely a frontend app
- The `prestart` script runs `npm run css` which generates `src/index.css` from `src/css/app.css` using tachyons-cli
- The app runs entirely client-side (no API calls)

### Gotchas
- The `prestart` hook uses `npm run css` (not `yarn css`), which is fine since npm is always available alongside yarn
- ESLint is bundled inside react-scripts (CRA v1); there is no standalone lint command — linting runs as part of `yarn start` and `yarn build`
