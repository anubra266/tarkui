import { Field } from "@ark-ui/react/field";

export default function InputWithHelperText() {
  return (
    <Field.Root className="max-w-sm w-full">
      <Field.Label className="text-sm font-medium text-gray-900 dark:text-gray-100">
        Recovery Email
      </Field.Label>
      <Field.Input
        type="email"
        placeholder="backup@yourmail.com"
        className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
      />
      <Field.HelperText className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        Used for account recovery and security notifications
      </Field.HelperText>
    </Field.Root>
  );
}
