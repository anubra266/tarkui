"use client";

import { Menu } from "@ark-ui/react/menu";
import { Copy, Scissors, ClipboardPaste, Trash2, Info } from "lucide-react";
import { Portal } from "@ark-ui/react/portal";

export default function ContextMenu() {
  return (
    <div className="flex items-center justify-center min-h-32">
      <Menu.Root>
        <Menu.ContextTrigger className="flex items-center justify-center w-64 h-32 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 text-sm cursor-context-menu">
          Right-click here for context menu
        </Menu.ContextTrigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1 min-w-48 focus-visible:outline-hidden">
              <Menu.Item
                value="copy"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                Copy
              </Menu.Item>
              <Menu.Item
                value="cut"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <Scissors className="w-4 h-4" />
                Cut
              </Menu.Item>
              <Menu.Item
                value="paste"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <ClipboardPaste className="w-4 h-4" />
                Paste
              </Menu.Item>
              <Menu.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
              <Menu.Item
                value="delete"
                className="flex items-center gap-3 px-3 py-2 text-sm text-red-600 dark:text-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 focus:bg-red-50 dark:focus:bg-red-900/20 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </Menu.Item>
              <Menu.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
              <Menu.Item
                value="properties"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <Info className="w-4 h-4" />
                Properties
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
}
