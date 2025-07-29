<script lang="ts">
  import { HoverCard } from "@ark-ui/svelte/hover-card";
  import { Portal } from "@ark-ui/svelte/portal";
  import { MapPin, Calendar, Users } from "lucide-svelte";
</script>

<HoverCard.Root>
  <HoverCard.Trigger
    class="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
  >
    <img
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      alt="John Doe"
      class="w-6 h-6 rounded-full"
    />
    <span class="text-sm font-medium">@johndoe</span>
  </HoverCard.Trigger>

  <Portal>
    <HoverCard.Positioner>
      <HoverCard.Content
        class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 w-80"
      >
        <div class="space-y-4">
          <!-- Header -->
          <div class="flex items-start gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
              alt="John Doe"
              class="w-12 h-12 rounded-full"
            />
            <div class="flex-1 min-w-0">
              <h3
                class="text-lg font-semibold text-gray-900 dark:text-gray-100"
              >
                John Doe
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">@johndoe</p>
            </div>
            <button
              class="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Follow
            </button>
          </div>

          <!-- Bio -->
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Frontend developer passionate about creating beautiful and
            accessible user interfaces. Love working with React, TypeScript, and
            modern CSS.
          </p>

          <!-- Stats -->
          <div class="flex items-center gap-4 text-sm">
            <div class="flex items-center gap-1">
              <Users class="w-4 h-4 text-gray-400 dark:text-gray-500" />
              <span class="font-medium text-gray-900 dark:text-gray-100"
                >2.1k</span
              >
              <span class="text-gray-500 dark:text-gray-400">followers</span>
            </div>
            <div class="flex items-center gap-1">
              <span class="font-medium text-gray-900 dark:text-gray-100"
                >345</span
              >
              <span class="text-gray-500 dark:text-gray-400">following</span>
            </div>
          </div>

          <!-- Location and Joined -->
          <div
            class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
          >
            <div class="flex items-center gap-1">
              <MapPin class="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <div class="flex items-center gap-1">
              <Calendar class="w-4 h-4" />
              <span>Joined March 2020</span>
            </div>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard.Positioner>
  </Portal>
</HoverCard.Root>
