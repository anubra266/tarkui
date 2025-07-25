import { Field } from "@ark-ui/react/field";

export default function InputWithInsetLabel() {
  return (
    <Field.Root className="max-w-sm w-full relative">
      <Field.Input
        type="email"
        placeholder="Email"
        className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 pt-6 text-sm text-gray-900 dark:text-gray-100 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100 placeholder-gray-500 dark:placeholder-gray-400 "
      />
      <Field.Label className="absolute top-2 left-3 text-xs font-medium text-gray-500 dark:text-gray-400">
        Support Email
      </Field.Label>
    </Field.Root>
  );
}
