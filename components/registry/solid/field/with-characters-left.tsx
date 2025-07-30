import { Field } from "@ark-ui/solid/field";
import { createSignal, createMemo } from "solid-js";

export default function InputWithCharactersLeft() {
  const [value, setValue] = createSignal("Hello");
  const maxLength = 20;
  const charactersLeft = createMemo(() => maxLength - value().length);

  return (
    <Field.Root class="max-w-sm w-full">
      <Field.Label class="text-sm font-medium text-gray-900 dark:text-gray-100">
        Project Name
      </Field.Label>
      <Field.Input
        type="text"
        value={value()}
        onInput={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        placeholder="Enter project name"
        class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-hidden focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
      />
      <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
        {charactersLeft()} characters left
      </div>
    </Field.Root>
  );
}
