"use client";

import { Listbox, createListCollection } from "@ark-ui/solid/listbox";
import { Check, AlertTriangle, AlertCircle, Info } from "lucide-solid";
import { createSignal, For } from "solid-js";

export default function PriorityLevels() {
  const collection = createListCollection({
    items: [
      {
        name: "Critical",
        value: "critical",
        color: "red",
        icon: AlertCircle,
        description: "Needs immediate attention",
      },
      {
        name: "High",
        value: "high",
        color: "orange",
        icon: AlertTriangle,
        description: "Important and urgent",
      },
      {
        name: "Medium",
        value: "medium",
        color: "yellow",
        icon: Info,
        description: "Standard priority",
      },
      {
        name: "Low",
        value: "low",
        color: "green",
        icon: ArrowDown,
        description: "Can be done later",
      },
    ],
  });

  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20";
      case "orange":
        return "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20";
      case "yellow":
        return "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20";
      case "green":
        return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20";
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20";
    }
  };

  return (
    <div class="flex items-center justify-center min-h-32">
      <Listbox.Root
        collection={collection}
        defaultValue={["medium"]}
        class="[--listbox-bg:#ffffff] dark:[--listbox-bg:#111827] [--listbox-border:#e5e7eb] dark:[--listbox-border:#374151]"
      >
        <Listbox.Label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Task Priority
        </Listbox.Label>
        <Listbox.Content class="bg-(--listbox-bg) border border-(--listbox-border) rounded-lg px-1 py-2 w-64 shadow-lg">
          <For each={collection.items}>
            {(priority) => (
              <Listbox.Item
                key={priority}
                item={priority}
                class="flex items-center justify-between px-3 py-2 mx-1 rounded-md cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-800 data-disabled:opacity-50 data-disabled:cursor-not-allowed transition-colors"
              >
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                    <AlertTriangle class="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <Listbox.ItemText>{priority}</Listbox.ItemText>
                </div>
                <Listbox.ItemIndicator>
                  <Check class="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </Listbox.ItemIndicator>
              </Listbox.Item>
            )}
          </For>
        </Listbox.Content>
      </Listbox.Root>
    </div>
  );
}
