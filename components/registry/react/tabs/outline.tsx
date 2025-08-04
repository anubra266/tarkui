"use client";

import { Tabs } from "@ark-ui/react/tabs";

const tabs = [
  {
    value: "tab1",
    label: "Inbox",
    content: "View all received messages and emails.",
  },
  {
    value: "tab2",
    label: "Drafts",
    content: "Work on unsent drafts and compositions.",
  },
  {
    value: "tab3",
    label: "Sent",
    content: "Review sent messages and deliveries.",
  },
];

export default function TabsOutline() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Tabs.Root
        defaultValue="tab2"
        className="w-full flex flex-col items-center"
      >
        <Tabs.List className="flex border border-gray-300 rounded-lg mb-8 w-fit dark:border-gray-600">
          {tabs.map((tab, index) => {
            let triggerClassName =
              "w-20 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-b-2 border-b-transparent data-selected:border-b-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-b-gray-100";

            if (index === 0) {
              triggerClassName += " rounded-l-lg";
            } else if (index === tabs.length - 1) {
              triggerClassName += " rounded-r-lg";
            } else {
              triggerClassName +=
                " border-l border-r border-gray-300 dark:border-gray-600";
            }

            return (
              <Tabs.Trigger
                key={tab.value}
                value={tab.value}
                className={triggerClassName}
              >
                {tab.label}
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>

        {tabs.map((tab) => (
          <Tabs.Content
            key={tab.value}
            value={tab.value}
            className="text-center text-gray-600 dark:text-gray-300"
          >
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}
