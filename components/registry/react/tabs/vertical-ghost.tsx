"use client";

import { Tabs } from "@ark-ui/react/tabs";

const tabs = [
  {
    value: "tab1",
    label: "Overview",
    content: "Main dashboard with system overview.",
  },
  {
    value: "tab2",
    label: "Projects",
    content: "Browse active projects and repositories.",
  },
  {
    value: "tab3",
    label: "Packages",
    content: "Manage dependencies and libraries.",
  },
];

export default function TabsVerticalGhost() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-start justify-center">
      <Tabs.Root defaultValue="tab1" className="flex gap-4 w-full">
        <Tabs.List className="flex flex-col gap-2 w-fit">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="text-left px-2.5 py-2 text-sm font-medium text-gray-600 rounded-md transition-all data-selected:bg-gray-200 data-selected:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:data-selected:bg-gray-700 dark:data-selected:text-gray-100 dark:hover:bg-gray-700"
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <div className="flex-1 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
          {tabs.map((tab) => (
            <Tabs.Content
              key={tab.value}
              value={tab.value}
              className="text-gray-600 dark:text-gray-300"
            >
              {tab.content}
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
}
