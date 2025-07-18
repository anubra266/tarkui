<script>
  import { Portal } from "@ark-ui/svelte/portal";
  import { Combobox, useListCollection } from "@ark-ui/svelte/combobox";
  import { Highlight } from "@ark-ui/svelte/highlight";
  import { useFilter } from "@ark-ui/svelte/locale";
  import { ChevronDownIcon, XIcon } from "lucide-svelte";

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: ["React", "Solid", "Vue", "Svelte", "Angular", "Preact"],
    filter: contains,
  });

  const handleInputChange = (details) => {
    filter(details.inputValue);
  };
</script>

<div class="w-full max-w-sm">
  <Combobox.Root {collection} onInputValueChange={handleInputChange}>
    <Combobox.Label
      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      Framework
    </Combobox.Label>
    <Combobox.Control class="relative">
      <Combobox.Input
        class="w-full px-3 py-2 pr-20 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
        placeholder="Search frameworks..."
      />
      <div class="absolute inset-y-0 right-0 flex items-center">
        <Combobox.ClearTrigger
          class="px-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <XIcon class="h-4 w-4" />
        </Combobox.ClearTrigger>
        <Combobox.Trigger
          class="px-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <ChevronDownIcon class="h-4 w-4" />
        </Combobox.Trigger>
      </div>
    </Combobox.Control>
    <Portal>
      <Combobox.Positioner>
        <Combobox.Content
          class="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 focus:outline-none z-50"
        >
          <Combobox.ItemGroup>
            <Combobox.ItemGroupLabel
              class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Frameworks
            </Combobox.ItemGroupLabel>
            {#each collection.items as item (item)}
              <Combobox.Item
                {item}
                class="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 data-[highlighted]:bg-gray-50 dark:data-[highlighted]:bg-gray-700 transition-colors"
              >
                <Combobox.ItemText class="block truncate">
                  <Combobox.Context let:context>
                    <Highlight
                      text={item}
                      query={context.inputValue}
                      ignoreCase
                      class="[&_mark]:bg-blue-100 [&_mark]:dark:bg-blue-900/50 [&_mark]:text-blue-900 [&_mark]:dark:text-blue-100 [&_mark]:font-semibold [&_mark]:px-0.5 [&_mark]:py-0.5 [&_mark]:rounded"
                    />
                  </Combobox.Context>
                </Combobox.ItemText>
                <Combobox.ItemIndicator
                  class="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-600 dark:text-blue-400"
                >
                  ✓
                </Combobox.ItemIndicator>
              </Combobox.Item>
            {/each}
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Positioner>
    </Portal>
  </Combobox.Root>
</div>
