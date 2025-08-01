"use client";

import { RadioGroup } from "@ark-ui/react/radio-group";

export default function Disabled() {
  const options = [
    { value: "option1", label: "Option 1", disabled: false },
    { value: "option2", label: "Option 2", disabled: true },
    { value: "option3", label: "Option 3", disabled: false },
    { value: "option4", label: "Option 4", disabled: true },
  ];

  return (
    <RadioGroup.Root className="flex flex-col space-y-3" defaultValue="option1">
      {options.map((option) => (
        <RadioGroup.Item
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          className="flex items-center gap-3 cursor-pointer data-[disabled]:cursor-not-allowed"
        >
          <RadioGroup.ItemControl className="group size-4 bg-white border-2 border-gray-300 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 data-[disabled]:bg-gray-100 data-[disabled]:border-gray-200 data-[disabled]:data-hover:border-gray-200 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 dark:data-[disabled]:bg-gray-800 dark:data-[disabled]:border-gray-700 dark:data-[disabled]:data-hover:border-gray-700 data-focus:ring-2 data-focus:ring-blue-500/50 transition-all duration-200 flex items-center justify-center text-white">
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="currentcolor"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity"
            >
              <circle cx="3" cy="3" r="3"></circle>
            </svg>
          </RadioGroup.ItemControl>

          <RadioGroup.ItemText className="text-sm font-medium text-gray-900 dark:text-gray-100 data-[disabled]:text-gray-400 dark:data-[disabled]:text-gray-500">
            {option.label}
          </RadioGroup.ItemText>

          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
