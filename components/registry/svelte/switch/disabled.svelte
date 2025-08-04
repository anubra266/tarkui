<script>
  import { Switch } from "@ark-ui/svelte/switch";
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
>
  <Switch.Root disabled class="flex items-center gap-3">
    <Switch.Control
      class="relative inline-flex w-11 p-0.5 items-center rounded-full bg-gray-200 transition-colors duration-200 ease-in-out data-[state=checked]:bg-gray-400 opacity-40 cursor-not-allowed dark:bg-gray-700 dark:data-[state=checked]:bg-gray-600 data-focus-visible:ring-2 data-focus-visible:ring-gray-400/50"
    >
      <Switch.Thumb
        class="w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-full"
      />
    </Switch.Control>
    <Switch.HiddenInput />
  </Switch.Root>
</div>
