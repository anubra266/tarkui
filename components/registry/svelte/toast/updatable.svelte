<script lang="ts">
  import { Toast, Toaster, createToaster } from "@ark-ui/svelte/toast";
  import { X, Loader2 } from "lucide-svelte";
  import { writable } from "svelte/store";

  const toaster = createToaster({
    overlap: true,
    placement: "bottom-end",
    gap: 16,
  });

  const toastId = writable<string | undefined>();

  function createToast() {
    const id = toaster.create({
      title: "Uploading...",
      description: "Your file is being uploaded.",
      type: "loading",
      duration: Infinity,
    });
    toastId.set(id);
  }

  function updateToast() {
    const id = $toastId;
    if (!id) return;
    
    toaster.update(id, {
      title: "Upload complete!",
      description: "Your file has been uploaded successfully.",
      type: "success",
      duration: 5000,
    });
  }
</script>

<div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
  <div class="flex gap-2">
    <button
      type="button"
      onclick={createToast}
      class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
    >
      Start Upload
    </button>
    <button
      type="button"
      onclick={updateToast}
      class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm font-medium"
    >
      Complete Upload
    </button>
  </div>
  
  <Toaster {toaster}>
    {#snippet children(toast)}
      <Toast.Root class="bg-linear-to-r from-white to-gray-50 border-l-4 border-blue-500 rounded-lg shadow-lg min-w-80 p-4 relative overflow-anywhere transition-all duration-300 ease-default will-change-transform h-(--height) opacity-(--opacity) translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index)">
        <div class="flex items-start gap-3">
          {#if toast().type === "loading"}
            <Loader2 class="w-4 h-4 mt-0.5 text-blue-500 animate-spin shrink-0" />
          {/if}
          {#if toast().type === "success"}
            <div class="w-4 h-4 mt-0.5 bg-green-500 rounded-full flex items-center justify-center shrink-0">
              <X class="w-2 h-2 text-white rotate-45" />
            </div>
          {/if}
          <div class="flex-1">
            <Toast.Title class="text-gray-900 font-semibold text-sm">
              {toast().title}
            </Toast.Title>
            <Toast.Description class="text-gray-600 text-sm mt-1">
              {toast().description}
            </Toast.Description>
            {#if toast().type === "loading"}
              <div class="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                <div
                  class="bg-blue-500 h-1.5 rounded-full animate-pulse"
                  style="width: 60%"
                ></div>
              </div>
            {/if}
          </div>
        </div>
        <Toast.CloseTrigger class="absolute top-3 right-3 p-1 hover:bg-white/50 rounded transition-colors text-gray-400 hover:text-gray-600">
          <X class="w-3 h-3" />
        </Toast.CloseTrigger>
      </Toast.Root>
    {/snippet}
  </Toaster>
</div>