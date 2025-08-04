import { Tabs } from "@ark-ui/solid/tabs";
import { For } from "solid-js";

const tabs = [
  {
    value: "tab1",
    label: "Dashboard",
    content: "Main dashboard with key metrics and insights.",
  },
  {
    value: "tab2",
    label: "Analytics",
    content: "Track performance with detailed reports.",
  },
  {
    value: "tab3",
    label: "Settings",
    content: "Configure preferences and account options.",
  },
];

export default function TabsBasic() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Tabs.Root defaultValue="tab1" class="w-full flex flex-col items-center">
        <Tabs.List class="flex gap-1 p-1 bg-gray-100 rounded-lg dark:bg-gray-700 w-fit mb-8">
          <For each={tabs}>
            {(tab) => (
              <Tabs.Trigger
                value={tab.value}
                class="px-4 py-2 text-sm font-medium text-gray-600 rounded-md transition-all data-selected:bg-white data-selected:text-gray-900 data-selected:shadow-sm dark:text-gray-300 dark:data-selected:bg-gray-800 dark:data-selected:text-gray-100"
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
