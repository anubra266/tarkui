import type { ComponentExampleMeta, ComponentManifest } from "@/lib/registry";

const cssVars: ComponentExampleMeta["cssVars"] = {
  theme: {
    "animate-fade-in": "fadeIn 0.25s ease-out",
    "animate-fade-out": "fadeOut 0.2s ease-out",
  },
};

const css: ComponentExampleMeta["css"] = {
  "@keyframes fade-in": {
    "0%, 100%": {
      transform: "rotate(-3deg)",
    },
    "50%": {
      transform: "rotate(3deg)",
    },
  },
  "@keyframes fade-out": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
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
    {
      name: "with-arrow",
      title: "With Arrow",
      ...tailwindConfig,
    },
    {
      name: "positioning",
      title: "Positioning",
      ...tailwindConfig,
    },
    {
      name: "status-card",
      title: "Status Card",
      ...tailwindConfig,
    },
    {
      name: "metrics-card",
      title: "Metrics Card",
      ...tailwindConfig,
    },
    {
      name: "video-thumbnail",
      title: "Video Thumbnail",
      ...tailwindConfig,
    },
  ],
};

export default manifest;
