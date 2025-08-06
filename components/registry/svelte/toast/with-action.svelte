<script lang="ts">
  import { Toast, Toaster, createToaster } from "@ark-ui/svelte/toast";
  import { X } from "lucide-svelte";

  const toaster = createToaster({
    overlap: true,
    placement: "bottom-end",
    gap: 16,
  });

  function showActionToast() {
    toaster.create({
      title: "Update available",
      description: "A new version of the app is ready to install.",
      type: "info",
      action: {
        label: "Update now",
        onClick: () => {
          console.log("Updating...");
        },
      },
    });
  }
</script>

<div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
  <button
    type="button"
    onclick={showActionToast}
    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
  >
    Show Action Toast
  </button>
  
  <Toaster {toaster}>
    {#snippet children(toast)}
      <Toast.Root class="bg-white border border-gray-200 rounded-lg shadow-lg min-w-80 p-4 relative overflow-anywhere transition-all duration-300 ease-default will-change-transform h-(--height) opacity-(--opacity) translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index)">
        <Toast.Title class="text-gray-900 font-semibold text-sm">
          {toast().title}
        </Toast.Title>
        <Toast.Description class="text-gray-600 text-sm mt-1">
          {toast().description}
        </Toast.Description>
        {#if toast().action}
          <Toast.ActionTrigger class="mt-3 px-3 py-1.5 bg-blue-500 text-white text-xs font-medium rounded-md hover:bg-blue-600 transition-colors">
            {toast().action.label}
          </Toast.ActionTrigger>
        {/if}
        <Toast.CloseTrigger class="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded transition-colors text-gray-400 hover:text-gray-600">
          <X class="w-3 h-3" />
        </Toast.CloseTrigger>
      </Toast.Root>
    {/snippet}
  </Toaster>
</div>