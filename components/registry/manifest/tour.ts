import type { ComponentExampleMeta, ComponentManifest } from "@/lib/registry";

const cssVars: ComponentExampleMeta["cssVars"] = {
  theme: {
    "animate-backdrop-out": "fade-out 200ms cubic-bezier(0.3,0.0,0.8,0.15)",
    "animate-backdrop-in": "fade-in 250ms cubic-bezier(0.05,0.7,0.1,1.0)",
  },
};

const css: ComponentExampleMeta["css"] = {
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "scale(0.95)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  "@keyframes fadeOut": {
    "0%": {
      opacity: 1,
      transform: "scale(1)",
    },
    "100%": {
      opacity: 0,
      transform: "scale(0.95)",
    },
  },
};

const tailwindConfig = {
  css,
  cssVars,
};

const manifest: ComponentManifest = {
  examples: [
    {
      name: "basic",
      title: "Basic",
      ...tailwindConfig,
    },
  ],
};

export default manifest;
