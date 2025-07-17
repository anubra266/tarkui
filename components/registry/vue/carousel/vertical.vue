<template>
  <CarouselRoot
    :defaultPage="0"
    :slideCount="images.length"
    orientation="vertical"
    class="max-h-96 w-80 mx-auto"
  >
    <div class="flex gap-4">
      <CarouselControl class="flex flex-col justify-center gap-2">
        <CarouselPrevTrigger
          class="px-2 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          ↑
        </CarouselPrevTrigger>
        <CarouselNextTrigger
          class="px-2 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          ↓
        </CarouselNextTrigger>
      </CarouselControl>

      <div class="flex-1">
        <CarouselItemGroup class="overflow-hidden rounded-lg h-80">
          <CarouselItem
            v-for="(image, index) in images"
            :key="index"
            :index="index"
          >
            <img
              :src="image"
              :alt="`Slide ${index + 1}`"
              class="w-full h-80 object-cover"
            />
          </CarouselItem>
        </CarouselItemGroup>
      </div>

      <CarouselIndicatorGroup
        class="flex flex-col justify-center items-center gap-2"
      >
        <CarouselIndicator
          v-for="(_, index) in images"
          :key="index"
          :index="index"
          class="w-2 h-8 rounded-full bg-gray-300 dark:bg-gray-600 data-[current]:bg-blue-500 dark:data-[current]:bg-blue-400 transition-colors cursor-pointer"
        />
      </CarouselIndicatorGroup>
    </div>
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
  { length: 4 },
  (_, i) => `https://picsum.photos/seed/${i + 20}/300/400`
);
</script>
