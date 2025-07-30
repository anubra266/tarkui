"use client";

import { Menu } from "@ark-ui/react/menu";
import { ChevronDown } from "lucide-react";
import { Portal } from "@ark-ui/react/portal";

export default function Basic() {
  return (
    <div className="flex items-center justify-center min-h-32">
      <Menu.Root>
        <Menu.Trigger className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2">
          Menu
          <ChevronDown className="w-4 h-4" />
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1 min-w-48 focus-visible:outline-hidden">
              <Menu.Item
                value="new"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                New File
              </Menu.Item>
              <Menu.Item
                value="open"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                Open
              </Menu.Item>
              <Menu.Item
                value="save"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                Save
              </Menu.Item>
              <Menu.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
              <Menu.Item
                value="exit"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                Exit
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
}
