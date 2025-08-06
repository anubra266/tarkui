<script lang="ts">
  import { ToggleGroup } from "@ark-ui/svelte/toggle-group";
  import { Bold, Italic, Underline } from "lucide-svelte";
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center"
>
  <ToggleGroup.Root
    multiple
    defaultValue={["bold"]}
    class="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1"
  >
    <ToggleGroup.Item
      value="bold"
      class="p-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
    >
      <Bold class="w-4 h-4" />
    </ToggleGroup.Item>
    <ToggleGroup.Item
      value="italic"
      class="p-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
    >
      <Italic class="w-4 h-4" />
    </ToggleGroup.Item>
    <ToggleGroup.Item
      value="underline"
      class="p-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-600 data-[state=on]:bg-white dark:data-[state=on]:bg-gray-600 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm transition-all"
    >
      <Underline class="w-4 h-4" />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
</div>
