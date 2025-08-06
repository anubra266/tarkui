<script>
  import { Tooltip, Portal } from "@ark-ui/svelte";
  import { ChevronUp, CircleIcon } from "lucide-svelte";
</script>

<div class="inline-grid w-fit grid-cols-3 gap-1">
  <Tooltip.Root openDelay={0} closeDelay={0} positioning={{ placement: "top" }}>
    <Tooltip.Trigger
      class="col-start-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
    >
      <ChevronUp class="size-4" />
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content
          class="z-50 overflow-hidden rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
        >
          Top
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>

  <Tooltip.Root
    openDelay={0}
    closeDelay={0}
    positioning={{ placement: "left" }}
  >
    <Tooltip.Trigger
      class="col-start-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
    >
      <ChevronUp class="size-4" />
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content
          class="z-50 overflow-hidden rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
        >
          Left
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
  <div class="flex items-center justify-center" aria-hidden="true">
    <CircleIcon class="opacity-60" size={16} />
  </div>
  <Tooltip.Root
    openDelay={0}
    closeDelay={0}
    positioning={{ placement: "right" }}
  >
    <Tooltip.Trigger
      class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
    >
      <ChevronUp class="size-4" />
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content
          class="z-50 overflow-hidden rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
        >
          Right
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
  <Tooltip.Root
    openDelay={0}
    closeDelay={0}
    positioning={{ placement: "bottom" }}
  >
    <Tooltip.Trigger
      class="col-start-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
    >
      <ChevronUp class="size-4" />
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content
          class="z-50 overflow-hidden rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
        >
          Bottom
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
</div>
