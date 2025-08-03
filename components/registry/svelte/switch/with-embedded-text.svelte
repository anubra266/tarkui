<script>
  import { Switch } from "@ark-ui/svelte/switch";
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
>
  <Switch.Root class="flex items-center gap-3">
    <Switch.Context let:api>
      <Switch.Control
        class="relative inline-flex w-16 p-1 items-center rounded-lg bg-gray-300 transition-colors duration-200 ease-in-out data-[state=checked]:bg-blue-500 data-[focus-visible]:ring-2 data-[focus-visible]:ring-gray-300/50 data-[state=checked]:data-[focus-visible]:ring-blue-500/50 dark:bg-gray-600 dark:data-[state=checked]:bg-blue-500"
      >
        {#if !api.checked}
          <div class="absolute right-2 top-1/2 transform -translate-y-1/2">
            <span class="text-xs font-medium text-gray-700 dark:text-gray-300">
              OFF
            </span>
          </div>
        {/if}
        {#if api.checked}
          <div class="absolute left-2 top-1/2 transform -translate-y-1/2">
            <span class="text-xs font-medium text-white">ON</span>
          </div>
        {/if}
        <Switch.Thumb
          class="relative w-6 h-6 rounded-md bg-white shadow-lg transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-8 z-10"
        />
      </Switch.Control>
    </Switch.Context>
    <Switch.HiddenInput />
  </Switch.Root>
</div>
