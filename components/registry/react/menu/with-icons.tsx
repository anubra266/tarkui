"use client";

import { Menu } from "@ark-ui/react/menu";
import {
  ChevronDown,
  FileText,
  FolderOpen,
  Save,
  Copy,
  Scissors,
  Trash2,
} from "lucide-react";
import { Portal } from "@ark-ui/react/portal";

export default function WithIcons() {
  return (
    <div className="flex items-center justify-center min-h-32">
      <Menu.Root>
        <Menu.Trigger className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2">
          Actions
          <ChevronDown className="w-4 h-4" />
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1 min-w-48 focus-visible:outline-none">
              <Menu.Item
                value="new"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                New Document
              </Menu.Item>
              <Menu.Item
                value="open"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <FolderOpen className="w-4 h-4" />
                Open Folder
              </Menu.Item>
              <Menu.Item
                value="save"
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                Save
              </Menu.Item>
              <Menu.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
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
              <Menu.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
              <Menu.Item
                value="delete"
                className="flex items-center gap-3 px-3 py-2 text-sm text-red-600 dark:text-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 focus:bg-red-50 dark:focus:bg-red-900/20 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
}
