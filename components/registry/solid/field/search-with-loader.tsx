import { Field } from "@ark-ui/solid/field";
import { Search, Mic, Loader2 } from "lucide-solid";
import { createSignal, createEffect } from "solid-js";

export default function SearchWithLoader() {
  const [inputValue, setInputValue] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);

  createEffect(() => {
    if (inputValue()) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    setIsLoading(false);
  });

  return (
    <Field.Root class="max-w-sm w-full">
      <Field.Label class="text-sm font-medium text-gray-900 dark:text-gray-100">
        Global Search
      </Field.Label>
      <div class="relative mt-1">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          {isLoading() ? (
            <Loader2 class="h-4 w-4 animate-spin text-gray-400 dark:text-gray-500" />
          ) : (
            <Search class="h-4 w-4 text-gray-400 dark:text-gray-500" />
          )}
        </div>
        <Field.Input
          type="search"
          placeholder="Search documents, files, people..."
          value={inputValue()}
          onInput={(e) => setInputValue(e.target.value)}
          class="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 pl-10 pr-10 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-hidden focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
        />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3">
          <Mic class="h-4 w-4 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </Field.Root>
  );
}
