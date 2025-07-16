<script setup lang="ts">
import { AngleSlider } from "@ark-ui/vue/angle-slider";

const markerPositions = [
  { value: 0, label: "0°" },
  { value: 45, label: "45°" },
  { value: 90, label: "90°" },
  { value: 135, label: "135°" },
  { value: 180, label: "180°" },
  { value: 225, label: "225°" },
  { value: 270, label: "270°" },
  { value: 315, label: "315°" },
];
</script>

<template>
  <AngleSlider.Root
    :default-value="75"
    class="relative flex items-center justify-center"
  >
    <AngleSlider.Control
      class="[--size:200px] [--thumb-color:rgb(59_130_246)] dark:[--thumb-color:rgb(96_165_250)] [--thumb-size:40px] [--thumb-indicator-size:min(var(--thumb-size),calc(var(--size)/2))] w-[var(--size)] h-[var(--size)] rounded-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center user-select:none relative"
    >
      <!-- Thumb indicator -->
      <AngleSlider.Thumb
        class="absolute top-0 right-0 bottom-0 left-[calc(50%-1.5px)] pointer-events-none h-full w-[3px] outline-none before:absolute before:right-0 before:top-0 before:h-[var(--thumb-indicator-size)] before:bg-[var(--thumb-color)] before:w-[3px] before:rounded-full"
      />

      <!-- Markers with lines -->
      <AngleSlider.MarkerGroup
        class="absolute inset-[1px] rounded-[var(--size)] pointer-events-none"
      >
        <AngleSlider.Marker
          v-for="(marker, i) in markerPositions"
          :key="i"
          :value="marker.value"
          class="w-0.5 absolute top-0 bottom-0 left-[calc(50%-1px)] [--marker-color:rgb(156_163_175)] dark:[--marker-color:rgb(209_213_219)] before:absolute before:top-[calc(var(--thumb-size)/3)] before:left-[0.5px] before:h-[calc(var(--thumb-size)/1.5)] before:bg-[var(--marker-color)] before:w-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full"
        />
      </AngleSlider.MarkerGroup>

      <!-- Marker labels positioned outside the circle -->
      <div class="absolute inset-0 pointer-events-none">
        <div
          v-for="(marker, i) in markerPositions"
          :key="`label-${i}`"
          class="absolute text-sm font-medium text-gray-700 dark:text-gray-300 -translate-x-1/2 -translate-y-1/2"
          :style="{
            left: `calc(50% + ${
              Math.cos((marker.value * Math.PI) / 180 - Math.PI / 2) * 114
            }px)`,
            top: `calc(50% + ${
              Math.sin((marker.value * Math.PI) / 180 - Math.PI / 2) * 114
            }px)`,
          }"
        >
          {{ marker.label }}
        </div>
      </div>

      <!-- Center content -->
      <AngleSlider.ValueText
        class="text-4xl text-gray-900 dark:text-white font-bold"
      >
        <AngleSlider.Context v-slot="context">
          {{ context.value }}°
        </AngleSlider.Context>
      </AngleSlider.ValueText>
      <AngleSlider.Label
        class="text-sm text-gray-600 dark:text-gray-300 font-medium"
      >
        degrees
      </AngleSlider.Label>
    </AngleSlider.Control>
    <AngleSlider.HiddenInput />
  </AngleSlider.Root>
</template>
