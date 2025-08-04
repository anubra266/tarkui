<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
  >
    <TagsInput.RootProvider :value="tagsInput" class="w-full max-w-md">
      <Combobox.RootProvider :value="combobox">
        <TagsInput.Label
          class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Frameworks
        </TagsInput.Label>
        <Combobox.Control class="relative">
          <TagsInput.Control
            class="flex flex-wrap gap-1 p-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-md shadow-xs bg-white dark:bg-gray-800 min-h-10 focus-within:outline-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400"
          >
            <TagsInput.Item
              v-for="(value, index) in tagsInput.value"
              :key="index"
              :index="index"
              :value="value"
              class="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs dark:bg-gray-700 dark:text-gray-200"
            >
              <TagsInput.ItemPreview class="flex items-center gap-1">
                <TagsInput.ItemText>{{ value }}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger
                  class="flex items-center justify-center w-3 h-3 hover:bg-gray-200 rounded transition-colors dark:hover:bg-gray-600"
                >
                  <X class="w-2 h-2" />
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.ItemPreview>
              <TagsInput.ItemInput
                class="bg-transparent border-none outline-none text-xs"
              />
            </TagsInput.Item>
            <Combobox.Input
              placeholder="Add framework..."
              class="flex-1 min-w-[80px] bg-transparent border-none outline-none text-sm text-gray-900 placeholder-gray-500 dark:text-gray-100 dark:placeholder-gray-400"
            />
          </TagsInput.Control>
          <Combobox.Trigger
            class="px-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors absolute inset-y-0 right-0"
          >
            <ChevronDown class="h-4 w-4" />
          </Combobox.Trigger>
        </Combobox.Control>
        <TagsInput.ClearTrigger
          v-if="tagsInput.value.length > 0"
          class="mt-2 text-sm text-gray-500 hover:text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-gray-200"
        >
          Clear all
        </TagsInput.ClearTrigger>

        <Teleport to="body">
          <Combobox.Positioner>
            <Combobox.Content
              class="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 focus:outline-hidden z-50"
            >
              <Combobox.Item
                v-for="item in collection.items.filter(
                  (item) => !tagsInput.value.includes(item)
                )"
                :key="item"
                :item="item"
                class="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 data-highlighted:bg-gray-50 dark:data-highlighted:bg-gray-700 transition-colors"
              >
                <Combobox.ItemText class="block truncate">
                  {{ item }}
                </Combobox.ItemText>
                <Combobox.ItemIndicator
                  class="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-600 dark:text-blue-400"
                >
                  ✓
                </Combobox.ItemIndicator>
              </Combobox.Item>
              <div
                v-if="
                  collection.items.filter(
                    (item) => !tagsInput.value.includes(item)
                  ).length === 0
                "
                class="py-2 pl-3 pr-9 text-sm text-gray-500 dark:text-gray-400"
              >
                No available options
              </div>
            </Combobox.Content>
          </Combobox.Positioner>
        </Teleport>
      </Combobox.RootProvider>
      <TagsInput.HiddenInput />
    </TagsInput.RootProvider>
  </div>
</template>

<script setup>
import { Combobox, useCombobox, useListCollection } from "@ark-ui/vue/combobox";
import { useFilter } from "@ark-ui/vue/locale";
import { TagsInput, useTagsInput } from "@ark-ui/vue/tags-input";
import { ChevronDown, X } from "lucide-vue-next";

const availableFrameworks = [
  "React",
  "Vue",
  "Svelte",
  "Angular",
  "Next.js",
  "Nuxt.js",
  "SvelteKit",
  "Solid.js",
  "Qwik",
  "Astro",
];

const tagsInput = useTagsInput({
  defaultValue: ["React"],
});

const filters = useFilter({ sensitivity: "base" });

const { collection, filter } = useListCollection({
  initialItems: availableFrameworks,
  filter: filters.value.contains,
});

const combobox = useCombobox({
  get collection() {
    return collection.value;
  },
  onInputValueChange(details) {
    filter(details.inputValue);
  },
  onValueChange(details) {
    if (details.value.length > 0) {
      tagsInput.addValue(details.value[0]);
      combobox.clearValue();
    }
  },
});
</script>
