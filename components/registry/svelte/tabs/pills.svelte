<script>
  import { Tabs } from "@ark-ui/svelte/tabs";

  const tabs = [
    {
      value: "tab1",
      label: "Orders",
      content: "Manage all incoming and completed orders.",
    },
    {
      value: "tab2",
      label: "Customers",
      content: "View customer profiles and contact details.",
    },
    {
      value: "tab3",
      label: "Reports",
      content: "Generate sales and performance reports.",
    },
  ];
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
>
  <Tabs.Root defaultValue="tab1" class="w-full flex flex-col items-center">
    <Tabs.List class="flex gap-4 mb-8">
      {#each tabs as tab}
        <Tabs.Trigger
          value={tab.value}
          class="px-6 py-2 text-sm font-medium text-gray-600 rounded-full transition-all data-selected:bg-gray-900 data-selected:text-white hover:text-gray-800 dark:text-gray-300 dark:data-selected:bg-gray-100 dark:data-selected:text-gray-900 dark:hover:text-gray-100"
        >
          {tab.label}
        </Tabs.Trigger>
      {/each}
    </Tabs.List>

    {#each tabs as tab}
      <Tabs.Content
        value={tab.value}
        class="text-center text-gray-600 dark:text-gray-300"
      >
        {tab.content}
      </Tabs.Content>
    {/each}
  </Tabs.Root>
</div>
