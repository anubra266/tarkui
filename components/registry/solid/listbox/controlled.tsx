"use client";

import { Listbox, createListCollection } from "@ark-ui/solid/listbox";
import { Check } from "lucide-solid";
import { createSignal, For } from "solid-js";

export default function Controlled() {
  const [selectedValues, setSelectedValues] = createSignal<string[]>(["react"]);

  const collection = createListCollection({
    items: [
      { name: "React", value: "react" },
      { name: "Vue", value: "vue" },
      { name: "Angular", value: "angular" },
      { name: "Svelte", value: "svelte" },
      { name: "Solid", value: "solid" },
      { name: "Qwik", value: "qwik" },
    ],
  });

  const handleSelectionChange = (details: { value: string[] }) => {
    setSelectedValues(details.value);
  };

  const handleReset = () => {
    setSelectedValues([]);
  };

  const handleSelectAll = () => {
    setSelectedValues(collection.items.map((item) => item.value));
  };

  return (
    <div class="flex items-center justify-center min-h-32">
      <div class="w-72 space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">
            Controlled Listbox
          </h3>
          <div class="flex gap-2">
            <button
              onClick={handleSelectAll}
              class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
            >
              Select All
            </button>
            <button
              onClick={handleReset}
              class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1"
            >
              <RefreshCw class="w-3 h-3" />
              Reset
            </button>
          </div>
        </div>

        <Listbox.Root
          collection={collection}
          selectionMode="multiple"
          value={selectedValues()}
          onValueChange={handleSelectionChange}
          class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"
        >
          <Listbox.Content class="bg-(--listbox-bg) border border-(--listbox-border) rounded-lg px-1 py-2 w-64 shadow-lg">
            <For each={collection.items}>
              {(item) => (
                <Listbox.Item
                  key={item.value}
                  item={item}
                  class="flex items-center justify-between px-3 py-2 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-disabled:opacity-50 data-disabled:cursor-not-allowed transition-colors"
                >
                  <Listbox.ItemText>{item.name}</Listbox.ItemText>
                  <Listbox.ItemIndicator>
                    <Check class="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </Listbox.ItemIndicator>
                </Listbox.Item>
              )}
            </For>
          </Listbox.Content>
        </Listbox.Root>

        <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
          <div>
            <strong>Selected values:</strong>{" "}
            {selectedValues().length > 0 ? selectedValues().join(", ") : "None"}
          </div>
          <div>
            <strong>Count:</strong> {selectedValues().length} of{" "}
            {collection.items.length}
          </div>
        </div>
      </div>
    </div>
  );
}
