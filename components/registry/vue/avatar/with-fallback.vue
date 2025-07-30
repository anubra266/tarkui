<script setup>
import { Avatar } from "@ark-ui/vue/avatar";
</script>

<template>
  <Avatar.Root class="w-16 h-16">
    <Avatar.Fallback
      class="w-full h-full bg-linear-to-br from-emerald-500 to-teal-600 text-white font-semibold text-lg flex items-center justify-center rounded-full"
    >
      JD
    </Avatar.Fallback>
    <!-- No src provided, so fallback will be displayed -->
    <Avatar.Image
      alt="avatar"
      class="w-full h-full object-cover rounded-full"
    />
  </Avatar.Root>
</template>
