import { ComponentManifest } from "@/lib/registry";

const manifest: ComponentManifest = {
  examples: [
    { name: "simple", title: "Simple" },
    { name: "required", title: "Required" },
    { name: "with-helper-text", title: "W/ helper text" },
    { name: "with-error", title: "W/ error" },
    { name: "with-end-icon", title: "W/ end icon" },
    { name: "with-start-icon", title: "W/ start icon" },
    { name: "with-start-add-on", title: "W/ start inline add-on" },
    { name: "with-end-add-on", title: "W/ end inline add-on" },
    { name: "with-start-select", title: "W/ start select" },
    { name: "with-end-select", title: "W/ end select" },
    { name: "with-end-button", title: "W/ end button" },
    { name: "with-end-icon-button", title: "W/ end icon button" },
    { name: "with-end-inline-button", title: "W/ end inline button" },
    { name: "with-clear-button", title: "W/ clear button" },
    { name: "search-with-loader", title: "Search W/ Loader" },
    { name: "with-characters-left", title: "W/ characters left" },
    { name: "with-character-limit", title: "W/ character limit" },
    { name: "with-inset-label", title: "W/ inset label" },
    { name: "with-overlapping-label", title: "W/ overlapping label" },
    { name: "with-label-animation", title: "W/ label animation" },
  ],
};

export default manifest;
