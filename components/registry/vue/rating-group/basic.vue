<template>
  <div class="max-w-sm w-full">
    <RatingGroup.Root :count="5" :allow-half="true">
      <RatingGroup.Label
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        Rate this item
      </RatingGroup.Label>
      <RatingGroup.Control class="inline-flex">
        <RatingGroup.Context v-slot="{ items }">
          <RatingGroup.Item
            v-for="item in items"
            :key="item"
            :index="item"
            class="w-6 h-6 p-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded hover:scale-105 transition-transform"
          >
            <RatingGroup.ItemContext v-slot="{ half, highlighted }">
              <div v-if="half" class="relative w-5 h-5">
                <StarIcon class="w-5 h-5 text-gray-300 dark:text-gray-600" />
                <div class="absolute inset-0 overflow-hidden w-1/2">
                  <StarIcon class="w-5 h-5 text-blue-400 fill-current" />
                </div>
              </div>
              <StarIcon
                v-else-if="highlighted"
                class="w-5 h-5 text-blue-400 fill-current"
              />
              <StarIcon
                v-else
                class="w-5 h-5 text-gray-300 dark:text-gray-500"
              />
            </RatingGroup.ItemContext>
          </RatingGroup.Item>
        </RatingGroup.Context>
        <RatingGroup.HiddenInput />
      </RatingGroup.Control>
    </RatingGroup.Root>
  </div>
</template>

<script setup>
import { RatingGroup } from "@ark-ui/vue";
import { StarIcon } from "lucide-vue-next";
</script>
