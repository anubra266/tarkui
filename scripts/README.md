# Scripts

This directory contains build and development scripts for the Tark UI component registry.

## build-registry.js

Builds the component registry data and static JSON files for the shadcn-compatible API.

### Usage

#### Production Build

```bash
# Build once (used in production builds)
node scripts/build-registry.js
```

#### Development Watch Mode

```bash
# Watch for changes and rebuild automatically
node scripts/build-registry.js --watch
# or
node scripts/build-registry.js -w
```

### What it does

1. **Scans** the `components/registry/` directory for all component files
2. **Reads** source code from all frameworks (React, Vue, Solid, Svelte)
3. **Generates** static TypeScript data file at `lib/registry-data.ts`
4. **Creates** static JSON files at `public/r/[framework]/[slug]/[example].json`

### Watch Mode Features

- **Auto-rebuild** when any `.tsx`, `.vue`, `.svelte`, or `.ts` files change in `components/registry/`
- **Debounced** rebuilds (300ms delay) to handle multiple rapid changes
- **Console feedback** showing which files changed and rebuild status
- **Error handling** with helpful error messages

### File Structure

```
components/registry/
├── manifest/
│   └── accordion.ts          # Component metadata
├── react/
│   └── accordion/
│       └── basic.tsx         # React implementation
├── vue/
│   └── accordion/
│       └── basic.vue         # Vue implementation
├── solid/
│   └── accordion/
│       └── basic.tsx         # Solid implementation
└── svelte/
    └── accordion/
        └── basic.svelte      # Svelte implementation
```

### Generated Output

```
lib/
└── registry-data.ts          # Static TypeScript data

public/r/
├── react/accordion/basic.json
├── vue/accordion/basic.json
├── solid/accordion/basic.json
└── svelte/accordion/basic.json
```

Each JSON file is shadcn-compatible and contains:

- Component metadata
- Framework-specific dependencies
- Source code content
- File path information
