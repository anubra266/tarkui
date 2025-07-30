import { Field } from "@ark-ui/solid/field";
import { ChevronDown } from "lucide-solid";

export default function InputWithEndSelect() {
  return (
    <Field.Root class="max-w-sm w-full">
      <Field.Label class="text-sm font-medium text-gray-900 dark:text-gray-100">
        Project Domain
      </Field.Label>
      <div class="mt-1 flex rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus-within:border-gray-900 dark:focus-within:border-gray-100 focus-within:ring-1 focus-within:ring-gray-900 dark:focus-within:ring-gray-100">
        <Field.Input
          type="text"
          placeholder="myproject"
          class="min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-hidden focus:ring-0"
        />
        <div class="border-l border-gray-300 dark:border-gray-600" />
        <div class="relative">
          <Field.Select class="appearance-none border-0 bg-transparent pl-3 pr-8 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-0">
            <option>.com</option>
            <option>.org</option>
            <option>.net</option>
            <option>.io</option>
          </Field.Select>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDown class="h-3 w-3 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </div>
    </Field.Root>
  );
}
