import { Editable } from "@ark-ui/solid/editable";
import { MousePointer2 } from "lucide-solid";

export default function DoubleClick() {
  return (
    <div class="w-full max-w-sm space-y-3">
      <Editable.Root
        placeholder="Double-click to edit..."
        value="Double-click me to edit"
        activationMode="dblclick"
      >
        <div class="flex items-center space-x-2 mb-2">
          <MousePointer2 class="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Editable.Label class="text-sm font-medium text-gray-700 dark:text-gray-300">
            Double-Click to Edit
          </Editable.Label>
        </div>
        <Editable.Area class="relative">
          <Editable.Input class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors min-h-[2.5rem]" />
          <Editable.Preview class="w-full px-3 py-2 text-sm border border-dashed border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer transition-colors min-h-[2.5rem]" />
        </Editable.Area>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
          💡 Double-click the text above to start editing
        </p>
      </Editable.Root>
    </div>
  );
}
