<script setup>
import { Tooltip } from "@ark-ui/vue/tooltip";
import { Play, Globe } from "lucide-vue-next";
</script>

<template>
  <Tooltip.Root :openDelay="0" :closeDelay="0">
    <Tooltip.Trigger class="relative group cursor-pointer">
      <div
        class="w-64 h-36 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-600 rounded-lg overflow-hidden border border-border"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-colors"
          >
            <Play class="w-6 h-6 text-white ml-1" />
          </div>
        </div>
      </div>
    </Tooltip.Trigger>
    <Teleport to="body">
      <Tooltip.Positioner>
        <Tooltip.Content
          class="p-2 bg-popover text-popover-foreground border border-border rounded-lg shadow-lg z-50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out w-56"
        >
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <Globe
                class="w-3 h-3 text-muted-foreground mt-0.5 flex-shrink-0"
              />
              <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-xs">Product Demo</h4>
                <p class="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                  Learn platform features in this walkthrough.
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2 text-xs text-muted-foreground">
              <span>4:32</span>
              <span>•</span>
              <span>720p</span>
              <span>•</span>
              <span>2.1M</span>
            </div>
          </div>
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Teleport>
  </Tooltip.Root>
</template>
