import { Field } from "@ark-ui/react/field";

export default function InputWithEndButton() {
  return (
    <Field.Root className="max-w-sm w-full">
      <Field.Label className="text-sm font-medium text-gray-900 dark:text-gray-100">
        Newsletter Subscription
      </Field.Label>
      <div className="mt-1 flex rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus-within:border-gray-900 dark:focus-within:border-gray-100 focus-within:ring-1 focus-within:ring-gray-900 dark:focus-within:ring-gray-100">
        <Field.Input
          type="email"
          placeholder="Enter your email address"
          className="min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-0"
        />
        <div className="border-l border-gray-300 dark:border-gray-600" />
        <button className="border-0 bg-transparent px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-0">
          Send
        </button>
      </div>
    </Field.Root>
  );
}
