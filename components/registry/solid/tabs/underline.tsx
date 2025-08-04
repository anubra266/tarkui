import { Tabs } from "@ark-ui/solid/tabs";
import { For } from "solid-js";

const tabs = [
  {
    value: "tab1",
    label: "Posts",
    content: "Create and manage blog posts and articles.",
  },
  {
    value: "tab2",
    label: "Media",
    content: "Upload and organize images and videos.",
  },
  {
    value: "tab3",
    label: "Pages",
    content: "Build static pages and landing content.",
  },
];

export default function TabsUnderline() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Tabs.Root defaultValue="tab1" class="w-full flex flex-col items-center">
        <Tabs.List class="flex relative border-b border-gray-200 dark:border-gray-700 mb-8 w-fit">
          <For each={tabs}>
            {(tab) => (
              <Tabs.Trigger
                value={tab.value}
                class="w-18 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-b-2 border-transparent data-selected:border-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-gray-100"
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
