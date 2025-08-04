"use client";

import {
  Combobox,
  useCombobox,
  useListCollection,
} from "@ark-ui/react/combobox";
import { useFilter } from "@ark-ui/react/locale";
import { Portal } from "@ark-ui/react/portal";
import { TagsInput, useTagsInput } from "@ark-ui/react/tags-input";
import { ChevronDown, X } from "lucide-react";

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

export default function TagsInputWithCombobox() {
  const tagsInput = useTagsInput({
    defaultValue: ["React"],
  });

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: availableFrameworks,
    filter: contains,
  });

  const combobox = useCombobox({
    collection,
    closeOnSelect: false,
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

  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <TagsInput.RootProvider value={tagsInput} className="w-full max-w-md">
        <Combobox.RootProvider value={combobox}>
          <>
            <TagsInput.Label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Frameworks
            </TagsInput.Label>
            <Combobox.Control className="relative">
              <TagsInput.Control className="flex flex-wrap gap-1 p-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-md shadow-xs bg-white dark:bg-gray-800 min-h-[2.5rem] focus-within:outline-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400">
                {tagsInput.value.map((value, index) => (
                  <TagsInput.Item
                    key={index}
                    index={index}
                    value={value}
                    className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs dark:bg-gray-700 dark:text-gray-200"
                  >
                    <TagsInput.ItemPreview className="flex items-center gap-1">
                      <TagsInput.ItemText>{value}</TagsInput.ItemText>
                      <TagsInput.ItemDeleteTrigger className="flex items-center justify-center w-3 h-3 hover:bg-gray-200 rounded transition-colors dark:hover:bg-gray-600">
                        <X className="w-2 h-2" />
                      </TagsInput.ItemDeleteTrigger>
                    </TagsInput.ItemPreview>
                    <TagsInput.ItemInput className="bg-transparent border-none outline-none text-xs" />
                  </TagsInput.Item>
                ))}
                <Combobox.Input
                  placeholder="Add framework..."
                  className="flex-1 min-w-[80px] bg-transparent border-none outline-none text-sm text-gray-900 placeholder-gray-500 dark:text-gray-100 dark:placeholder-gray-400"
                />
              </TagsInput.Control>
              <Combobox.Trigger className="px-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors absolute inset-y-0 right-0">
                <ChevronDown className="h-4 w-4" />
              </Combobox.Trigger>
            </Combobox.Control>
            {tagsInput.value.length > 0 && (
              <TagsInput.ClearTrigger className="mt-2 text-sm text-gray-500 hover:text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-gray-200">
                Clear all
              </TagsInput.ClearTrigger>
            )}

            <Portal>
              <Combobox.Positioner>
                <Combobox.Content className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 focus:outline-hidden z-50">
                  {collection.items
                    .filter((item) => !tagsInput.value.includes(item))
                    .map((item) => (
                      <Combobox.Item
                        key={item}
                        item={item}
                        className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 data-highlighted:bg-gray-50 dark:data-highlighted:bg-gray-700 transition-colors"
                      >
                        <Combobox.ItemText className="block truncate">
                          {item}
                        </Combobox.ItemText>
                        <Combobox.ItemIndicator className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-600 dark:text-blue-400">
                          ✓
                        </Combobox.ItemIndicator>
                      </Combobox.Item>
                    ))}
                  {collection.items.filter(
                    (item) => !tagsInput.value.includes(item)
                  ).length === 0 && (
                    <div className="py-2 pl-3 pr-9 text-sm text-gray-500 dark:text-gray-400">
                      No available options
                    </div>
                  )}
                </Combobox.Content>
              </Combobox.Positioner>
            </Portal>
          </>
        </Combobox.RootProvider>
        <TagsInput.HiddenInput />
      </TagsInput.RootProvider>
    </div>
  );
}
