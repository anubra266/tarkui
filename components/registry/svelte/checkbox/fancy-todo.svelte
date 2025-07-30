<script>
  import { Checkbox } from "@ark-ui/svelte";
  import { CheckIcon } from "lucide-svelte";

  let completed = true;

  function handleCheckedChange(details) {
    completed = details.checked === true;
  }
</script>

<div class="max-w-md">
  <Checkbox.Root
    checked={completed}
    onCheckedChange={handleCheckedChange}
    class="flex items-center gap-3 cursor-pointer"
  >
    <Checkbox.Control
      class="w-5 h-5 bg-white border-2 border-gray-300 rounded-full data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-green-400 dark:data-[state=checked]:border-green-400 dark:data-hover:border-gray-400 transition-all duration-200 flex items-center justify-center"
    >
      <Checkbox.Indicator>
        <CheckIcon class="w-3.5 h-3.5 text-white dark:text-green-800" />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label
      class={`text-base cursor-pointer transition-all duration-200 ${
        completed
          ? "text-gray-400 line-through dark:text-gray-500"
          : "text-gray-900 dark:text-gray-100"
      }`}
    >
      Fancy todo item
    </Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</div>
