<template>
  <CarouselRoot
    :defaultPage="0"
    :slideCount="cards.length"
    class="max-w-lg mx-auto"
  >
    <CarouselControl class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white">
        Featured Destinations
      </h2>
      <div class="flex gap-2">
        <CarouselPrevTrigger
          class="p-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full shadow-md border transition-colors"
        >
          ←
        </CarouselPrevTrigger>
        <CarouselNextTrigger
          class="p-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full shadow-md border transition-colors"
        >
          →
        </CarouselNextTrigger>
      </div>
    </CarouselControl>

    <CarouselItemGroup class="overflow-hidden">
      <CarouselItem v-for="(card, index) in cards" :key="index" :index="index">
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <img
            :src="card.image"
            :alt="card.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
            >
              {{ card.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              {{ card.description }}
            </p>
          </div>
        </div>
      </CarouselItem>
    </CarouselItemGroup>

    <CarouselIndicatorGroup class="flex justify-center items-center mt-6 gap-2">
      <CarouselIndicator
        v-for="(_, index) in cards"
        :key="index"
        :index="index"
        class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-[current]:bg-blue-500 dark:data-[current]:bg-blue-400 data-[current]:w-6 transition-all cursor-pointer"
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

const cards = [
  {
    id: 1,
    title: "Mountain Adventure",
    description: "Explore breathtaking mountain landscapes",
    image: "https://picsum.photos/seed/30/400/250",
  },
  {
    id: 2,
    title: "Ocean Views",
    description: "Discover pristine coastal destinations",
    image: "https://picsum.photos/seed/31/400/250",
  },
  {
    id: 3,
    title: "Forest Escape",
    description: "Immerse yourself in nature's tranquility",
    image: "https://picsum.photos/seed/32/400/250",
  },
  {
    id: 4,
    title: "Urban Explorer",
    description: "Experience vibrant city culture",
    image: "https://picsum.photos/seed/33/400/250",
  },
];
</script>
