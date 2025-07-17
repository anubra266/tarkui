import { Checkbox } from "@ark-ui/solid";
import { CheckIcon } from "lucide-solid";

export default function DisabledCheckbox() {
  return (
    <div class="space-y-4">
      <Checkbox.Root disabled class="flex items-center gap-3 opacity-50">
        <Checkbox.Control class="w-5 h-5 bg-gray-100 border-2 border-gray-300 rounded cursor-not-allowed flex items-center justify-center dark:bg-gray-800 dark:border-gray-600">
          <Checkbox.Indicator>
            <CheckIcon class="w-3.5 h-3.5 text-gray-400" />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label class="text-sm text-gray-500 dark:text-gray-400 cursor-not-allowed">
          Disabled unchecked
        </Checkbox.Label>
        <Checkbox.HiddenInput />
      </Checkbox.Root>

      <Checkbox.Root
        disabled
        defaultChecked
        class="flex items-center gap-3 opacity-50"
      >
        <Checkbox.Control class="w-5 h-5 bg-blue-300 border-2 border-blue-300 rounded cursor-not-allowed flex items-center justify-center dark:bg-blue-600 dark:border-blue-600">
          <Checkbox.Indicator>
            <CheckIcon class="w-3.5 h-3.5 text-white" />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label class="text-sm text-gray-500 dark:text-gray-400 cursor-not-allowed">
          Disabled checked
        </Checkbox.Label>
        <Checkbox.HiddenInput />
      </Checkbox.Root>

      <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
        <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
          Form settings (disabled)
        </h4>
        <div class="space-y-3">
          <Checkbox.Root disabled class="flex items-center gap-3 opacity-50">
            <Checkbox.Control class="w-5 h-5 bg-gray-100 border-2 border-gray-300 rounded cursor-not-allowed flex items-center justify-center dark:bg-gray-800 dark:border-gray-600">
              <Checkbox.Indicator>
                <CheckIcon class="w-3.5 h-3.5 text-gray-400" />
              </Checkbox.Indicator>
            </Checkbox.Control>
            <Checkbox.Label class="text-sm text-gray-500 dark:text-gray-400 cursor-not-allowed">
              Auto-save drafts
            </Checkbox.Label>
            <Checkbox.HiddenInput />
          </Checkbox.Root>

          <Checkbox.Root
            disabled
            defaultChecked
            class="flex items-center gap-3 opacity-50"
          >
            <Checkbox.Control class="w-5 h-5 bg-blue-300 border-2 border-blue-300 rounded cursor-not-allowed flex items-center justify-center dark:bg-blue-600 dark:border-blue-600">
              <Checkbox.Indicator>
                <CheckIcon class="w-3.5 h-3.5 text-white" />
              </Checkbox.Indicator>
            </Checkbox.Control>
            <Checkbox.Label class="text-sm text-gray-500 dark:text-gray-400 cursor-not-allowed">
              Enable spell check
            </Checkbox.Label>
            <Checkbox.HiddenInput />
          </Checkbox.Root>
        </div>
      </div>
    </div>
  );
}
