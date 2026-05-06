# Agents

## Cursor Cloud specific instructions

This is a React/Redux single-page application (Create React App 1.x) for designing accessible CodeMirror syntax highlighting themes. It is purely client-side with no backend or database.

### Node.js version

Requires **Node.js 12** (via nvm). The project uses `react-scripts@1.0.17` which is incompatible with Node 14+.

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 12
```

### Commands

| Action | Command |
|--------|---------|
| Install deps | `yarn install` |
| Dev server | `yarn start` (runs on port 3000; auto-runs `tachyons` CSS build via `prestart`) |
| Build | `yarn build` |
| Tests | `CI=true yarn test` |
| CSS only | `yarn css` |

### Notes

- The existing test (`src/App.test.js`) fails because it renders `<App>` without a Redux `<Provider>`. This is a pre-existing issue in the repo, not a setup problem.
- The `prestart` script compiles Tachyons CSS (`src/css/app.css` → `src/index.css`). If `src/index.css` appears missing or stale, run `yarn css` manually.
- No linter is configured beyond what CRA 1.x provides internally (basic ESLint during compilation).
