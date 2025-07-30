<template>
  <CarouselRoot
    :defaultPage="0"
    :slideCount="images.length"
    class="max-w-md mx-auto"
  >
    <CarouselControl class="flex items-center justify-between mb-4">
      <CarouselPrevTrigger
        class="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
      >
        Previous
      </CarouselPrevTrigger>
      <CarouselNextTrigger
        class="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
      >
        Next
      </CarouselNextTrigger>
    </CarouselControl>

    <CarouselItemGroup class="overflow-hidden rounded-lg">
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
        class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 transition-colors cursor-pointer"
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
  CarouselItemGroup,
  CarouselItem,
  CarouselIndicatorGroup,
  CarouselIndicator,
} from "@ark-ui/vue/carousel";

const images = Array.from(
  { length: 5 },
  (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`
);
</script>
