# Accessible Code Theme

## Cursor Cloud specific instructions

### Overview
A React 16 + Redux 3 client-side app (Create React App v1) for designing accessible CodeMirror themes. Purely client-side — no backend, no API, no database.

### Running
- **Dev server:** `yarn start` (port 3000 by default; use `PORT=3001 yarn start` to avoid conflicts)
- **Tests:** `CI=true yarn test` (has a pre-existing failure — the test doesn't wrap components in a Redux `<Provider>`)
- **Build:** `yarn build`

### Gotchas
- The `prestart` script automatically runs `npm run css` (Tachyons CSS compilation) before `yarn start`.
- Uses `yarn.lock` — always use `yarn` as the package manager.
- Both repos in this workspace default to port 3000. Use `PORT=3001` for this app when running alongside agents-ui.
