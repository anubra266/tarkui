<script>
  import { Field } from "@ark-ui/svelte/field";
  import { Search, Mic, Loader2 } from "lucide-svelte";

  let inputValue = $state("");
  let isLoading = $state(false);

  $effect(() => {
    if (inputValue) {
      isLoading = true;
      const timer = setTimeout(() => {
        isLoading = false;
      }, 500);
      return () => clearTimeout(timer);
    }
    isLoading = false;
  });
</script>

<Field.Root class="max-w-sm w-full">
  <Field.Label class="text-sm font-medium text-gray-900 dark:text-gray-100">
    Global Search
  </Field.Label>
  <div class="relative mt-1">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
      {#if isLoading}
        <Loader2
          class="h-4 w-4 animate-spin text-gray-400 dark:text-gray-500"
        />
      {:else}
        <Search class="h-4 w-4 text-gray-400 dark:text-gray-500" />
      {/if}
    </div>
    <Field.Input
      type="search"
      placeholder="Search documents, files, people..."
      value={inputValue}
      on:input={(e) => (inputValue = e.target.value)}
      class="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 pl-10 pr-10 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
    />
    <div class="absolute inset-y-0 right-0 flex items-center pr-3">
      <Mic class="h-4 w-4 text-gray-400 dark:text-gray-500" />
    </div>
  </div>
</Field.Root>
