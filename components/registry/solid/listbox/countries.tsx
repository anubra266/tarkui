"use client";

import { Listbox, createListCollection } from "@ark-ui/solid/listbox";
import { Check, Search } from "lucide-solid";
import { createSignal, For } from "solid-js";

export default function Countries() {
  const collection = createListCollection({
    items: [
      { name: "United States", code: "US", flag: "🇺🇸" },
      { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
      { name: "Canada", code: "CA", flag: "🇨🇦" },
      { name: "Germany", code: "DE", flag: "🇩🇪" },
      { name: "France", code: "FR", flag: "🇫🇷" },
      { name: "Japan", code: "JP", flag: "🇯🇵" },
      { name: "Australia", code: "AU", flag: "🇦🇺" },
      { name: "Brazil", code: "BR", flag: "🇧🇷" },
      { name: "India", code: "IN", flag: "🇮🇳" },
      { name: "China", code: "CN", flag: "🇨🇳" },
      { name: "South Korea", code: "KR", flag: "🇰🇷" },
      { name: "Netherlands", code: "NL", flag: "🇳🇱" },
      { name: "Spain", code: "ES", flag: "🇪🇸" },
      { name: "Italy", code: "IT", flag: "🇮🇹" },
      { name: "Mexico", code: "MX", flag: "🇲🇽" },
    ],
    itemToValue: (item) => item.code,
  });

  return (
    <div class="flex items-center justify-center min-h-32">
      <Listbox.Root
        collection={collection}
        class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"
      >
        <Listbox.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
          <Search class="w-4 h-4" />
          Select your country
        </Listbox.Label>
        <Listbox.Content class="bg-(--listbox-bg) border border-(--listbox-border) rounded-lg px-1 py-2 w-64 shadow-lg max-h-60 overflow-y-auto">
          <For each={collection.items}>
            {(country) => (
              <Listbox.Item
                key={country}
                item={country}
                class="flex items-center justify-between px-3 py-2 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-disabled:opacity-50 data-disabled:cursor-not-allowed transition-colors"
              >
                <Listbox.ItemText>{country}</Listbox.ItemText>
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
