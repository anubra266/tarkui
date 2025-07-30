"use client";

import { Listbox, createListCollection } from "@ark-ui/solid/listbox";
import { Check } from "lucide-solid";

export default function Basic() {
  const collection = createListCollection({
    items: ["React", "Vue", "Angular", "Svelte", "Solid"],
  });

  return (
    <div class="flex items-center justify-center min-h-32">
      <Listbox.Root
        collection={collection}
        class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"
      >
        <Listbox.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Select your framework
        </Listbox.Label>
        <Listbox.Content class="bg-(--listbox-bg) border border-(--listbox-border) rounded-lg px-1 py-2 w-64 shadow-lg">
          {collection.items.map((item) => (
            <Listbox.Item
              key={item}
              item={item}
              class="flex items-center justify-between px-3 py-2 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-disabled:opacity-50 data-disabled:cursor-not-allowed transition-colors"
            >
              <Listbox.ItemText>{item}</Listbox.ItemText>
              <Listbox.ItemIndicator>
                <Check class="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </Listbox.ItemIndicator>
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>
    </div>
  );
}
