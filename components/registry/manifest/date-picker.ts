import type { ComponentManifest } from "@/lib/registry";

const manifest: ComponentManifest = {
  examples: [
    {
      name: "basic",
      title: "Basic calendar",
    },
    {
      name: "multiple",
      title: "Multiple calendar",
    },
    {
      name: "range",
      title: "Range calendar",
    },
    {
      name: "unavailable",
      title: "W/ Unavailable Dates",
    },
    {
      name: "with-button",
      title: "W/ Button",
    },
    {
      name: "with-weeks",
      title: "W/ Weeks",
    },
    {
      name: "presets",
      title: "W/ Presets",
    },
    {
      name: "range-presets",
      title: "W/ Range Presets",
    },
    {
      name: "appointment",
      title: "Appointment calendar",
      span: 2,
    },
    {
      name: "two-months",
      title: "W/ Two Months",
      span: 2,
    },
    {
      name: "three-months",
      title: "W/ Three Months",
      span: 2,
    },
    {
      name: "pricing",
      title: "Pricing",
      span: 2,
    },
  ],
};

export default manifest;
