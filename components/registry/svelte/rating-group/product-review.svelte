<script>
  import { RatingGroup } from "@ark-ui/svelte";
  import { StarIcon } from "lucide-svelte";

  let rating = 0;
  let review = "";

  const ratingLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

  function handleRatingChange(event) {
    rating = event.detail.value;
  }

  function handleReviewInput(event) {
    review = event.target.value;
  }
</script>

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
        count={5}
        value={rating}
        onValueChange={handleRatingChange}
        allowHalf
      >
        <RatingGroup.Label
          class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Overall Rating
        </RatingGroup.Label>
        <RatingGroup.Control class="inline-flex">
          <RatingGroup.Context let:items>
            {#each items as item}
              <RatingGroup.Item
                {item}
                class="w-5 h-5 p-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded hover:scale-105 transition-transform"
              >
                <RatingGroup.ItemContext let:half let:highlighted>
                  {#if half}
                    <div class="relative w-4 h-4">
                      <StarIcon
                        class="w-4 h-4 text-gray-300 dark:text-gray-600"
                      />
                      <div class="absolute inset-0 overflow-hidden w-1/2">
                        <StarIcon class="w-4 h-4 text-blue-400 fill-current" />
                      </div>
                    </div>
                  {:else if highlighted}
                    <StarIcon class="w-4 h-4 text-blue-400 fill-current" />
                  {:else}
                    <StarIcon
                      class="w-4 h-4 text-gray-300 dark:text-gray-500"
                    />
                  {/if}
                </RatingGroup.ItemContext>
              </RatingGroup.Item>
            {/each}
          </RatingGroup.Context>
          <RatingGroup.HiddenInput />
        </RatingGroup.Control>
      </RatingGroup.Root>
      {#if rating > 0}
        <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
          {ratingLabels[Math.floor(rating) - 1]}
        </p>
      {/if}
    </div>

    <div>
      <label
        class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        Your Review
      </label>
      <textarea
        bind:value={review}
        on:input={handleReviewInput}
        placeholder="Share your thoughts about this product..."
        class="w-full px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
        rows={3}
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
