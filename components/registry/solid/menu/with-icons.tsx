"use client";

import { Menu } from "@ark-ui/solid/menu";
import {
  ChevronDown,
  FileText,
  FolderOpen,
  Save,
  Copy,
  Scissors,
  Trash2,
} from "lucide-solid";
import { Portal } from "solid-js/web";

export default function WithIcons() {
  return (
    <div class="flex items-center justify-center min-h-32">
      <Menu.Root>
        <Menu.Trigger class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2">
          Actions
          <ChevronDown class="w-4 h-4" />
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1 min-w-48 focus-visible:outline-hidden">
              <Menu.Item
                value="new"
                class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <FileText class="w-4 h-4" />
                New Document
              </Menu.Item>
              <Menu.Item
                value="open"
                class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <FolderOpen class="w-4 h-4" />
                Open Folder
              </Menu.Item>
              <Menu.Item
                value="save"
                class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <Save class="w-4 h-4" />
                Save
              </Menu.Item>
              <Menu.Separator class="my-1 h-px bg-gray-200 dark:bg-gray-700" />
              <Menu.Item
                value="copy"
                class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <Copy class="w-4 h-4" />
                Copy
              </Menu.Item>
              <Menu.Item
                value="cut"
                class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                <Scissors class="w-4 h-4" />
                Cut
              </Menu.Item>
              <Menu.Separator class="my-1 h-px bg-gray-200 dark:bg-gray-700" />
              <Menu.Item
                value="delete"
                class="flex items-center gap-3 px-3 py-2 text-sm text-red-600 dark:text-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 focus:bg-red-50 dark:focus:bg-red-900/20 cursor-pointer"
              >
                <Trash2 class="w-4 h-4" />
                Delete
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
}
