import type { ComponentManifest } from "@/lib/registry";

const manifest: ComponentManifest = {
  examples: [
    { name: "basic", title: "Basic" },
    { name: "masked", title: "Masked" },
    { name: "two-factor", title: "Two factor" },
    { name: "with-field", title: "With field" },
    { name: "custom-placeholder", title: "Custom placeholder" },
    { name: "verification", title: "Verification" },
  ],
};

export default manifest;
