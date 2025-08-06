<script lang="ts">
  import { Toggle } from "@ark-ui/svelte/toggle";
  import { Volume, VolumeX } from "lucide-svelte";
  import { writable } from "svelte/store";

  const pressed = writable(false);

  function handlePressedChange(value: boolean) {
    pressed.set(value);
  }

  function toggleExternally() {
    pressed.update((p) => !p);
  }
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center space-y-4"
>
  <Toggle.Root
    pressed={$pressed}
    onPressedChange={handlePressedChange}
    class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 data-[state=on]:bg-red-100 dark:data-[state=on]:bg-red-900/30 data-[state=on]:text-red-700 dark:data-[state=on]:text-red-300 data-[state=on]:border-red-300 dark:data-[state=on]:border-red-600 transition-all text-sm font-medium"
  >
    {#if $pressed}
      <VolumeX class="w-4 h-4" />
    {:else}
      <Volume class="w-4 h-4" />
    {/if}
    {$pressed ? "Muted" : "Unmuted"}
  </Toggle.Root>

  <div class="text-center">
    <p class="text-sm text-gray-600 dark:text-gray-400">
      Volume is{" "}
      <span class="font-medium">{$pressed ? "muted" : "unmuted"}</span>
    </p>
    <button
      onclick={toggleExternally}
      class="mt-2 px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
    >
      Toggle Externally
    </button>
  </div>
</div>
