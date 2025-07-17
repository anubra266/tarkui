<template>
  <CarouselRoot
    :defaultPage="0"
    :slideCount="images.length"
    autoplay
    class="max-w-md mx-auto"
  >
    <CarouselControl class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <CarouselPrevTrigger
          class="px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          ←
        </CarouselPrevTrigger>
        <CarouselNextTrigger
          class="px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          →
        </CarouselNextTrigger>
      </div>

      <CarouselAutoplayTrigger
        class="group px-3 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 rounded-lg transition-colors"
      >
        <Play class="w-4 h-4 group-data-[pressed]:hidden" />
        <Pause class="w-4 h-4 hidden group-data-[pressed]:block" />
      </CarouselAutoplayTrigger>
    </CarouselControl>

    <CarouselItemGroup class="overflow-hidden rounded-lg shadow-lg">
      <CarouselItem
        v-for="(image, index) in images"
        :key="index"
        :index="index"
      >
        <img
          :src="image"
          :alt="`Slide ${index + 1}`"
          class="w-full h-64 object-cover"
        />
      </CarouselItem>
    </CarouselItemGroup>

    <CarouselIndicatorGroup class="flex justify-center items-center mt-4 gap-2">
      <CarouselIndicator
        v-for="(_, index) in images"
        :key="index"
        :index="index"
        class="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 data-[current]:bg-blue-500 dark:data-[current]:bg-blue-400 transition-colors cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500"
      />
    </CarouselIndicatorGroup>
  </CarouselRoot>
</template>

<script setup lang="ts">
import {
  CarouselRoot,
  CarouselControl,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselAutoplayTrigger,
  CarouselItemGroup,
  CarouselItem,
  CarouselIndicatorGroup,
  CarouselIndicator,
} from "@ark-ui/vue/carousel";
import { Play, Pause } from "lucide-vue-next";

const images = Array.from(
  { length: 5 },
  (_, i) => `https://picsum.photos/seed/${i + 10}/500/300`
);
</script>
