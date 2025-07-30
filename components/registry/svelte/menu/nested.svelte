<script lang="ts">
  import { Menu } from "@ark-ui/svelte/menu";
  import {
    ChevronDown,
    ChevronRight,
    FileText,
    FolderOpen,
    Settings,
    User,
    Bell,
    Shield,
  } from "lucide-svelte";
  import { Portal } from "@ark-ui/svelte/portal";
</script>

<div class="flex items-center justify-center min-h-32">
  <Menu.Root>
    <Menu.Trigger
      class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
    >
      File
      <ChevronDown class="w-4 h-4" />
    </Menu.Trigger>
    <Portal>
      <Menu.Positioner>
        <Menu.Content
          class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1 min-w-48 focus-visible:outline-hidden"
        >
          <Menu.Item
            value="new"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
          >
            <FileText class="w-4 h-4" />
            New File
          </Menu.Item>
          <Menu.Item
            value="open"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
          >
            <FolderOpen class="w-4 h-4" />
            Open
          </Menu.Item>
          <Menu.Root>
            <Menu.TriggerItem
              class="flex items-center justify-between gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
            >
              <div class="flex items-center gap-3">
                <Settings class="w-4 h-4" />
                Preferences
              </div>
              <ChevronRight class="w-4 h-4" />
            </Menu.TriggerItem>
            <Portal>
              <Menu.Positioner>
                <Menu.Content
                  class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1 min-w-44 focus-visible:outline-hidden"
                >
                  <Menu.Item
                    value="account"
                    class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
                  >
                    <User class="w-4 h-4" />
                    Account
                  </Menu.Item>
                  <Menu.Item
                    value="notifications"
                    class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
                  >
                    <Bell class="w-4 h-4" />
                    Notifications
                  </Menu.Item>
                  <Menu.Item
                    value="privacy"
                    class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
                  >
                    <Shield class="w-4 h-4" />
                    Privacy
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>
</div>
