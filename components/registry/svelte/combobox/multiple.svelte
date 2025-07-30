<script>
  import { Portal } from "@ark-ui/svelte/portal";
  import { Combobox, useListCollection } from "@ark-ui/svelte/combobox";
  import { useFilter } from "@ark-ui/svelte/locale";
  import { ChevronDownIcon, XIcon } from "lucide-svelte";

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue",
    "Angular",
    "Svelte",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "Go",
    "Rust",
    "Docker",
    "Kubernetes",
    "AWS",
    "GraphQL",
  ];

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: skills,
    filter: contains,
  });

  const handleInputChange = (details) => {
    filter(details.inputValue);
  };
</script>

<div class="w-full max-w-lg">
  <Combobox.Root
    {collection}
    onInputValueChange={handleInputChange}
    multiple
    closeOnSelect={false}
  >
    <Combobox.Label
      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      Skills
    </Combobox.Label>

    <!-- Selected Skills Tags -->
    <Combobox.Context>
      {#snippet children(context)}
        {#if context().value.length > 0}
          <div class="flex flex-wrap gap-1.5 mb-2">
            {#each context().value as item (item)}
            <span
              class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700"
            >
              {item}
              <button
                type="button"
                on:click={() =>
                  context().setValue(context().value.filter((v) => v !== item))}
                class="hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
              >
                <XIcon class="h-3 w-3" />
              </button>
            </span>
          {/each}
        </div>
        {/if}
      {/snippet}
    </Combobox.Context>

    <Combobox.Control class="relative">
      <Combobox.Input
        class="w-full px-3 py-2 pr-20 border border-gray-300 dark:border-gray-600 rounded-md shadow-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
        placeholder="Add skills..."
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
          class="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 focus:outline-hidden z-50"
        >
          <Combobox.ItemGroup>
            <Combobox.ItemGroupLabel
              class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Available Skills
            </Combobox.ItemGroupLabel>
            {#each collection.items as item (item)}
              <Combobox.Item
                {item}
                class="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 data-highlighted:bg-gray-50 dark:data-highlighted:bg-gray-700 transition-colors"
              >
                <Combobox.ItemText class="block truncate">
                  {item}
                </Combobox.ItemText>
                <Combobox.ItemIndicator
                  class="absolute inset-y-0 pr-3 text-blue-600 dark:text-blue-400"
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
