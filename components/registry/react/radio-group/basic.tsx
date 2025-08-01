"use client";

import { RadioGroup } from "@ark-ui/react/radio-group";

export default function Basic() {
  const options = ["Pizza", "Burger", "Sushi"];

  return (
    <RadioGroup.Root className="flex flex-col space-y-2">
      <RadioGroup.Indicator />
      {options.map((option) => (
        <RadioGroup.Item
          key={option}
          value={option}
          className="flex items-center gap-2 cursor-pointer"
        >
          <RadioGroup.ItemControl className="group size-4 bg-white border-2 border-gray-300 rounded-full data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-hover:border-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500 dark:data-hover:border-gray-400 data-focus:ring-2 data-focus:ring-blue-500/50 transition-all duration-200 flex items-center justify-center text-white">
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
          <RadioGroup.ItemText className="text-sm font-medium">
            {option}
          </RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
