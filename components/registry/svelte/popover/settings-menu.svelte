<script lang="ts">
  import { Popover } from "@ark-ui/svelte/popover";
  import { Portal } from "@ark-ui/svelte/portal";
  import {
    Settings,
    Moon,
    Bell,
    Shield,
    Globe,
    HelpCircle,
    Palette,
  } from "lucide-svelte";

  let settings = {
    darkMode: false,
    notifications: true,
    twoFactor: true,
  };

  const toggleSetting = (key: keyof typeof settings) => {
    settings[key] = !settings[key];
  };
</script>

<Popover.Root modal>
  <Popover.Trigger
    class="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    <Settings size={20} />
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content
        class="z-50 w-64 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
      >
        <Popover.Arrow
          class="[--arrow-size:12px] [--arrow-background:theme(colors.white)] dark:[--arrow-background:theme(colors.gray.800)]"
        >
          <Popover.ArrowTip
            class="border-t border-l border-gray-200 dark:border-gray-700"
          />
        </Popover.Arrow>
        <!-- Header -->
        <div class="border-b border-gray-200 dark:border-gray-700 p-3">
          <Popover.Title class="font-medium text-gray-900 dark:text-gray-100"
            >Settings</Popover.Title
          >
        </div>

        <!-- Settings List -->
        <div class="p-2">
          <div class="space-y-1">
            <!-- Dark Mode Toggle -->
            <div
              class="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div class="flex items-center gap-2">
                <Moon size={16} class="text-gray-500 dark:text-gray-400" />
                <span class="text-sm text-gray-700 dark:text-gray-200"
                  >Dark Mode</span
                >
              </div>
              <button
                on:click={() => toggleSetting("darkMode")}
                class="relative inline-flex h-5 w-8 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 {settings.darkMode
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-600'}"
              >
                <span
                  class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform {settings.darkMode
                    ? 'translate-x-4'
                    : 'translate-x-1'}"
                />
              </button>
            </div>

            <!-- Notifications Toggle -->
            <div
              class="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div class="flex items-center gap-2">
                <Bell size={16} class="text-gray-500 dark:text-gray-400" />
                <span class="text-sm text-gray-700 dark:text-gray-200"
                  >Notifications</span
                >
              </div>
              <button
                on:click={() => toggleSetting("notifications")}
                class="relative inline-flex h-5 w-8 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 {settings.notifications
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-600'}"
              >
                <span
                  class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform {settings.notifications
                    ? 'translate-x-4'
                    : 'translate-x-1'}"
                />
              </button>
            </div>

            <!-- Two-Factor Authentication Toggle -->
            <div
              class="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div class="flex items-center gap-2">
                <Shield size={16} class="text-gray-500 dark:text-gray-400" />
                <span class="text-sm text-gray-700 dark:text-gray-200"
                  >Two-Factor Auth</span
                >
              </div>
              <button
                on:click={() => toggleSetting("twoFactor")}
                class="relative inline-flex h-5 w-8 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 {settings.twoFactor
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-600'}"
              >
                <span
                  class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform {settings.twoFactor
                    ? 'translate-x-4'
                    : 'translate-x-1'}"
                />
              </button>
            </div>

            <hr class="my-1 border-gray-200 dark:border-gray-700" />

            <!-- Other Settings -->
            <button
              class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Globe size={16} />
              Language & Region
            </button>

            <button
              class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Palette size={16} />
              Appearance
            </button>

            <button
              class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <HelpCircle size={16} />
              Help & Support
            </button>
          </div>
        </div>

        <!-- Footer -->
        <div class="border-t border-gray-200 dark:border-gray-700 p-3">
          <p class="text-center text-xs text-gray-500 dark:text-gray-400">
            Version 2.1.0
          </p>
        </div>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>
