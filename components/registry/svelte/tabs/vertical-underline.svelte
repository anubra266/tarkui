<script>
  import { Tabs } from "@ark-ui/svelte/tabs";

  const tabs = [
    {
      value: "tab1",
      label: "Overview",
      content: "Dashboard with key metrics and insights.",
    },
    {
      value: "tab2",
      label: "Projects",
      content: "Manage active development projects.",
    },
    {
      value: "tab3",
      label: "Packages",
      content: "View and organize package dependencies.",
    },
  ];
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-start justify-center"
>
  <Tabs.Root defaultValue="tab3" class="flex gap-4 w-full">
    <Tabs.List
      class="flex flex-col relative border-l border-gray-200 dark:border-gray-700 w-fit"
    >
      {#each tabs as tab}
        <Tabs.Trigger
          value={tab.value}
          class="text-left px-2.5 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-l-2 border-transparent data-selected:border-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-gray-100"
        >
          {tab.label}
        </Tabs.Trigger>
      {/each}
    </Tabs.List>

    <div
      class="flex-1 border border-gray-200 rounded-lg p-4 dark:border-gray-700"
    >
      {#each tabs as tab}
        <Tabs.Content
          value={tab.value}
          class="text-gray-600 dark:text-gray-300"
        >
          {tab.content}
        </Tabs.Content>
      {/each}
    </div>
  </Tabs.Root>
</div>
