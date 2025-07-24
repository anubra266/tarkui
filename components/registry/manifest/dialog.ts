import { ComponentExampleMeta, ComponentManifest } from "@/lib/registry";

const cssVars: ComponentExampleMeta["cssVars"] = {
  theme: {
    "ease-emphasized-in": "cubic-bezier(0.05,0.7,0.1,1.0)",
    "ease-emphasized-out": "cubic-bezier(0.3,0.0,0.8,0.15)",

    "animate-backdrop-out": "fade-out 200ms var(--ease-emphasized-out)",
    "animate-backdrop-in": "fade-in 250ms var(--ease-emphasized-in)",
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
