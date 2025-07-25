<script>
  import { Field } from "@ark-ui/svelte/field";

  let inputValue = $state("Hello");
  const maxLength = 20;

  $: charactersLeft = maxLength - inputValue.length;
</script>

<Field.Root class="max-w-sm w-full">
  <Field.Label class="text-sm font-medium text-gray-900 dark:text-gray-100">
    Project Name
  </Field.Label>
  <Field.Input
    type="text"
    value={inputValue}
    on:input={(e) => (inputValue = e.target.value)}
    maxlength={maxLength}
    placeholder="Enter project name"
    class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
  />
  <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
    {charactersLeft} characters left
  </div>
</Field.Root>
