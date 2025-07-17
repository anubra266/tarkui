<template>
  <CarouselRoot
    :defaultPage="0"
    :slideCount="testimonials.length"
    class="max-w-2xl mx-auto"
  >
    <CarouselItemGroup class="min-h-64 overflow-hidden">
      <CarouselItem
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :index="index"
      >
        <div
          class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
        >
          <Quote class="w-8 h-8 text-blue-500 mx-auto mb-4" />
          <p class="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
            "{{ testimonial.content }}"
          </p>
          <div class="flex items-center justify-center gap-1 mb-4">
            <Star
              v-for="n in testimonial.rating"
              :key="n"
              class="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          </div>
          <div class="flex items-center justify-center gap-3">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="text-left">
              <h4 class="font-semibold text-gray-900 dark:text-white">
                {{ testimonial.name }}
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ testimonial.role }}
              </p>
            </div>
          </div>
        </div>
      </CarouselItem>
    </CarouselItemGroup>

    <div class="flex items-center justify-between mt-6">
      <CarouselPrevTrigger
        class="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full transition-colors"
      >
        ←
      </CarouselPrevTrigger>

      <CarouselIndicatorGroup class="flex gap-2">
        <CarouselIndicator
          v-for="(_, index) in testimonials"
          :key="index"
          :index="index"
          class="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 data-[current]:bg-blue-500 dark:data-[current]:bg-blue-400 transition-colors cursor-pointer"
        />
      </CarouselIndicatorGroup>

      <CarouselNextTrigger
        class="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full transition-colors"
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
import { Star, Quote } from "lucide-vue-next";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content:
      "This product has completely transformed how we work. The results have been incredible.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?seed=sarah",
  },
  {
    name: "Michael Chen",
    role: "Designer, Creative Studio",
    content:
      "Outstanding quality and attention to detail. Highly recommend to anyone looking for excellence.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?seed=michael",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content:
      "The team was professional and delivered exactly what we needed. Exceeded our expectations.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?seed=emily",
  },
];
</script>
