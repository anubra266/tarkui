<script>
  import { RatingGroup } from "@ark-ui/svelte";
  import { StarIcon } from "lucide-svelte";
</script>

<div class="max-w-sm w-full">
  <RatingGroup.Root count={5} allowHalf>
    <RatingGroup.Label
      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      Rate this item
    </RatingGroup.Label>
    <RatingGroup.Control class="inline-flex">
      <RatingGroup.Context let:items>
        {#each items as item}
          <RatingGroup.Item
            {item}
            class="w-6 h-6 p-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded hover:scale-105 transition-transform"
          >
            <RatingGroup.ItemContext let:half let:highlighted>
              {#if half}
                <div class="relative w-5 h-5">
                  <StarIcon class="w-5 h-5 text-gray-300 dark:text-gray-600" />
                  <div class="absolute inset-0 overflow-hidden w-1/2">
                    <StarIcon class="w-5 h-5 text-blue-400 fill-current" />
                  </div>
                </div>
              {:else if highlighted}
                <StarIcon class="w-5 h-5 text-blue-400 fill-current" />
              {:else}
                <StarIcon class="w-5 h-5 text-gray-300 dark:text-gray-500" />
              {/if}
            </RatingGroup.ItemContext>
          </RatingGroup.Item>
        {/each}
      </RatingGroup.Context>
      <RatingGroup.HiddenInput />
    </RatingGroup.Control>
  </RatingGroup.Root>
</div>
