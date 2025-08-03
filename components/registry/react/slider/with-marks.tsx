"use client";

import { Slider } from "@ark-ui/react/slider";

export default function SliderWithMarks() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div className="max-w-md w-full">
        <Slider.Root defaultValue={[50]}>
          <Slider.ValueText className="text-sm text-gray-600 dark:text-gray-400 mb-4" />
          <Slider.Control className="relative flex items-center h-5">
            <Slider.Track className="relative flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <Slider.Range className="absolute h-full bg-blue-600 dark:bg-blue-500 rounded-full" />
            </Slider.Track>
            <Slider.Thumb
              index={0}
              className="relative w-5 h-5 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 z-10"
            >
              <Slider.HiddenInput />
            </Slider.Thumb>
          </Slider.Control>
          <Slider.MarkerGroup className="mt-[-4px] flex justify-between text-xs text-gray-500 dark:text-gray-400">
            {[0, 25, 50, 75, 100].map((value) => (
              <Slider.Marker
                key={value}
                value={value}
                className="relative before:absolute before:-top-2 before:left-1/2 before:transform before:-translate-x-1/2 before:w-1 before:h-1 before:bg-gray-400 dark:before:bg-gray-500 before:rounded-full data-[state=under-value]:before:bg-white dark:data-[state=under-value]:before:bg-gray-300 pt-3"
              >
                {value}
              </Slider.Marker>
            ))}
          </Slider.MarkerGroup>
        </Slider.Root>
      </div>
    </div>
  );
}
