import { Field } from "@ark-ui/solid/field";
import { createSignal } from "solid-js";

export default function InputWithCharacterLimit() {
  const [value, setValue] = createSignal("");
  const maxLength = 100;

  return (
    <Field.Root class="max-w-sm w-full">
      <Field.Label class="text-sm font-medium text-gray-900 dark:text-gray-100">
        Bio Description
      </Field.Label>
      <div class="relative mt-1">
        <Field.Input
          type="text"
          value={value()}
          onInput={(e) => setValue(e.target.value)}
          maxLength={maxLength}
          placeholder="Tell us about yourself..."
          class="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 pr-16 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-hidden focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
        />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3">
          <span class="text-xs text-gray-400 dark:text-gray-500">
            {value().length}/{maxLength}
          </span>
        </div>
      </div>
    </Field.Root>
  );
}
