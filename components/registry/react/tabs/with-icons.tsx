"use client";

import { Tabs } from "@ark-ui/react/tabs";
import { FileText, Calendar, Bell } from "lucide-react";

const tabs = [
  {
    value: "overview",
    label: "Documents",
    icon: FileText,
    content: "Access and organize all your files and folders.",
  },
  {
    value: "projects",
    label: "Events",
    icon: Calendar,
    badge: { type: "count", value: 4 },
    content: "View upcoming meetings and scheduled appointments.",
  },
  {
    value: "packages",
    label: "Alerts",
    icon: Bell,
    badge: { type: "label", value: "Live" },
    content: "Monitor real-time notifications and system updates.",
  },
];

export default function TabsWithIcons() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <Tabs.Root
        defaultValue="overview"
        className="w-full flex flex-col items-center"
      >
        <Tabs.List className="flex gap-8 relative border-b border-gray-200 dark:border-gray-700 mb-8 w-fit">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Tabs.Trigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 px-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors data-selected:text-gray-900 relative border-b-2 border-transparent data-selected:border-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-selected:text-gray-100 dark:data-selected:border-gray-100"
              >
                <Icon className="w-4 h-4" />
                {tab.label}
                {tab.badge && (
                  <span
                    className={`flex items-center justify-center ${
                      tab.badge.type === "count"
                        ? "w-5 h-5 text-xs font-medium text-gray-600 bg-gray-200 rounded-full dark:text-gray-300 dark:bg-gray-600"
                        : "px-2 py-0.5 text-xs font-medium text-white bg-gray-600 rounded-full dark:bg-gray-400 dark:text-gray-900"
                    }`}
                  >
                    {tab.badge.value}
                  </span>
                )}
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
