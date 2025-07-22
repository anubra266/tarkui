"use client";

import { Combobox, useListCollection } from "@ark-ui/react/combobox";
import { useFilter } from "@ark-ui/react/locale";
import { Portal } from "@ark-ui/react/portal";
import { ChevronDownIcon, XIcon } from "lucide-react";

const initialItems = [
  { label: "React", value: "react", type: "JS" },
  { label: "Solid", value: "solid", type: "JS" },
  { label: "Vue", value: "vue", type: "JS" },
  { label: "Svelte", value: "svelte", type: "JS" },
  { label: "Panda", value: "panda", type: "CSS" },
  { label: "Tailwind", value: "tailwind", type: "CSS" },
];

export default function GroupingCombobox() {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems,
    filter: contains,
    groupBy: (item) => item.type,
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
          Technology
        </Combobox.Label>
        <Combobox.Control className="relative">
          <Combobox.Input
            className="w-full px-3 py-2 pr-20 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
            placeholder="Select a technology..."
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
            <Combobox.Content className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 focus:outline-none z-50">
              {collection.group().map(([type, group]) => (
                <Combobox.ItemGroup key={type}>
                  <Combobox.ItemGroupLabel className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700">
                    {type}
                  </Combobox.ItemGroupLabel>
                  {group.map((item) => (
                    <Combobox.Item
                      key={item.value}
                      item={item}
                      className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 data-[highlighted]:bg-gray-50 dark:data-[highlighted]:bg-gray-700 transition-colors"
                    >
                      <Combobox.ItemText className="block truncate">
                        {item.label}
                      </Combobox.ItemText>
                      <Combobox.ItemIndicator className="absolute inset-y-0 pr-3 text-blue-600 dark:text-blue-400">
                        ✓
                      </Combobox.ItemIndicator>
                    </Combobox.Item>
                  ))}
                </Combobox.ItemGroup>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </div>
  );
}
