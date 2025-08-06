<script>
  import { Tooltip, Portal } from "@ark-ui/svelte";
  import { BarChart3 } from "lucide-svelte";
</script>

<Tooltip.Root openDelay={0} closeDelay={0}>
  <Tooltip.Trigger
    class="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
  >
    <BarChart3 class="w-4 h-4 text-blue-500" />
    <span class="text-sm font-medium">Analytics</span>
  </Tooltip.Trigger>
  <Portal>
    <Tooltip.Positioner>
      <Tooltip.Content
        class="p-2 bg-popover text-popover-foreground border border-border rounded-lg shadow-lg z-50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out w-36"
      >
        <div class="space-y-1.5">
          <div class="text-xs font-medium text-muted-foreground">Today</div>

          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span class="text-xs">Sales</span>
              </div>
              <span class="text-xs font-semibold">$2.8k</span>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <div class="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span class="text-xs">Revenue</span>
              </div>
              <span class="text-xs font-semibold">$4.3k</span>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <div class="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                <span class="text-xs">Costs</span>
              </div>
              <span class="text-xs font-semibold">$1.6k</span>
            </div>
          </div>
        </div>
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip.Root>
