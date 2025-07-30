import { Field } from "@ark-ui/solid/field";
import { Download } from "lucide-solid";

export default function InputWithEndIconButton() {
  return (
    <Field.Root class="max-w-sm w-full">
      <Field.Label class="text-sm font-medium text-gray-900 dark:text-gray-100">
        Download URL
      </Field.Label>
      <div class="mt-1 flex rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus-within:border-gray-900 dark:focus-within:border-gray-100 focus-within:ring-1 focus-within:ring-gray-900 dark:focus-within:ring-gray-100">
        <Field.Input
          type="url"
          placeholder="https://files.example.com/document.pdf"
          class="min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-0"
        />
        <div class="border-l border-gray-300 dark:border-gray-600" />
        <button class="border-0 bg-transparent p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-hidden focus:ring-0">
          <Download class="h-4 w-4" />
        </button>
      </div>
    </Field.Root>
  );
}
