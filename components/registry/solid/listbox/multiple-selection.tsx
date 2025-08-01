"use client";

import { Listbox, createListCollection } from "@ark-ui/solid/listbox";
import { Check, X } from "lucide-solid";
import { createSignal, For } from "solid-js";

export default function MultipleSelection() {
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

  return (
    <div class="flex items-center justify-center min-h-32">
      <Listbox.Root
        collection={collection}
        selectionMode="multiple"
        defaultValue={["TypeScript", "JavaScript"]}
        class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"
      >
        <Listbox.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Select programming languages
        </Listbox.Label>
        <div class="text-xs text-gray-500 dark:text-gray-400 mb-3">
          You can select multiple languages
        </div>
        <Listbox.Content class="bg-(--listbox-bg) border border-(--listbox-border) rounded-lg px-1 py-2 w-64 shadow-lg">
          <For each={collection.items}>
            {(item) => (
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
            )}
          </For>
        </Listbox.Content>
      </Listbox.Root>
    </div>
  );
}
