import { Combobox, useListCollection } from "@ark-ui/solid/combobox";
import { useFilter } from "@ark-ui/solid/locale";
import { Portal } from "solid-js/web";
import { For } from "solid-js";
import { ChevronDownIcon, XIcon } from "lucide-solid";

const initialItems = [
  { label: "React", value: "react", type: "JS" },
  { label: "Solid", value: "solid", type: "JS" },
  { label: "Vue", value: "vue", type: "JS" },
  { label: "Svelte", value: "svelte", type: "JS" },
  { label: "Panda", value: "panda", type: "CSS" },
  { label: "Tailwind", value: "tailwind", type: "CSS" },
];

export default function GroupingCombobox() {
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems,
    filter: filterFn().contains,
    groupBy: (item) => item.type,
  });

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue);
  };

  return (
    <div class="w-full max-w-sm">
      <Combobox.Root
        collection={collection()}
        onInputValueChange={handleInputChange}
      >
        <Combobox.Label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Technology
        </Combobox.Label>
        <Combobox.Control class="relative">
          <Combobox.Input
            class="w-full px-3 py-2 pr-20 border border-gray-300 dark:border-gray-600 rounded-md shadow-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
            placeholder="Select a technology..."
          />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <Combobox.ClearTrigger class="px-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <XIcon class="h-4 w-4" />
            </Combobox.ClearTrigger>
            <Combobox.Trigger class="px-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <ChevronDownIcon class="h-4 w-4" />
            </Combobox.Trigger>
          </div>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content class="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 focus:outline-hidden z-50">
              <For each={collection().group()}>
                {([type, group]) => (
                  <Combobox.ItemGroup>
                    <Combobox.ItemGroupLabel class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700">
                      {type}
                    </Combobox.ItemGroupLabel>
                    <For each={group}>
                      {(item) => (
                        <Combobox.Item
                          item={item}
                          class="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 data-highlighted:bg-gray-50 dark:data-highlighted:bg-gray-700 transition-colors"
                        >
                          <Combobox.ItemText class="block truncate">
                            {item.label}
                          </Combobox.ItemText>
                          <Combobox.ItemIndicator class="absolute inset-y-0 pr-3 text-blue-600 dark:text-blue-400">
                            ✓
                          </Combobox.ItemIndicator>
                        </Combobox.Item>
                      )}
                    </For>
                  </Combobox.ItemGroup>
                )}
              </For>
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </div>
  );
}
