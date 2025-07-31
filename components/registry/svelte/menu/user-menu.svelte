<script lang="ts">
  import { Menu } from "@ark-ui/svelte/menu";
  import {
    ChevronDown,
    User,
    Settings,
    CreditCard,
    HelpCircle,
    LogOut,
  } from "lucide-svelte";
  import { Portal } from "@ark-ui/svelte/portal";
</script>

<div class="flex items-center justify-center min-h-32">
  <Menu.Root>
    <Menu.Trigger
      class="inline-flex items-center gap-3 px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
    >
      <div
        class="w-6 h-6 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold"
      >
        JD
      </div>
      <span>John Doe</span>
      <ChevronDown class="w-4 h-4" />
    </Menu.Trigger>
    <Portal>
      <Menu.Positioner class="z-50">
        <Menu.Content
          class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1 min-w-56 focus-visible:outline-hidden"
        >
          <div class="px-3 py-2 border-b border-gray-200 dark:border-gray-700">
            <div class="text-sm font-medium text-gray-900 dark:text-gray-100">
              John Doe
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400">
              john@example.com
            </div>
          </div>
          <Menu.Item
            value="profile"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
          >
            <User class="w-4 h-4" />
            Profile
          </Menu.Item>
          <Menu.Item
            value="settings"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
          >
            <Settings class="w-4 h-4" />
            Settings
          </Menu.Item>
          <Menu.Item
            value="billing"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
          >
            <CreditCard class="w-4 h-4" />
            Billing
          </Menu.Item>
          <Menu.Separator
            class="my-1 h-px border-gray-200 dark:border-gray-700"
          />
          <Menu.Item
            value="help"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
          >
            <HelpCircle class="w-4 h-4" />
            Help & Support
          </Menu.Item>
          <Menu.Separator
            class="my-1 h-px border-gray-200 dark:border-gray-700"
          />
          <Menu.Item
            value="logout"
            class="flex items-center gap-3 px-3 py-2 text-sm text-red-600 dark:text-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 focus:bg-red-50 dark:focus:bg-red-900/20 cursor-pointer"
          >
            <LogOut class="w-4 h-4" />
            Log out
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>
</div>
