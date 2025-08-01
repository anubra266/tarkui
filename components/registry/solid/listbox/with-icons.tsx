"use client";

import { Listbox, createListCollection } from "@ark-ui/solid/listbox";
import {
  Check,
  Code,
  Palette,
  Zap,
  Database,
  Cloud,
  Shield,
  Globe,
} from "lucide-solid";
import { createSignal, For } from "solid-js";

export default function WithIcons() {
  const collection = createListCollection({
    items: [
      {
        name: "Figma",
        value: "figma",
        icon: Figma,
        description: "Design and prototype",
      },
      {
        name: "Photoshop",
        value: "photoshop",
        icon: Image,
        description: "Photo editing",
      },
      {
        name: "Illustrator",
        value: "illustrator",
        icon: Paintbrush,
        description: "Vector graphics",
      },
      {
        name: "Sketch",
        value: "sketch",
        icon: Layers,
        description: "Digital design",
      },
      {
        name: "Framer",
        value: "framer",
        icon: Zap,
        description: "Interactive prototyping",
      },
      {
        name: "VS Code",
        value: "vscode",
        icon: Code,
        description: "Code editor",
      },
      {
        name: "Adobe XD",
        value: "xd",
        icon: Palette,
        description: "UX/UI design",
      },
    ],
  });

  const getIconColor = (value: string) => {
    switch (value) {
      case "figma":
        return "text-purple-600 dark:text-purple-400";
      case "photoshop":
        return "text-blue-600 dark:text-blue-400";
      case "illustrator":
        return "text-orange-600 dark:text-orange-400";
      case "sketch":
        return "text-yellow-600 dark:text-yellow-400";
      case "framer":
        return "text-pink-600 dark:text-pink-400";
      case "vscode":
        return "text-blue-500 dark:text-blue-400";
      case "xd":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <div class="flex items-center justify-center min-h-32">
      <Listbox.Root
        collection={collection}
        selectionMode="multiple"
        defaultValue={["figma", "vscode"]}
        class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"
      >
        <Listbox.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Design & Development Tools
        </Listbox.Label>
        <div class="text-xs text-gray-500 dark:text-gray-400 mb-3">
          Select your preferred tools
        </div>
        <Listbox.Content class="bg-(--listbox-bg) border border-(--listbox-border) rounded-lg px-1 py-2 w-64 shadow-lg">
          <For each={collection.items}>
            {(tool) => (
              <Listbox.Item
                key={tool}
                item={tool}
                class="flex items-center justify-between px-3 py-2 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-disabled:opacity-50 data-disabled:cursor-not-allowed transition-colors"
              >
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                    <Code class="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <Listbox.ItemText>{tool}</Listbox.ItemText>
                </div>
                <Listbox.ItemIndicator>
                  <Check class="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </Listbox.ItemIndicator>
              </Listbox.Item>
            )}
          </For>
        </Listbox.Content>
      </Listbox.Root>
    </div>
  );
}
