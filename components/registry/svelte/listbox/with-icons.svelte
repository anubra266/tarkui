<script lang="ts">
  import { Listbox, createListCollection } from "@ark-ui/svelte/listbox";
  import {
    Check,
    Figma,
    Paintbrush,
    Image,
    Layers,
    Zap,
    Code,
    Palette,
  } from "lucide-svelte";

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
</script>

<div class="flex items-center justify-center min-h-32">
  <Listbox.Root
    {collection}
    selectionMode="multiple"
    defaultValue={["figma", "vscode"]}
    class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"
  >
    <Listbox.Label
      class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block"
    >
      Design & Development Tools
    </Listbox.Label>
    <div class="text-xs text-gray-500 dark:text-gray-400 mb-3">
      Select your preferred tools
    </div>
    <Listbox.Content
      class="bg-(--listbox-bg) border border-(--listbox-border) rounded-lg px-1 py-2 w-80 shadow-lg"
    >
      {#each collection().items as tool (tool.value)}
        {@const IconComponent = tool.icon}
        <Listbox.Item
          item={tool}
          class="flex items-center justify-between px-3 py-3 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-selected:bg-blue-50 dark:data-selected:bg-blue-900/20 data-selected:text-blue-700 dark:data-selected:text-blue-300 transition-colors"
        >
          <div class="flex items-center gap-3">
            <IconComponent class="w-5 h-5 {getIconColor(tool.value)}" />
            <Listbox.ItemText class="flex-1">
              <div class="flex flex-col">
                <span class="font-medium">{tool.name}</span>
                <span
                  class="text-xs text-gray-500 dark:text-gray-400 font-normal"
                >
                  {tool.description}
                </span>
              </div>
            </Listbox.ItemText>
          </div>
          <Listbox.ItemIndicator>
            <div
              class="w-4 h-4 rounded border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center bg-blue-600 dark:bg-blue-400"
            >
              <Check class="w-2.5 h-2.5 text-white" />
            </div>
          </Listbox.ItemIndicator>
        </Listbox.Item>
      {/each}
    </Listbox.Content>
  </Listbox.Root>
</div>
