<template>
  <CarouselRoot
    :defaultPage="0"
    :slideCount="slides.length"
    autoplay
    class="w-full"
  >
    <div class="relative">
      <CarouselItemGroup class="overflow-hidden rounded-xl">
        <CarouselItem
          v-for="(slide, index) in slides"
          :key="index"
          :index="index"
        >
          <div class="relative h-96 lg:h-[500px]">
            <img
              :src="slide.image"
              :alt="slide.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-40" />
            <div
              class="absolute inset-0 flex items-center justify-center text-center text-white"
            >
              <div class="max-w-2xl px-6">
                <h1 class="text-4xl lg:text-6xl font-bold mb-4">
                  {{ slide.title }}
                </h1>
                <p class="text-xl lg:text-2xl mb-8 text-gray-200">
                  {{ slide.subtitle }}
                </p>
                <button
                  class="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  {{ slide.cta }}
                </button>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselItemGroup>

      <CarouselControl
        class="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none"
      >
        <CarouselPrevTrigger
          class="p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all pointer-events-auto text-white backdrop-blur-sm"
        >
          ←
        </CarouselPrevTrigger>
        <CarouselNextTrigger
          class="p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all pointer-events-auto text-white backdrop-blur-sm"
        >
          →
        </CarouselNextTrigger>
      </CarouselControl>
    </div>

    <CarouselIndicatorGroup class="flex justify-center items-center mt-6 gap-3">
      <CarouselIndicator
        v-for="(_, index) in slides"
        :key="index"
        :index="index"
        class="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 data-[current]:bg-blue-500 dark:data-[current]:bg-blue-400 data-[current]:w-8 transition-all cursor-pointer"
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

const slides = [
  {
    title: "Discover Amazing Places",
    subtitle: "Explore the world's most beautiful destinations",
    image: "https://picsum.photos/seed/hero1/1200/600",
    cta: "Start Exploring",
  },
  {
    title: "Adventure Awaits",
    subtitle: "Create memories that will last a lifetime",
    image: "https://picsum.photos/seed/hero2/1200/600",
    cta: "Book Now",
  },
  {
    title: "Journey Beyond",
    subtitle: "Experience luxury travel like never before",
    image: "https://picsum.photos/seed/hero3/1200/600",
    cta: "Learn More",
  },
];
</script>
