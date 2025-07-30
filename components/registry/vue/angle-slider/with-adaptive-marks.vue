<script setup lang="ts">
import { AngleSlider } from "@ark-ui/vue/angle-slider";

const markerValues = [0, 45, 90, 135, 180, 225, 270, 315];
</script>

<template>
  <AngleSlider.Root
    :default-value="45"
    class="relative flex items-center justify-center"
  >
    <AngleSlider.Control
      class="[--size:200px] [--thumb-color:rgb(59_130_246)] dark:[--thumb-color:rgb(96_165_250)] [--thumb-size:40px] [--thumb-indicator-size:min(var(--thumb-size),calc(var(--size)/2))] w-(--size) h-(--size) rounded-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 flex items-center justify-center user-select:none relative"
    >
      <AngleSlider.Thumb
        class="absolute top-0 right-0 bottom-0 left-[calc(50%-1.5px)] pointer-events-none h-full w-[3px] outline-hidden before:absolute before:right-0 before:top-0 before:h-(--thumb-indicator-size) before:bg-(--thumb-color) before:w-[3px] before:rounded-full"
      />
      <AngleSlider.MarkerGroup
        class="absolute inset-px rounded-(--size) pointer-events-none"
      >
        <AngleSlider.Marker
          v-for="(value, i) in markerValues"
          :key="i"
          :value="value"
          class="w-0.5 absolute top-0 bottom-0 left-[calc(50%-1px)] [--marker-color:rgb(203_213_225)] dark:[--marker-color:rgb(148_163_184)] data-[state=under-value]:[--marker-color:rgb(34_197_94)] data-[state=at-value]:[--marker-color:rgb(59_130_246)] data-[state=over-value]:[--marker-color:rgb(203_213_225)] dark:data-[state=under-value]:[--marker-color:rgb(74_222_128)] dark:data-[state=at-value]:[--marker-color:rgb(96_165_250)] dark:data-[state=over-value]:[--marker-color:rgb(148_163_184)] before:absolute before:top-[calc(var(--thumb-size)/3)] before:left-[0.5px] before:h-[calc(var(--thumb-size)/1.5)] before:bg-(--marker-color) before:w-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full"
        />
      </AngleSlider.MarkerGroup>
      <div class="flex items-center flex-col gap-0">
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
      </div>
    </AngleSlider.Control>
    <AngleSlider.HiddenInput />
  </AngleSlider.Root>
</template>
