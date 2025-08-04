<script>
  import { Tabs } from "@ark-ui/svelte/tabs";
  import { BarChart3, Users, Settings } from "lucide-svelte";

  const tabs = [
    {
      value: "tab1",
      icon: BarChart3,
      content: "View charts and business metrics.",
    },
    {
      value: "tab2",
      icon: Users,
      content: "Manage team members and roles.",
    },
    {
      value: "tab3",
      icon: Settings,
      content: "Configure system preferences.",
    },
  ];
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
>
  <Tabs.Root defaultValue="tab1" class="w-full flex flex-col items-center">
    <Tabs.List
      class="flex gap-1 p-1 bg-gray-100 rounded-lg dark:bg-gray-700 w-fit mb-8"
    >
      {#each tabs as tab}
        {@const Icon = tab.icon}
        <Tabs.Trigger
          value={tab.value}
          class="p-3 text-gray-600 rounded-md transition-all data-selected:bg-white data-selected:text-gray-900 data-selected:shadow-sm dark:text-gray-300 dark:data-selected:bg-gray-800 dark:data-selected:text-gray-100"
        >
          <Icon size={20} />
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
