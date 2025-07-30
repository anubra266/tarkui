<script setup>
import { Avatar } from "@ark-ui/vue/avatar";
</script>

<template>
  <div class="relative">
    <Avatar.Root class="w-16 h-16">
      <Avatar.Fallback
        class="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 text-white font-semibold text-lg flex items-center justify-center rounded-full"
      >
        JD
      </Avatar.Fallback>
      <Avatar.Image
        src="https://i.pravatar.cc/300"
        alt="avatar"
        class="w-full h-full object-cover rounded-full"
      />
    </Avatar.Root>
    <!-- Number badge -->
    <div
      class="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white font-bold text-xs flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900"
    >
      6
    </div>
  </div>
</template>
