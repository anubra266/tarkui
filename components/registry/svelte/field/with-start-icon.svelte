<script>
  import { Field } from "@ark-ui/svelte/field";
  import { AtSign } from "lucide-svelte";
</script>

<Field.Root class="max-w-sm w-full">
  <Field.Label class="text-sm font-medium text-gray-900 dark:text-gray-100">
    Username
  </Field.Label>
  <div class="relative mt-1">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
      <AtSign class="h-4 w-4 text-gray-400 dark:text-gray-500" />
    </div>
    <Field.Input
      type="text"
      placeholder="johnsmith"
      class="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 pl-10 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-hidden focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
    />
  </div>
</Field.Root>
