import type { ComponentManifest } from "@/lib/registry";

const manifest: ComponentManifest = {
  examples: [
    { name: "basic", title: "Basic" },
    { name: "avatar-upload", title: "Avatar upload" },
    { name: "drag-and-drop", title: "Drag and drop" },
    { name: "multiple-images", title: "Multiple images" },
    { name: "files-list", title: "Files list" },
    { name: "files-table", title: "Files table" },
    { name: "with-paste", title: "With paste" },
    { name: "directory-upload", title: "Directory upload" },
  ],
};

export default manifest;
