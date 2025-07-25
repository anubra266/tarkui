import { Field } from "@ark-ui/solid/field";

export default function InputWithOverlappingLabel() {
  const id = "overlapping-email";

  return (
    <Field.Root class="max-w-sm w-full">
      <div class="relative">
        <Field.Input
          id={id}
          type="email"
          placeholder=" "
          class="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 pt-6 text-sm text-gray-900 dark:text-gray-100 placeholder-transparent focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
        />
        <Field.Label
          for={id}
          class="absolute top-2 left-3 text-xs font-medium text-gray-500 dark:text-gray-400 pointer-events-none bg-white dark:bg-gray-800 px-2"
        >
          Support Email
        </Field.Label>
      </div>
    </Field.Root>
  );
}
