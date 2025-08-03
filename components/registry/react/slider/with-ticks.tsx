"use client";

import { Slider } from "@ark-ui/react/slider";

export default function SliderWithTicks() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div className="max-w-md w-full">
        <Slider.Root defaultValue={[50]} max={100}>
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
          <Slider.MarkerGroup className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
            {[
              0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80,
              85, 90, 95, 100,
            ].map((value) => (
              <Slider.Marker
                key={value}
                value={value}
                className={`relative before:absolute before:-top-3 before:left-1/2 before:transform before:-translate-x-1/2 before:bg-gray-400 dark:before:bg-gray-500 before:data-[state=under-value]:bg-white dark:before:data-[state=under-value]:bg-gray-300 before:w-[1px] mt-2 ${
                  value % 10 === 0 ? "before:h-1.5" : "before:h-1"
                }`}
              >
                {value % 10 === 0 ? value : ""}
              </Slider.Marker>
            ))}
          </Slider.MarkerGroup>
        </Slider.Root>
      </div>
    </div>
  );
}
