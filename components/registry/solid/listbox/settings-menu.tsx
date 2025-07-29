"use client";

import { Listbox, createListCollection } from "@ark-ui/solid/listbox";
import {
  Check,
  Monitor,
  Moon,
  Sun,
  Bell,
  Shield,
  Globe,
  User,
  Lock,
  Smartphone,
} from "lucide-solid";

export default function SettingsMenu() {
  const collection = createListCollection({
    items: [
      {
        id: "appearance",
        name: "Dark Theme",
        category: "Appearance",
        icon: Moon,
        value: "dark-theme",
        description: "Use dark mode interface",
      },
      {
        id: "system",
        name: "System Theme",
        category: "Appearance",
        icon: Monitor,
        value: "system-theme",
        description: "Follow system preference",
      },
      {
        id: "light",
        name: "Light Theme",
        category: "Appearance",
        icon: Sun,
        value: "light-theme",
        description: "Use light mode interface",
      },
      {
        id: "notifications",
        name: "Push Notifications",
        category: "Privacy",
        icon: Bell,
        value: "notifications",
        description: "Receive push notifications",
      },
      {
        id: "privacy",
        name: "Privacy Mode",
        category: "Privacy",
        icon: Shield,
        value: "privacy-mode",
        description: "Enhanced privacy protection",
      },
      {
        id: "public",
        name: "Public Profile",
        category: "Account",
        icon: Globe,
        value: "public-profile",
        description: "Make profile publicly visible",
      },
      {
        id: "two-factor",
        name: "Two-Factor Auth",
        category: "Security",
        icon: Lock,
        value: "two-factor",
        description: "Enable 2FA security",
      },
      {
        id: "mobile",
        name: "Mobile Sync",
        category: "Sync",
        icon: Smartphone,
        value: "mobile-sync",
        description: "Sync with mobile devices",
      },
    ],
  });

  const getIconColor = (value: string) => {
    switch (value) {
      case "dark-theme":
        return "text-slate-600 dark:text-slate-400";
      case "system-theme":
        return "text-blue-600 dark:text-blue-400";
      case "light-theme":
        return "text-yellow-600 dark:text-yellow-400";
      case "notifications":
        return "text-green-600 dark:text-green-400";
      case "privacy-mode":
        return "text-purple-600 dark:text-purple-400";
      case "public-profile":
        return "text-indigo-600 dark:text-indigo-400";
      case "two-factor":
        return "text-red-600 dark:text-red-400";
      case "mobile-sync":
        return "text-cyan-600 dark:text-cyan-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  const groupedItems = collection.items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof collection.items>);

  return (
    <div class="flex items-center justify-center min-h-32">
      <Listbox.Root
        collection={collection}
        selectionMode="multiple"
        defaultValue={["dark-theme", "notifications", "two-factor"]}
        class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"
      >
        <Listbox.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Settings Preferences
        </Listbox.Label>
        <div class="text-xs text-gray-500 dark:text-gray-400 mb-3">
          Configure your application settings
        </div>
        <Listbox.Content class="bg-[var(--listbox-bg)] border border-[var(--listbox-border)] rounded-lg px-1 py-2 w-96 max-h-80 overflow-y-auto shadow-lg">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category}>
              <div class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {category}
              </div>
              {items.map((setting) => {
                const Icon = setting.icon;
                return (
                  <Listbox.Item
                    key={setting.value}
                    item={setting}
                    class="flex items-center justify-between px-3 py-3 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-[highlighted]:bg-gray-100 dark:data-[highlighted]:bg-gray-800 data-[selected]:bg-blue-50 dark:data-[selected]:bg-blue-900/20 data-[selected]:text-blue-700 dark:data-[selected]:text-blue-300 transition-colors"
                  >
                    <div class="flex items-center gap-3 flex-1">
                      <Icon class={`w-5 h-5 ${getIconColor(setting.value)}`} />
                      <Listbox.ItemText class="flex-1">
                        <div class="flex flex-col">
                          <span class="font-medium">{setting.name}</span>
                          <span class="text-xs text-gray-500 dark:text-gray-400 font-normal">
                            {setting.description}
                          </span>
                        </div>
                      </Listbox.ItemText>
                    </div>
                    <Listbox.ItemIndicator>
                      <div class="w-4 h-4 rounded border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center bg-blue-600 dark:bg-blue-400">
                        <Check class="w-2.5 h-2.5 text-white" />
                      </div>
                    </Listbox.ItemIndicator>
                  </Listbox.Item>
                );
              })}
              {category !== "Sync" && (
                <div class="h-px bg-gray-200 dark:bg-gray-700 mx-2 my-2" />
              )}
            </div>
          ))}
        </Listbox.Content>
      </Listbox.Root>
    </div>
  );
}
