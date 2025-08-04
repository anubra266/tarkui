import type { ComponentManifest } from "@/lib/registry";

const manifest: ComponentManifest = {
  examples: [
    // Basic horizontal styles
    {
      name: "basic",
      title: "Basic",
    },
    {
      name: "underline",
      title: "Underline",
    },
    {
      name: "pills",
      title: "Pills",
    },
    {
      name: "ghost",
      title: "Ghost",
    },
    {
      name: "outline",
      title: "Outline",
    },
    {
      name: "stack",
      title: "Stack",
    },

    // Horizontal with icons and content
    {
      name: "icon-only",
      title: "Icon Only",
    },
    {
      name: "with-icons",
      title: "W/ Icons",
    },
    {
      name: "icon-above",
      title: "Icon Above",
    },
    {
      name: "with-badges",
      title: "W/ Badges",
    },
    {
      name: "outline-with-icons",
      title: "Outline W/ Icons",
    },
    {
      name: "stack-with-icons",
      title: "Stack W/ Icons",
    },

    // Vertical variants
    {
      name: "vertical-icons",
      title: "Vertical Icons",
    },
    {
      name: "vertical-underline",
      title: "Vertical Underline",
    },
    {
      name: "vertical-with-icons",
      title: "Vertical W/ Icons",
    },
    {
      name: "vertical-ghost",
      title: "Vertical Ghost",
    },
  ],
};

export default manifest;
