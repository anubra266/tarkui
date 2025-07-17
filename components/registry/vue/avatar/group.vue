<script setup>
import { Avatar } from "@ark-ui/vue/avatar";

const avatars = [
  { src: "https://i.pravatar.cc/300", fallback: "JD" },
  { src: "https://i.pravatar.cc/301", fallback: "SM" },
  { src: "https://i.pravatar.cc/302", fallback: "AB" },
  { fallback: "KL" }, // No src, will show fallback
];
</script>

<template>
  <div class="flex -space-x-2">
    <Avatar.Root
      v-for="(avatar, index) in avatars"
      :key="index"
      class="w-12 h-12 relative z-10"
    >
      <Avatar.Fallback
        class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm flex items-center justify-center rounded-full"
      >
        {{ avatar.fallback }}
      </Avatar.Fallback>
      <Avatar.Image
        v-if="avatar.src"
        :src="avatar.src"
        alt="avatar"
        class="w-full h-full object-cover rounded-full"
      />
    </Avatar.Root>
  </div>
</template>
