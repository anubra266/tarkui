<script>
  import { RatingGroup } from "@ark-ui/svelte";
  import { StarIcon, ClockIcon, MessageCircleIcon } from "lucide-svelte";

  let responseTime = 0;
  let helpfulness = 0;
  let feedback = "";
  let anonymous = false;

  const categories = [
    {
      label: "Response Time",
      icon: ClockIcon,
      get rating() {
        return responseTime;
      },
      setRating: (value) => (responseTime = value),
    },
    {
      label: "Helpfulness",
      icon: MessageCircleIcon,
      get rating() {
        return helpfulness;
      },
      setRating: (value) => (helpfulness = value),
    },
  ];

  function handleResponseTimeChange(event) {
    responseTime = event.detail.value;
  }

  function handleHelpfulnessChange(event) {
    helpfulness = event.detail.value;
  }

  function handleFeedbackInput(event) {
    feedback = event.target.value;
  }

  function handleAnonymousChange(event) {
    anonymous = event.target.checked;
  }
</script>

<div
  class="max-w-sm w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
>
  <div class="p-4 border-b border-gray-200 dark:border-gray-700">
    <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
      Service Feedback
    </h3>
    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
      Help us improve our customer service
    </p>
  </div>

  <div class="p-4 space-y-4">
    {#each categories as category}
      <div
        class="bg-gray-50 dark:bg-gray-800 rounded p-2 border border-gray-200 dark:border-gray-700"
      >
        <div class="space-y-2">
          <div class="flex items-center space-x-3">
            <svelte:component
              this={category.icon}
              class="w-4 h-4 text-gray-500"
            />
            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">
              {category.label}
            </span>
          </div>

          <RatingGroup.Root
            count={5}
            value={category.rating}
            onValueChange={category.label === "Response Time"
              ? handleResponseTimeChange
              : handleHelpfulnessChange}
            allowHalf
            class="pl-7"
          >
            <RatingGroup.Control class="inline-flex">
              <RatingGroup.Context let:items>
                {#each items as item}
                  <RatingGroup.Item
                    {item}
                    class="w-5 h-5 p-0.5 focus:outline-none focus:ring-1 focus:ring-green-500 rounded hover:scale-105 transition-transform"
                  >
                    <RatingGroup.ItemContext let:half let:highlighted>
                      {#if half}
                        <div class="relative w-4 h-4">
                          <StarIcon
                            class="w-4 h-4 text-gray-300 dark:text-gray-600"
                          />
                          <div class="absolute inset-0 overflow-hidden w-1/2">
                            <StarIcon
                              class="w-4 h-4 text-green-400 fill-current"
                            />
                          </div>
                        </div>
                      {:else if highlighted}
                        <StarIcon class="w-4 h-4 text-green-400 fill-current" />
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
        </div>
      </div>
    {/each}

    <div>
      <label
        class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        Additional Comments
      </label>
      <textarea
        bind:value={feedback}
        on:input={handleFeedbackInput}
        placeholder="Share your experience..."
        class="w-full px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
        rows={2}
      />
    </div>

    <div class="flex items-center space-x-2">
      <input
        type="checkbox"
        id="anonymous"
        bind:checked={anonymous}
        on:change={handleAnonymousChange}
        class="w-3 h-3 text-green-600 border-gray-300 rounded focus:ring-green-500"
      />
      <label for="anonymous" class="text-xs text-gray-700 dark:text-gray-300">
        Submit anonymously
      </label>
    </div>
  </div>

  <div class="p-4 border-t border-gray-200 dark:border-gray-700">
    <button
      class="w-full px-3 py-2 text-xs font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      Submit
    </button>
  </div>
</div>
