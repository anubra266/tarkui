<script setup lang="ts">
import { HoverCard } from "@ark-ui/vue/hover-card";

import { ExternalLink, Calendar, Eye } from "lucide-vue-next";
</script>

<template>
  <div class="max-w-md mx-auto p-6 space-y-4">
    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
      Check out this amazing article about
      <HoverCard.Root>
        <HoverCard.Trigger class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline cursor-pointer">
          building modern web applications
        </HoverCard.Trigger>

        <Teleport to="body">
          <HoverCard.Positioner>
            <HoverCard.Content class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden w-96">
              <!-- Preview Image -->
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
                alt="Modern web development"
                class="w-full h-48 object-cover"
              />

              <!-- Content -->
              <div class="p-4 space-y-3">
                <div class="space-y-2">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                    Building Modern Web Applications with React and TypeScript
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    Learn how to create scalable and maintainable web applications using the latest tools and best practices in modern web development.
                  </p>
                </div>

                <!-- Meta Info -->
                <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div class="flex items-center gap-3">
                    <div class="flex items-center gap-1">
                      <Calendar class="w-3 h-3" />
                      <span>Dec 15, 2023</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <Eye class="w-3 h-3" />
                      <span>12.4k views</span>
                    </div>
                  </div>
                </div>

                <!-- Source -->
                <div class="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div class="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=20&h=20&fit=crop&crop=face"
                      alt="Author"
                      class="w-5 h-5 rounded-full"
                    />
                    <span class="text-xs text-gray-600 dark:text-gray-400">
                      dev.to/johndoe
                    </span>
                  </div>
                  <ExternalLink class="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </HoverCard.Content>
                  </HoverCard.Positioner>
      </Teleport>
      </HoverCard.Root>
      that covers all the essential concepts you need to know.
    </p>
  </div>
</template> 