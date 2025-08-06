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
      name: "share",
      title: "Share",
      ...tailwindConfig,
    },
    {
      name: "feedback",
      title: "Feedback",
      ...tailwindConfig,
    },
    {
      name: "notifications",
      title: "Notifications",
      ...tailwindConfig,
    },
    {
      name: "user-profile",
      title: "User profile",
      ...tailwindConfig,
    },
    {
      name: "settings-menu",
      title: "Settings menu",
      ...tailwindConfig,
    },
  ],
};

export default manifest;
