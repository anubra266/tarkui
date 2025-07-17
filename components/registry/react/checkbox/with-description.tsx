import { Checkbox } from "@ark-ui/react/checkbox";
import { CheckIcon } from "lucide-react";

export default function CheckboxWithDescription() {
  return (
    <Checkbox.Root className="flex items-start gap-3 cursor-pointer">
      <Checkbox.Control className="w-5 h-5 bg-white border-2 border-gray-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[hover]:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-[hover]:border-gray-400 transition-all duration-200 flex items-center justify-center mt-0.5">
        <Checkbox.Indicator>
          <CheckIcon className="w-3.5 h-3.5 text-white" />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <div className="flex flex-col">
        <Checkbox.Label className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
          Marketing emails
        </Checkbox.Label>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Receive emails about new products, features, and more.
        </p>
      </div>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
}
