import { Editable } from "@ark-ui/solid/editable";

export default function Basic() {
  return (
    <div class="w-full max-w-sm space-y-3">
      <Editable.Root placeholder="Enter some text..." value="Click to edit">
        <Editable.Label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Basic Editable
        </Editable.Label>
        <Editable.Area class="relative">
          <Editable.Input class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-10" />
          <Editable.Preview class="w-full px-3 py-2 text-sm border border-transparent rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-600 cursor-text transition-colors min-h-10" />
        </Editable.Area>
      </Editable.Root>
    </div>
  );
}
