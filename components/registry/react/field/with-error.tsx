import { Field } from "@ark-ui/react/field";

export default function InputWithError() {
  return (
    <Field.Root invalid className="max-w-sm w-full">
      <Field.Label className="text-sm font-medium text-gray-900 dark:text-gray-100">
        Company Email
      </Field.Label>
      <Field.Input
        type="email"
        defaultValue="john@wrongdomain"
        placeholder="Enter your company email"
        className="mt-1 block w-full rounded-lg border border-red-500 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-red-500 focus:outline-hidden focus:ring-1 focus:ring-red-500"
      />
      <Field.ErrorText className="mt-1 text-xs text-red-500">
        Please enter a valid email address
      </Field.ErrorText>
    </Field.Root>
  );
}
