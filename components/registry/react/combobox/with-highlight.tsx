"use client";

import { Combobox, useListCollection } from "@ark-ui/react/combobox";
import { Highlight } from "@ark-ui/react/highlight";
import { useFilter } from "@ark-ui/react/locale";
import { Portal } from "@ark-ui/react/portal";
import { ChevronDownIcon, XIcon } from "lucide-react";

export default function WithHighlightCombobox() {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: ["React", "Solid", "Vue", "Svelte", "Angular", "Preact"],
    filter: contains,
  });

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue);
  };

  return (
    <div className="w-full max-w-sm">
      <Combobox.Root
        collection={collection}
        onInputValueChange={handleInputChange}
      >
        <Combobox.Label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Framework
        </Combobox.Label>
        <Combobox.Control className="relative">
          <Combobox.Input
            className="w-full px-3 py-2 pr-20 border border-gray-300 dark:border-gray-600 rounded-md shadow-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
            placeholder="Search frameworks..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Combobox.ClearTrigger className="px-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <XIcon className="h-4 w-4" />
            </Combobox.ClearTrigger>
            <Combobox.Trigger className="px-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <ChevronDownIcon className="h-4 w-4" />
            </Combobox.Trigger>
          </div>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 focus:outline-hidden z-50">
              <Combobox.ItemGroup>
                <Combobox.ItemGroupLabel className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Frameworks
                </Combobox.ItemGroupLabel>
                {collection.items.map((item) => (
                  <Combobox.Item
                    key={item}
                    item={item}
                    className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 data-highlighted:bg-gray-50 dark:data-highlighted:bg-gray-700 transition-colors"
                  >
                    <Combobox.ItemText className="block truncate">
                      <Combobox.Context>
                        {(context) => (
                          <Highlight
                            text={item}
                            query={context.inputValue}
                            ignoreCase
                            className="[&_mark]:bg-blue-100 dark:[&_mark]:bg-blue-900/50 [&_mark]:text-blue-900 dark:[&_mark]:text-blue-100 [&_mark]:font-semibold [&_mark]:px-0.5 [&_mark]:py-0.5 [&_mark]:rounded"
                          />
                        )}
                      </Combobox.Context>
                    </Combobox.ItemText>
                    <Combobox.ItemIndicator className="absolute inset-y-0 pr-3 text-blue-600 dark:text-blue-400">
                      ✓
                    </Combobox.ItemIndicator>
                  </Combobox.Item>
                ))}
              </Combobox.ItemGroup>
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </div>
  );
}
