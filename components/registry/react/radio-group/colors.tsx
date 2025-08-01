"use client";

import { RadioGroup } from "@ark-ui/react/radio-group";

export default function Colors() {
  return (
    <RadioGroup.Root className="flex gap-3" defaultValue="red">
      <RadioGroup.Item value="red" className="cursor-pointer">
        <RadioGroup.ItemControl className="group size-6 border-2 border-red-500 rounded-full data-[state=checked]:border-red-500 hover:border-red-500 data-focus:ring-2 data-focus:ring-red-500/50 transition-all duration-200 flex items-center justify-center bg-red-500">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity text-white"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
        </RadioGroup.ItemControl>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>

      <RadioGroup.Item value="blue" className="cursor-pointer">
        <RadioGroup.ItemControl className="group size-6 border-2 border-blue-500 rounded-full data-[state=checked]:border-blue-500 hover:border-blue-500 data-focus:ring-2 data-focus:ring-blue-500/50 transition-all duration-200 flex items-center justify-center bg-blue-500">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity text-white"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
        </RadioGroup.ItemControl>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>

      <RadioGroup.Item value="green" className="cursor-pointer">
        <RadioGroup.ItemControl className="group size-6 border-2 border-green-500 rounded-full data-[state=checked]:border-green-500 hover:border-green-500 data-focus:ring-2 data-focus:ring-green-500/50 transition-all duration-200 flex items-center justify-center bg-green-500">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity text-white"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
        </RadioGroup.ItemControl>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>

      <RadioGroup.Item value="yellow" className="cursor-pointer">
        <RadioGroup.ItemControl className="group size-6 border-2 border-yellow-500 rounded-full data-[state=checked]:border-yellow-500 hover:border-yellow-500 data-focus:ring-2 data-focus:ring-yellow-500/50 transition-all duration-200 flex items-center justify-center bg-yellow-500">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity text-white"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
        </RadioGroup.ItemControl>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>

      <RadioGroup.Item value="purple" className="cursor-pointer">
        <RadioGroup.ItemControl className="group size-6 border-2 border-purple-500 rounded-full data-[state=checked]:border-purple-500 hover:border-purple-500 data-focus:ring-2 data-focus:ring-purple-500/50 transition-all duration-200 flex items-center justify-center bg-purple-500">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity text-white"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
        </RadioGroup.ItemControl>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>

      <RadioGroup.Item value="pink" className="cursor-pointer">
        <RadioGroup.ItemControl className="group size-6 border-2 border-pink-500 rounded-full data-[state=checked]:border-pink-500 hover:border-pink-500 data-focus:ring-2 data-focus:ring-pink-500/50 transition-all duration-200 flex items-center justify-center bg-pink-500">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-0 group-data-[state=checked]:opacity-100 transition-opacity text-white"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
        </RadioGroup.ItemControl>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
}
