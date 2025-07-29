<script setup lang="ts">
import { Menu } from "@ark-ui/vue/menu";
import { ChevronDown } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-center min-h-32">
    <Menu.Root>
      <Menu.Trigger
        class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
      >
        Options
        <ChevronDown class="w-4 h-4" />
      </Menu.Trigger>
      <Teleport to="body">
        <Menu.Positioner>
          <Menu.Content
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1 min-w-48 focus-visible:outline-none"
          >
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel
                class="px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                File
              </Menu.ItemGroupLabel>
              <Menu.Item
                value="new"
                class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                New Document
              </Menu.Item>
              <Menu.Item
                value="open"
                class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                Open
              </Menu.Item>
              <Menu.Item
                value="save"
                class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                Save
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.Separator class="my-1 h-px bg-gray-200 dark:bg-gray-700" />
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel
                class="px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Edit
              </Menu.ItemGroupLabel>
              <Menu.Item
                value="undo"
                class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                Undo
              </Menu.Item>
              <Menu.Item
                value="redo"
                class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                Redo
              </Menu.Item>
              <Menu.Item
                value="copy"
                class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
              >
                Copy
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Teleport>
    </Menu.Root>
  </div>
</template>
