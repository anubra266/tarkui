<template>
  <CarouselRoot
    :defaultPage="0"
    :slideCount="brands.length"
    loop
    class="max-w-4xl mx-auto"
  >
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Trusted by Industry Leaders
      </h2>
      <p class="text-gray-600 dark:text-gray-400">
        Join thousands of companies that rely on our solutions
      </p>
    </div>

    <CarouselItemGroup class="overflow-hidden">
      <CarouselItem
        v-for="(brand, index) in brands"
        :key="index"
        :index="index"
      >
        <picture class="flex items-center justify-center p-8">
          <img
            :alt="brand.name"
            :src="`https://cdn.brandfetch.io/${brand.logo}?c=${process.env.NEXT_PUBLIC_BRANDFETCH_API_KEY}`"
            class="dark:hidden max-h-16 w-auto drop-shadow-lg"
          />
          <img
            :alt="brand.name"
            :src="`https://cdn.brandfetch.io/${brand.dark}?c=${process.env.NEXT_PUBLIC_BRANDFETCH_API_KEY}`"
            class="hidden dark:block max-h-16 w-auto drop-shadow-lg"
          />
        </picture>
      </CarouselItem>
    </CarouselItemGroup>

    <div class="flex items-center justify-center mt-6 gap-4">
      <CarouselPrevTrigger
        class="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
      >
        ←
      </CarouselPrevTrigger>

      <CarouselIndicatorGroup class="flex gap-2">
        <CarouselIndicator
          v-for="(_, index) in brands"
          :key="index"
          :index="index"
          class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-[current]:bg-blue-500 dark:data-[current]:bg-blue-400 transition-colors cursor-pointer"
        />
      </CarouselIndicatorGroup>

      <CarouselNextTrigger
        class="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
      >
        →
      </CarouselNextTrigger>
    </div>
  </CarouselRoot>
</template>

<script setup lang="ts">
import {
  CarouselRoot,
  CarouselItemGroup,
  CarouselItem,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselIndicatorGroup,
  CarouselIndicator,
} from "@ark-ui/vue/carousel";

const brands = [
  {
    name: "Apple",
    logo: "apple.com/w/419/h/512/logo",
    dark: "apple.com/w/419/h/512/theme/light/logo",
  },
  {
    name: "Figma",
    logo: "figma.com/w/341/h/512/symbol",
    dark: "figma.com/w/357/h/512/theme/light/symbol",
  },
  {
    name: "Reddit",
    logo: "reddit.com/w/512/h/145/logo",
    dark: "reddit.com/w/512/h/145/logo",
  },
  {
    name: "Wise",
    logo: "wise.com/w/512/h/116/logo",
    dark: "wise.com/w/512/h/116/theme/light/logo",
  },
  {
    name: "Linear",
    logo: "linear.app/w/512/h/128/logo",
    dark: "linear.app/w/512/h/128/theme/light/logo",
  },
  {
    name: "Slack",
    logo: "slack.com/w/512/h/183/logo",
    dark: "slack.com/w/512/h/183/theme/light/logo",
  },
];
</script>
