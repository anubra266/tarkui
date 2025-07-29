<script lang="ts">
  import { HoverCard } from "@ark-ui/svelte/hover-card";
  import { Portal } from "@ark-ui/svelte/portal";
  import { Info, AlertTriangle, CheckCircle } from "lucide-svelte";
</script>

<div class="flex items-center justify-center gap-8 p-12">
  <!-- Info Tooltip -->
  <HoverCard.Root>
    <HoverCard.Trigger
      class="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-pointer"
    >
      <Info class="w-4 h-4" />
      <span class="text-sm font-medium">Information</span>
    </HoverCard.Trigger>

    <Portal>
      <HoverCard.Positioner>
        <HoverCard.Content
          class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-xs"
        >
          <HoverCard.Arrow>
            <HoverCard.ArrowTip class="border-gray-200 dark:border-gray-700" />
          </HoverCard.Arrow>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <Info class="w-4 h-4 text-blue-500" />
              <h4
                class="text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                Information
              </h4>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              This is an informational message with an arrow pointing to the
              trigger element.
            </p>
          </div>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard.Root>

  <!-- Warning Tooltip -->
  <HoverCard.Root>
    <HoverCard.Trigger
      class="inline-flex items-center gap-2 px-3 py-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors cursor-pointer"
    >
      <AlertTriangle class="w-4 h-4" />
      <span class="text-sm font-medium">Warning</span>
    </HoverCard.Trigger>

    <Portal>
      <HoverCard.Positioner>
        <HoverCard.Content
          class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-xs"
        >
          <HoverCard.Arrow>
            <HoverCard.ArrowTip class="border-gray-200 dark:border-gray-700" />
          </HoverCard.Arrow>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <AlertTriangle class="w-4 h-4 text-yellow-500" />
              <h4
                class="text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                Warning
              </h4>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              This action may have unintended consequences. Please proceed with
              caution.
            </p>
          </div>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard.Root>

  <!-- Success Tooltip -->
  <HoverCard.Root>
    <HoverCard.Trigger
      class="inline-flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors cursor-pointer"
    >
      <CheckCircle class="w-4 h-4" />
      <span class="text-sm font-medium">Success</span>
    </HoverCard.Trigger>

    <Portal>
      <HoverCard.Positioner>
        <HoverCard.Content
          class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-xs"
        >
          <HoverCard.Arrow>
            <HoverCard.ArrowTip class="border-gray-200 dark:border-gray-700" />
          </HoverCard.Arrow>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <CheckCircle class="w-4 h-4 text-green-500" />
              <h4
                class="text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                Success
              </h4>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              The operation completed successfully. All changes have been saved.
            </p>
          </div>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard.Root>
</div>
