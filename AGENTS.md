# AGENTS.md

## Cursor Cloud specific instructions

This is a client-side React app (Create React App v1, react-scripts 1.0.17) for designing accessible CodeMirror syntax-highlighting themes.

### Node version requirement

This project requires **Node.js 12** (v12.22.12). It will NOT work with Node 14+ due to CRA v1 / Webpack 3 / Babel 6 incompatibilities. Use nvm:

```
source ~/.nvm/nvm.sh && nvm use 12
```

### Running the app

```
yarn start
```

This runs `tachyons` CSS build as a prestart hook, then starts the CRA dev server on port 3000.

### Building

```
yarn build
```

### Tests

```
CI=true yarn test
```

Note: The default test (`App.test.js`) has a pre-existing failure — it renders `<App>` without a Redux `<Provider>` wrapper. This is a known issue in the repo and not a regression.

### Key gotchas

- Yarn must be installed globally for Node 12 (`npm install -g yarn`) since it doesn't ship with that Node version by default.
- The `prestart` and `prebuild` hooks run `tachyons src/css/app.css > src/index.css --minify` to generate the CSS. If `src/index.css` is missing or stale, run `yarn css` manually.
