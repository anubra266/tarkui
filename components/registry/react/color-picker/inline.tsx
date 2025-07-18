"use client";
import { ColorPicker, parseColor } from "@ark-ui/react/color-picker";
import { PipetteIcon } from "lucide-react";

export default function InlineColorPicker() {
  const presets = [
    "#e74c3c",
    "#f1c40f",
    "#2ecc71",
    "#1abc9c",
    "#3498db",
    "#4a90e2",
    "#5b67d1",
    "#663399",
    "#9b59b6",
    "#e91e63",
  ];

  return (
    <ColorPicker.Root defaultValue={parseColor("#000000")} inline>
      <ColorPicker.Content className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg space-y-4 z-50 w-80">
        {/* Color Area */}
        <ColorPicker.Area className="w-full h-36 rounded-md overflow-hidden relative">
          <ColorPicker.AreaBackground className="w-full h-full" />
          <ColorPicker.AreaThumb className="absolute w-3 h-3 bg-white border-2 border-black rounded-full shadow-sm -translate-x-1/2 -translate-y-1/2" />
        </ColorPicker.Area>

        {/* Eye Dropper and Sliders */}
        <div className="flex items-center gap-3">
          <ColorPicker.EyeDropperTrigger className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <PipetteIcon className="w-4 h-4" />
          </ColorPicker.EyeDropperTrigger>

          <div className="flex-1 space-y-2">
            {/* Hue Slider */}
            <ColorPicker.ChannelSlider
              channel="hue"
              className="relative w-full h-3 rounded-full overflow-hidden"
            >
              <ColorPicker.ChannelSliderTrack className="w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 via-purple-500 to-red-500" />
              <ColorPicker.ChannelSliderThumb className="absolute top-1/2 w-3 h-3 bg-white border-2 border-black rounded-full shadow-sm -translate-y-1/2 -translate-x-1/2" />
            </ColorPicker.ChannelSlider>

            {/* Alpha Slider */}
            <ColorPicker.ChannelSlider
              channel="alpha"
              className="relative w-full h-3 rounded-full overflow-hidden"
            >
              <ColorPicker.TransparencyGrid className="w-full h-full [--size:8px]" />
              <ColorPicker.ChannelSliderTrack className="w-full h-full" />
              <ColorPicker.ChannelSliderThumb className="absolute top-1/2 w-3 h-3 bg-white border-2 border-black rounded-full shadow-sm -translate-y-1/2 -translate-x-1/2" />
            </ColorPicker.ChannelSlider>
          </div>
        </div>

        {/* Input Fields */}
        <div className="flex gap-2">
          <ColorPicker.ChannelInput
            channel="hex"
            className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <ColorPicker.ChannelInput
            channel="alpha"
            className="w-16 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Saved Colors */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Saved Colors
          </h4>
          <ColorPicker.SwatchGroup className="grid grid-cols-7 gap-2">
            {presets.map((color) => (
              <ColorPicker.SwatchTrigger key={color} value={color}>
                <ColorPicker.Swatch
                  value={color}
                  className="w-8 h-8 rounded-md border border-gray-300 dark:border-gray-600 cursor-pointer hover:scale-110 transition-transform"
                >
                  <ColorPicker.SwatchIndicator className="w-full h-full flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </ColorPicker.SwatchIndicator>
                </ColorPicker.Swatch>
              </ColorPicker.SwatchTrigger>
            ))}
          </ColorPicker.SwatchGroup>
        </div>
      </ColorPicker.Content>
      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
  );
}
