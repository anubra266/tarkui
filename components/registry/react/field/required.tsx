import { Field } from "@ark-ui/react/field";

export default function RequiredInput() {
  return (
    <Field.Root required className="max-w-sm w-full">
      <Field.Label className="text-sm font-medium text-gray-900 dark:text-gray-100">
        Business Email
        <span className="ml-1 text-red-500">*</span>
      </Field.Label>
      <Field.Input
        type="email"
        placeholder="hello@yourcompany.com"
        className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-hidden focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
      />
    </Field.Root>
  );
}
