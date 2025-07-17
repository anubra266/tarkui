<script setup>
import { Avatar } from "@ark-ui/vue/avatar";
</script>

<template>
  <div class="relative">
    <Avatar.Root class="w-16 h-16">
      <Avatar.Fallback
        class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700 font-semibold text-lg flex items-center justify-center rounded-2xl"
      >
        AB
      </Avatar.Fallback>
      <Avatar.Image
        src="https://i.pravatar.cc/300"
        alt="avatar"
        class="w-full h-full object-cover rounded-2xl"
      />
    </Avatar.Root>
    <!-- Minimal green status indicator -->
    <div
      class="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"
    ></div>
  </div>
</template>
