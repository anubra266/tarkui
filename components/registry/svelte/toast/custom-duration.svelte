<script lang="ts">
  import { Toast, Toaster, createToaster } from "@ark-ui/svelte/toast";
  import { X, Clock } from "lucide-svelte";

  const toaster = createToaster({
    overlap: true,
    placement: "bottom-end",
    gap: 16,
  });

  const durations = [
    { label: "1s", value: 1000 },
    { label: "3s", value: 3000 },
    { label: "5s", value: 5000 },
    { label: "∞", value: Infinity },
  ];

  function createToast(duration: typeof durations[0]) {
    toaster.create({
      title: `Toast (${duration.label})`,
      description: `This toast will ${
        duration.value === Infinity ? "stay until dismissed" : `disappear in ${duration.label}`
      }.`,
      type: "info",
      duration: duration.value,
    });
  }
</script>

<div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
  <div class="flex flex-wrap gap-2 justify-center">
    {#each durations as duration}
      <button
        type="button"
        onclick={() => createToast(duration)}
        class="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-xs font-medium"
      >
        {duration.label}
      </button>
    {/each}
  </div>
  
  <Toaster {toaster}>
    {#snippet children(toast)}
      <Toast.Root class="bg-gray-900 text-white rounded-lg shadow-lg min-w-80 p-4 relative overflow-anywhere transition-all duration-300 ease-default will-change-transform h-(--height) opacity-(--opacity) translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index)">
        <div class="flex items-start gap-3">
          <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
            <Clock class="w-3 h-3 text-white" />
          </div>
          <div class="flex-1">
            <Toast.Title class="text-white font-semibold text-sm">
              {toast().title}
            </Toast.Title>
            <Toast.Description class="text-gray-300 text-sm mt-1">
              {toast().description}
            </Toast.Description>
          </div>
        </div>
        <Toast.CloseTrigger class="absolute top-3 right-3 p-1 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white">
          <X class="w-3 h-3" />
        </Toast.CloseTrigger>
      </Toast.Root>
    {/snippet}
  </Toaster>
</div>