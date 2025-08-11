<script setup lang="ts">
import { Tour, useTour, type TourStepDetails } from "@ark-ui/vue/tour";
import { X } from "lucide-vue-next";

const steps: TourStepDetails[] = [
  {
    id: "welcome",
    type: "dialog" as const,
    title: "Welcome to Tark UI",
    description:
      "Let's take a quick tour of the documentation site to help you get started.",
    actions: [{ label: "Start Tour", action: "next" as const }],
  },
  {
    id: "framework-selector",
    type: "tooltip" as const,
    placement: "bottom" as const,
    target: () => document.querySelector("#framework-selector"),
    title: "Framework Selection",
    description:
      "Choose your preferred framework (React, Vue, Svelte, or Solid) to see framework-specific examples.",
    actions: [
      { label: "Previous", action: "prev" as const },
      { label: "Next", action: "next" as const },
    ],
  },
  {
    id: "component-examples",
    type: "tooltip" as const,
    placement: "bottom" as const,
    target: () => document.querySelector("#examples-count"),
    title: "Available Examples",
    description:
      "See how many examples are available for this component across different use cases.",
    actions: [
      { label: "Previous", action: "prev" as const },
      { label: "Next", action: "next" as const },
    ],
  },
  {
    id: "copy-code",
    type: "tooltip" as const,
    placement: "left" as const,
    target: () => document.querySelector("#copy-code-tour-0"),
    title: "Copy Code",
    description:
      "Click here to copy the component code to your clipboard and use it in your project.",
    actions: [
      { label: "Previous", action: "prev" as const },
      { label: "Next", action: "next" as const },
    ],
  },
  {
    id: "suggest-component",
    type: "tooltip" as const,
    placement: "top" as const,
    target: () => document.querySelector("#suggest-component"),
    title: "Suggest Components",
    description:
      "Missing a component? Click here to suggest new components for the library.",
    actions: [
      { label: "Previous", action: "prev" as const },
      { label: "Finish Tour", action: "dismiss" as const },
    ],
  },
];

const tour = useTour({ steps });
</script>

<template>
  <div class="space-y-4">
    <div class="text-center">
      <button
        @click="tour.start()"
        class="inline-flex items-center justify-center text-start cursor-pointer font-medium px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Start Documentation Tour
      </button>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
        This tour will guide you through the documentation site interface
      </p>
    </div>

    <Tour.Root :tour="tour">
      <Teleport to="body">
        <Tour.Backdrop
          class="backdrop-blur z-[1300] bg-white/10 dark:bg-black/10 data-[state=open]:animate-backdrop-in data-[state=closed]:animate-backdrop-out"
        />

        <Tour.Positioner
          class="flex items-center justify-center !z-[1400] data-[type=dialog]:fixed data-[type=dialog]:inset-0 data-[type=tooltip]:absolute"
        >
          <Tour.Content
            class="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col max-w-sm p-5"
          >
            <Tour.Arrow
              class="[--arrow-size:12px] [--arrow-background:theme(colors.white)] dark:[--arrow-background:theme(colors.gray.800)]"
            >
              <Tour.ArrowTip
                class="border-t border-l border-gray-200 dark:border-gray-700"
              />
            </Tour.Arrow>

            <Tour.CloseTrigger class="absolute top-3 right-3">
              <X class="w-4 h-4" />
            </Tour.CloseTrigger>

            <Tour.Title class="font-medium text-lg">
              {{ tour.step?.title }}
            </Tour.Title>

            <Tour.Description class="text-gray-600 dark:text-gray-400 text-sm">
              {{ tour.step?.description }}
            </Tour.Description>

            <Tour.ProgressText class="text-sm text-gray-600 dark:text-gray-400">
              {{ tour.getProgressText() }}
            </Tour.ProgressText>

            <Tour.Control class="flex gap-3 justify-end">
              <Tour.ActionTrigger
                v-for="(action, index) in tour.step?.actions"
                :key="index"
                :action="action"
                class="px-3 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                {{ action.label }}
              </Tour.ActionTrigger>
            </Tour.Control>
          </Tour.Content>
        </Tour.Positioner>

        <Tour.Spotlight
          class="border-[3px] border-solid border-blue-500 z-[1400]"
        />
      </Teleport>
    </Tour.Root>
  </div>
</template>
