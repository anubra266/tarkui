<script>
  import { Switch } from "@ark-ui/svelte/switch";
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
>
  <Switch.Root class="flex items-center gap-3">
    <Switch.Control
      class="relative inline-flex w-11 p-1 items-center rounded-full border-2 border-gray-300 bg-transparent transition-colors duration-200 ease-in-out data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-focus-visible:ring-2 data-focus-visible:ring-gray-300/50 data-[state=checked]:data-focus-visible:ring-blue-500/50 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500"
    >
      <Switch.Thumb
        class="w-4 h-4 rounded-full bg-gray-300 shadow-sm transition-all duration-200 ease-in-out data-[state=checked]:translate-x-full data-[state=checked]:bg-white dark:bg-gray-600 dark:data-[state=checked]:bg-white"
      />
    </Switch.Control>
    <Switch.HiddenInput />
  </Switch.Root>
</div>
