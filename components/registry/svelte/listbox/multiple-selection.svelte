<script lang="ts">
  import { Listbox, createListCollection } from "@ark-ui/svelte/listbox";
  import { Check } from "lucide-svelte";

  const collection = createListCollection({
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Go",
      "Rust",
      "Java",
      "C++",
      "Swift",
    ],
  });
</script>

<div class="flex items-center justify-center min-h-32">
  <Listbox.Root
    {collection}
    selectionMode="multiple"
    defaultValue={["TypeScript", "JavaScript"]}
    class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"
  >
    <Listbox.Label
      class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block"
    >
      Select programming languages
    </Listbox.Label>
    <div class="text-xs text-gray-500 dark:text-gray-400 mb-3">
      You can select multiple languages
    </div>
    <Listbox.Content
      class="bg-(--listbox-bg) border border-(--listbox-border) rounded-lg px-1 py-2 w-64 shadow-lg max-h-64 overflow-y-auto"
    >
      {#each collection().items as item (item)}
        <Listbox.Item
          {item}
          class="flex items-center justify-between px-3 py-2.5 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-selected:bg-blue-50 dark:data-selected:bg-blue-900/20 data-selected:text-blue-700 dark:data-selected:text-blue-300 transition-colors"
        >
          <Listbox.ItemText class="flex-1">{item}</Listbox.ItemText>
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
