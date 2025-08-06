<script>
  import { Tooltip, Portal } from "@ark-ui/svelte";
  import { Activity } from "lucide-svelte";
</script>

<Tooltip.Root openDelay={0} closeDelay={0}>
  <Tooltip.Trigger
    class="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
  >
    <Activity class="w-4 h-4 text-green-500" />
    <span class="text-sm font-medium">System Status</span>
  </Tooltip.Trigger>
  <Portal>
    <Tooltip.Positioner>
      <Tooltip.Content
        class="p-2 bg-popover text-popover-foreground border border-border rounded-lg shadow-lg z-50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out w-40"
      >
        <div class="space-y-1.5">
          <div>
            <div class="text-xs text-muted-foreground">Status</div>
            <div class="text-xs font-semibold">Operational</div>
          </div>

          <div>
            <div class="text-xs text-muted-foreground">Uptime</div>
            <div class="text-xs font-semibold">99.9%</div>
          </div>

          <div>
            <div class="text-xs text-muted-foreground">Deploy</div>
            <div class="text-xs font-semibold">2h ago</div>
          </div>

          <div>
            <div class="text-xs text-muted-foreground">Response</div>
            <div class="text-xs font-semibold">145ms</div>
          </div>
        </div>
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip.Root>
