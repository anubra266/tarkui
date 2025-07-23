# Component Registry Structure

This directory contains the component registry for Tark UI, organized for maximum developer experience and maintainability.

## Directory Structure

```
components/registry/
├── manifest/                    # Component manifests (shared across all frameworks)
│   ├── accordion.ts
│   ├── carousel.ts
│   ├── checkbox.ts
│   └── ...
├── react/                       # React implementations
│   ├── accordion/
│   │   ├── basic-accordion.tsx
│   │   ├── multiple-items.tsx
│   │   └── ...
│   ├── carousel/
│   │   ├── default-button.tsx
│   │   └── ...
│   └── ...
├── vue/                         # Vue implementations
│   ├── accordion/
│   │   ├── basic-accordion.vue
│   │   ├── multiple-items.vue
│   │   └── ...
│   └── ...
├── solid/                       # Solid implementations
│   ├── accordion/
│   │   ├── basic-accordion.tsx
│   │   └── ...
│   └── ...
└── svelte/                      # Svelte implementations
    ├── accordion/
    │   ├── basic-accordion.svelte
    │   └── ...
    └── ...
```

## How It Works

### 1. Shared Manifests

- **Location**: `manifest/{component}.ts`
- **Purpose**: Define examples, titles, and ordering for ALL frameworks
- **Benefit**: Single source of truth, no duplication

### 2. Framework Implementations

- **Location**: `{framework}/{component}/{example-name}.{ext}`
- **Purpose**: Actual component code for each framework
- **Benefit**: Same examples available in all frameworks

### 3. Visual Display

- **Renders**: Always uses React components for consistent UI
- **Copy**: Framework-specific code based on user selection

## Adding New Components

### 1. Create Manifest

```typescript
// manifest/new-component.ts
import { ComponentManifest } from "@/lib/registry";

const manifest: ComponentManifest = {
  examples: [
    {
      name: "basic-example",
      title: "Basic Example",
    },
    // ... more examples
  ],
};

export default manifest;
```

### 2. Create Framework Implementations

```
react/new-component/basic-example.tsx
vue/new-component/basic-example.vue
solid/new-component/basic-example.tsx
svelte/new-component/basic-example.svelte
```

### 3. Component Auto-Discovery

The registry automatically:

- Loads the manifest
- Finds all framework implementations
- Renders React components in UI
- Provides framework-specific code for copying

## Benefits

✅ **Clean Organization**: All manifests in one place
✅ **No Duplication**: Shared manifest across frameworks
✅ **Consistent Structure**: `{framework}/{component}/{example}`
✅ **Easy Maintenance**: Add once, works everywhere
✅ **Great DX**: Intuitive file organization
