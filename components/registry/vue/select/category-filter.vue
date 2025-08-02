<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
  >
    <div class="max-w-sm w-full">
      <Select.Root :collection="collection">
        <Select.Label
          class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2"
        >
          Category
        </Select.Label>
        <Select.Control>
          <Select.Trigger
            class="flex h-10 w-full items-center justify-between rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
          >
            <Select.ValueText placeholder="Select a category" />
            <Select.Indicator>
              <ChevronDownIcon
                class="h-4 w-4 text-gray-500 dark:text-gray-400"
              />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger
            class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mt-1"
          >
            Clear
          </Select.ClearTrigger>
        </Select.Control>
        <Teleport to="body">
          <Select.Positioner>
            <Select.Content
              class="z-50 min-w-[var(--reference-width)] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg max-h-60 overflow-auto"
            >
              <Select.ItemGroup>
                <Select.ItemGroupLabel
                  class="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide"
                >
                  Technology
                </Select.ItemGroupLabel>
                <Select.Item
                  v-for="category in techCategories"
                  :key="category.value"
                  :item="category"
                  class="relative flex cursor-pointer select-none items-center px-3 py-2 text-sm text-gray-900 dark:text-gray-100 data-[highlighted]:bg-gray-100 dark:data-[highlighted]:bg-gray-700 data-[state=checked]:bg-gray-50 dark:data-[state=checked]:bg-gray-700"
                >
                  <Select.ItemText>{{ category.label }}</Select.ItemText>
                  <Select.ItemIndicator
                    class="absolute right-3 text-blue-600 dark:text-blue-400"
                  >
                    ✓
                  </Select.ItemIndicator>
                </Select.Item>
              </Select.ItemGroup>
              <Select.ItemGroup>
                <Select.ItemGroupLabel
                  class="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide"
                >
                  Design
                </Select.ItemGroupLabel>
                <Select.Item
                  v-for="category in designCategories"
                  :key="category.value"
                  :item="category"
                  class="relative flex cursor-pointer select-none items-center px-3 py-2 text-sm text-gray-900 dark:text-gray-100 data-[highlighted]:bg-gray-100 dark:data-[highlighted]:bg-gray-700 data-[state=checked]:bg-gray-50 dark:data-[state=checked]:bg-gray-700"
                >
                  <Select.ItemText>{{ category.label }}</Select.ItemText>
                  <Select.ItemIndicator
                    class="absolute right-3 text-blue-600 dark:text-blue-400"
                  >
                    ✓
                  </Select.ItemIndicator>
                </Select.Item>
              </Select.ItemGroup>
              <Select.ItemGroup>
                <Select.ItemGroupLabel
                  class="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide"
                >
                  Business
                </Select.ItemGroupLabel>
                <Select.Item
                  v-for="category in businessCategories"
                  :key="category.value"
                  :item="category"
                  class="relative flex cursor-pointer select-none items-center px-3 py-2 text-sm text-gray-900 dark:text-gray-100 data-[highlighted]:bg-gray-100 dark:data-[highlighted]:bg-gray-700 data-[state=checked]:bg-gray-50 dark:data-[state=checked]:bg-gray-700"
                >
                  <Select.ItemText>{{ category.label }}</Select.ItemText>
                  <Select.ItemIndicator
                    class="absolute right-3 text-blue-600 dark:text-blue-400"
                  >
                    ✓
                  </Select.ItemIndicator>
                </Select.Item>
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Teleport>
        <Select.HiddenSelect />
      </Select.Root>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Select, createListCollection } from "@ark-ui/vue/select";
import { ChevronDownIcon } from "lucide-vue-next";
import { computed } from "vue";

interface Category {
  label: string;
  value: string;
  group: string;
}

const categories: Category[] = [
  { label: "React", value: "react", group: "tech" },
  { label: "Vue", value: "vue", group: "tech" },
  { label: "Angular", value: "angular", group: "tech" },
  { label: "Svelte", value: "svelte", group: "tech" },
  { label: "UI Design", value: "ui-design", group: "design" },
  { label: "UX Design", value: "ux-design", group: "design" },
  { label: "Graphic Design", value: "graphic-design", group: "design" },
  {
    label: "Product Management",
    value: "product-management",
    group: "business",
  },
  { label: "Marketing", value: "marketing", group: "business" },
  { label: "Sales", value: "sales", group: "business" },
];

const collection = createListCollection<Category>({ items: categories });

const techCategories = computed(() =>
  categories.filter((c) => c.group === "tech")
);
const designCategories = computed(() =>
  categories.filter((c) => c.group === "design")
);
const businessCategories = computed(() =>
  categories.filter((c) => c.group === "business")
);
</script>
