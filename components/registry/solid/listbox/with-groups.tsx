"use client";

import { Listbox, createListCollection } from "@ark-ui/solid/listbox";
import { Check } from "lucide-solid";
import { For } from "solid-js";

export default function WithGroups() {
  const collection = createListCollection({
    items: [
      { label: "React", value: "react", category: "Frontend Frameworks" },
      { label: "Vue", value: "vue", category: "Frontend Frameworks" },
      { label: "Angular", value: "angular", category: "Frontend Frameworks" },
      { label: "Svelte", value: "svelte", category: "Frontend Frameworks" },
      { label: "Node.js", value: "nodejs", category: "Backend" },
      { label: "Express", value: "express", category: "Backend" },
      { label: "FastAPI", value: "fastapi", category: "Backend" },
      { label: "Django", value: "django", category: "Backend" },
      { label: "PostgreSQL", value: "postgresql", category: "Databases" },
      { label: "MongoDB", value: "mongodb", category: "Databases" },
      { label: "Redis", value: "redis", category: "Databases" },
      { label: "MySQL", value: "mysql", category: "Databases" },
    ],
    groupBy: (item) => item.category,
  });

  return (
    <div class="flex items-center justify-center min-h-32">
      <Listbox.Root
        collection={collection}
        class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"
      >
        <Listbox.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Select technologies
        </Listbox.Label>
        <Listbox.Content class="bg-(--listbox-bg) border border-(--listbox-border) rounded-lg px-1 py-2 w-64 shadow-lg max-h-60 overflow-y-auto">
          <For each={collection.group()}>
            {([category, items]) => (
              <Listbox.ItemGroup>
                <Listbox.ItemGroupLabel class="px-3 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {category}
                </Listbox.ItemGroupLabel>
                <For each={items}>
                  {(item) => (
                    <Listbox.Item
                      key={item.value}
                      item={item}
                      class="flex items-center justify-between px-3 py-2 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-disabled:opacity-50 data-disabled:cursor-not-allowed transition-colors"
                    >
                      <Listbox.ItemText>{item.label}</Listbox.ItemText>
                      <Listbox.ItemIndicator>
                        <Check class="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </Listbox.ItemIndicator>
                    </Listbox.Item>
                  )}
                </For>
              </Listbox.ItemGroup>
            )}
          </For>
        </Listbox.Content>
      </Listbox.Root>
    </div>
  );
}
