<template>
  <div
    class="max-w-sm w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
  >
    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
        Product Review
      </h3>
      <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
        Share your experience with this product
      </p>
    </div>

    <div class="p-4 space-y-4">
      <div>
        <RatingGroup.Root
          :count="5"
          :value="rating"
          @value-change="handleRatingChange"
          :allow-half="true"
        >
          <RatingGroup.Label
            class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Overall Rating
          </RatingGroup.Label>
          <RatingGroup.Control class="inline-flex">
            <RatingGroup.Context v-slot="{ items }">
              <RatingGroup.Item
                v-for="item in items"
                :key="item"
                :index="item"
                class="w-5 h-5 p-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded hover:scale-105 transition-transform"
              >
                <RatingGroup.ItemContext v-slot="{ half, highlighted }">
                  <div v-if="half" class="relative w-4 h-4">
                    <StarIcon
                      class="w-4 h-4 text-gray-300 dark:text-gray-600"
                    />
                    <div class="absolute inset-0 overflow-hidden w-1/2">
                      <StarIcon class="w-4 h-4 text-blue-400 fill-current" />
                    </div>
                  </div>
                  <StarIcon
                    v-else-if="highlighted"
                    class="w-4 h-4 text-blue-400 fill-current"
                  />
                  <StarIcon
                    v-else
                    class="w-4 h-4 text-gray-300 dark:text-gray-500"
                  />
                </RatingGroup.ItemContext>
              </RatingGroup.Item>
            </RatingGroup.Context>
            <RatingGroup.HiddenInput />
          </RatingGroup.Control>
        </RatingGroup.Root>
        <p
          v-if="rating > 0"
          class="text-xs text-gray-600 dark:text-gray-400 mt-1"
        >
          {{ ratingLabels[Math.floor(rating) - 1] }}
        </p>
      </div>

      <div>
        <label
          class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Your Review
        </label>
        <textarea
          v-model="review"
          placeholder="Share your thoughts about this product..."
          class="w-full px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
          rows="3"
        />
      </div>
    </div>

    <div class="p-4 border-t border-gray-200 dark:border-gray-700">
      <button
        class="w-full px-3 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit Review
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RatingGroup } from "@ark-ui/vue";
import { StarIcon } from "lucide-vue-next";

const rating = ref(0);
const review = ref("");

const ratingLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

function handleRatingChange(details) {
  rating.value = details.value;
}
</script>
