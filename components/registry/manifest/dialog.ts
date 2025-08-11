import type { ComponentExampleMeta, ComponentManifest } from "@/lib/registry";

const cssVars: ComponentExampleMeta["cssVars"] = {
  theme: {
    "animate-backdrop-out": "fade-out 200ms cubic-bezier(0.3,0.0,0.8,0.15)",
    "animate-backdrop-in": "fade-in 250ms cubic-bezier(0.05,0.7,0.1,1.0)",
    "animate-dialog-out": "slide-out 200ms cubic-bezier(0.3,0.0,0.8,0.15)",
    "animate-dialog-in": "slide-in 400ms cubic-bezier(0.05,0.7,0.1,1.0)",
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
  "@keyframes slide-in": {
    "0%": {
      opacity: "0",
      transform: "translateY(64px)",
    },
    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
  "@keyframes slide-out": {
    "0%": {
      opacity: "1",
      transform: "translateY(0)",
    },
    "100%": {
      opacity: "0",
      transform: "translateY(64px)",
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
      name: "alert",
      title: "Alert dialog",
      ...tailwindConfig,
    },
    {
      name: "with-icon",
      title: "Alert w/ icon",
      ...tailwindConfig,
    },
    {
      name: "delete-project",
      title: "Delete project",
      ...tailwindConfig,
    },
    {
      name: "newsletter",
      title: "Newsletter",
      ...tailwindConfig,
    },
    {
      name: "terms",
      title: "Terms & conditions",
      ...tailwindConfig,
    },
    {
      name: "feedback",
      title: "Feedback",
      ...tailwindConfig,
    },
    {
      name: "rating",
      title: "Rating",
      ...tailwindConfig,
    },
    {
      name: "signup",
      title: "Sign up",
      ...tailwindConfig,
    },
    {
      name: "signin",
      title: "Sign in",
      ...tailwindConfig,
    },
    {
      name: "invite-team",
      title: "Invite team",
      ...tailwindConfig,
    },
    {
      name: "card-details",
      title: "Card details",
      ...tailwindConfig,
    },
    {
      name: "checkout",
      title: "Checkout",
      ...tailwindConfig,
    },
    {
      name: "choose-subscription",
      title: "Choose subscription",
      ...tailwindConfig,
    },
    {
      name: "edit-profile",
      title: "Edit profile",
      ...tailwindConfig,
    },
  ],
};

export default manifest;
