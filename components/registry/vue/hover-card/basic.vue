<script setup lang="ts">
import { HoverCard } from "@ark-ui/vue/hover-card";
</script>

<template>
  <HoverCard.Root>
    <HoverCard.Trigger
      class="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
    >
      Hover me
    </HoverCard.Trigger>

    <Teleport to="body">
      <HoverCard.Positioner>
        <HoverCard.Content
          class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-xs"
        >
          <div class="space-y-2">
            <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Hover Card
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              This is a basic hover card that appears when you hover over the
              trigger element.
            </p>
          </div>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Teleport>
  </HoverCard.Root>
</template>
