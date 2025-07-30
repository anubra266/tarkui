<script>
  import { Portal } from "@ark-ui/svelte/portal";
  import { ColorPicker, parseColor } from "@ark-ui/svelte/color-picker";
  import { PipetteIcon } from "lucide-svelte";
</script>

<div class="w-full max-w-sm">
  <ColorPicker.Root defaultValue={parseColor("#000000")}>
    <div class="space-y-4">
      <!-- Header with input and color swatch -->
      <div class="flex items-center gap-3">
        <ColorPicker.Control class="flex-1">
          <ColorPicker.ChannelInput
            channel="hex"
            class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </ColorPicker.Control>
        <ColorPicker.Trigger
          class="w-12 h-10 rounded-md border-2 border-gray-300 dark:border-gray-600 overflow-hidden cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
        >
          <ColorPicker.TransparencyGrid
            class="w-full h-full [--size:8px] opacity-50"
          />
          <ColorPicker.ValueSwatch class="w-full h-full" />
        </ColorPicker.Trigger>
      </div>

      <!-- Color Picker Content -->
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg space-y-4 z-50 w-80"
          >
            <!-- Color Area -->
            <ColorPicker.Area
              class="w-full h-36 rounded-md overflow-hidden relative"
            >
              <ColorPicker.AreaBackground class="w-full h-full" />
              <ColorPicker.AreaThumb
                class="absolute w-3 h-3 bg-white border-2 border-black rounded-full shadow-xs -translate-x-1/2 -translate-y-1/2"
              />
            </ColorPicker.Area>

            <!-- Eye Dropper and Sliders -->
            <div class="flex items-center gap-3">
              <ColorPicker.EyeDropperTrigger
                class="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <PipetteIcon class="w-4 h-4" />
              </ColorPicker.EyeDropperTrigger>

              <div class="flex-1 space-y-2">
                <!-- Hue Slider -->
                <ColorPicker.ChannelSlider
                  channel="hue"
                  class="relative w-full h-3 rounded-full overflow-hidden"
                >
                  <ColorPicker.ChannelSliderTrack
                    class="w-full h-full bg-linear-to-r from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 via-purple-500 to-red-500"
                  />
                  <ColorPicker.ChannelSliderThumb
                    class="absolute top-1/2 w-3 h-3 bg-white border-2 border-black rounded-full shadow-xs -translate-y-1/2 -translate-x-1/2"
                  />
                </ColorPicker.ChannelSlider>

                <!-- Alpha Slider -->
                <ColorPicker.ChannelSlider
                  channel="alpha"
                  class="relative w-full h-3 rounded-full overflow-hidden"
                >
                  <ColorPicker.TransparencyGrid
                    class="w-full h-full [--size:8px]"
                  />
                  <ColorPicker.ChannelSliderTrack class="w-full h-full" />
                  <ColorPicker.ChannelSliderThumb
                    class="absolute top-1/2 w-3 h-3 bg-white border-2 border-black rounded-full shadow-xs -translate-y-1/2 -translate-x-1/2"
                  />
                </ColorPicker.ChannelSlider>
              </div>
            </div>

            <!-- Input Fields -->
            <div class="flex gap-2">
              <ColorPicker.ChannelInput
                channel="hex"
                class="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <ColorPicker.ChannelInput
                channel="alpha"
                class="w-16 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </div>
    <ColorPicker.HiddenInput />
  </ColorPicker.Root>
</div>
