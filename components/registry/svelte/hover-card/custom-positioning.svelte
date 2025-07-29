<script lang="ts">
  import { HoverCard } from "@ark-ui/svelte/hover-card";
  import { Portal } from "@ark-ui/svelte/portal";

  let positioning = "bottom";

  const positionOptions = [
    { value: "top", label: "Top" },
    { value: "bottom", label: "Bottom" },
    { value: "left", label: "Left" },
    { value: "right", label: "Right" },
    { value: "top-start", label: "Top Start" },
    { value: "top-end", label: "Top End" },
    { value: "bottom-start", label: "Bottom Start" },
    { value: "bottom-end", label: "Bottom End" },
  ];
</script>

<div class="space-y-6 p-6">
  <!-- Position Controls -->
  <div class="space-y-3">
    <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
      Select Position
    </h3>
    <div class="flex flex-wrap gap-2">
      {#each positionOptions as option}
        <button
          on:click={() => (positioning = option.value)}
          class="px-3 py-1.5 text-sm rounded-md transition-colors {positioning ===
          option.value
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'}"
        >
          {option.label}
        </button>
      {/each}
    </div>
  </div>

  <!-- Hover Card Demo -->
  <div class="flex items-center justify-center py-12">
    <HoverCard.Root positioning={{ placement: positioning }}>
      <HoverCard.Trigger
        class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Hover for {positioning} positioning
      </HoverCard.Trigger>

      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-xs"
          >
            <div class="space-y-2">
              <h4
                class="text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                Custom Positioning
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                This hover card is positioned at <strong>{positioning}</strong> relative
                to the trigger element.
              </p>
              <div class="pt-2 text-xs text-gray-500 dark:text-gray-400">
                Try selecting different positions above to see how the hover
                card changes its position.
              </div>
            </div>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  </div>

  <!-- Info -->
  <div class="text-center">
    <p class="text-sm text-gray-600 dark:text-gray-400">
      Current position: <span
        class="font-medium text-gray-900 dark:text-gray-100">{positioning}</span
      >
    </p>
  </div>
</div>
