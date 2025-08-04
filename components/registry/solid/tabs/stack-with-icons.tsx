import { Tabs } from "@ark-ui/solid/tabs";
import { For, createMemo } from "solid-js";
import { User, CreditCard, Shield } from "lucide-solid";

const tabs = [
  {
    value: "tab1",
    label: "Profile",
    icon: User,
    content: "Update your personal information and avatar.",
  },
  {
    value: "tab2",
    label: "Billing",
    icon: CreditCard,
    content: "Manage subscriptions and payment methods.",
  },
  {
    value: "tab3",
    label: "Privacy",
    icon: Shield,
    content: "Configure data protection and security.",
  },
];

export default function TabsStackWithIcons() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Tabs.Root
        defaultValue="tab1"
        class="w-full flex flex-col items-center max-w-md"
      >
        <Tabs.List class="w-full flex justify-center gap-0.5 mb-0 before:bg-gray-200 dark:before:bg-gray-600 relative before:absolute before:inset-x-0 before:bottom-0 before:h-px">
          <For each={tabs}>
            {(tab) => {
              const Icon = createMemo(() => tab.icon);
              return (
                <Tabs.Trigger
                  value={tab.value}
                  class="flex items-center gap-2 bg-gray-100 rounded-t-lg border border-gray-200 border-b-0 py-2 px-6 text-sm font-medium text-gray-600 hover:text-gray-700 transition-colors data-selected:text-gray-900 data-selected:bg-white data-selected:border-b-0 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:bg-gray-800 data-selected:z-10"
                >
                  <Icon() size={16} />
                  {tab.label}
                </Tabs.Trigger>
              );
            }}
          </For>
        </Tabs.List>

        <div class="w-full">
          <For each={tabs}>
            {(tab) => (
              <Tabs.Content
                value={tab.value}
                class="p-4 text-center text-gray-600 dark:text-gray-300 text-sm"
              >
                {tab.content}
              </Tabs.Content>
            )}
          </For>
        </div>
      </Tabs.Root>
    </div>
  );
}