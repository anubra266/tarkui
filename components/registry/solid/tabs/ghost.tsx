import { Tabs } from "@ark-ui/solid/tabs";
import { For } from "solid-js";

const tabs = [
  {
    value: "tab1",
    label: "Files",
    content: "Browse and manage all your documents.",
  },
  {
    value: "tab2",
    label: "History",
    content: "View recent activity and changes.",
  },
  {
    value: "tab3",
    label: "Security",
    content: "Manage permissions and access controls.",
  },
];

export default function TabsGhost() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Tabs.Root defaultValue="tab1" class="w-full flex flex-col items-center">
        <Tabs.List class="flex gap-4 mb-8">
          <For each={tabs}>
            {(tab) => (
              <Tabs.Trigger
                value={tab.value}
                class="px-4 py-2 text-sm font-medium text-gray-600 rounded-md transition-all data-selected:bg-gray-200 data-selected:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:data-selected:bg-gray-700 dark:data-selected:text-gray-100 dark:hover:bg-gray-700"
              >
                {tab.label}
              </Tabs.Trigger>
            )}
          </For>
        </Tabs.List>

        <For each={tabs}>
          {(tab) => (
            <Tabs.Content
              value={tab.value}
              class="text-center text-gray-600 dark:text-gray-300"
            >
              {tab.content}
            </Tabs.Content>
          )}
        </For>
      </Tabs.Root>
    </div>
  );
}
