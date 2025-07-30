<script setup lang="ts">
import { Listbox, createListCollection } from "@ark-ui/vue/listbox";
import { Check } from "lucide-vue-next";

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
</script>

<template>
  <div class="flex items-center justify-center min-h-32">
    <Listbox.Root
      :collection="collection"
      class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"
    >
      <Listbox.Label
        class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block"
      >
        Select technologies
      </Listbox.Label>
      <Listbox.Content
        class="bg-(--listbox-bg) border border-(--listbox-border) rounded-lg px-1 py-2 w-72 shadow-lg max-h-80 overflow-y-auto"
      >
        <Listbox.ItemGroup
          v-for="[category, items] in collection.group()"
          :key="category"
        >
          <Listbox.ItemGroupLabel
            class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
          >
            {{ category }}
          </Listbox.ItemGroupLabel>
          <Listbox.Item
            v-for="item in items"
            :key="item.value"
            :item="item"
            class="flex items-center justify-between px-3 py-2 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-selected:bg-blue-50 dark:data-selected:bg-blue-900/20 data-selected:text-blue-700 dark:data-selected:text-blue-300 transition-colors ml-4"
          >
            <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
            <Listbox.ItemIndicator>
              <Check class="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </Listbox.ItemIndicator>
          </Listbox.Item>
        </Listbox.ItemGroup>
      </Listbox.Content>
    </Listbox.Root>
  </div>
</template>
