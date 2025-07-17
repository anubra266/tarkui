<template>
  <CarouselRoot
    :defaultPage="0"
    :slideCount="images.length"
    class="max-w-md mx-auto"
  >
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
  </CarouselRoot>
</template>

<script setup lang="ts">
import {
  CarouselRoot,
  CarouselItemGroup,
  CarouselItem,
} from "@ark-ui/vue/carousel";

const images = Array.from(
  { length: 4 },
  (_, i) => `https://picsum.photos/seed/${i + 50}/500/300`
);
</script>
