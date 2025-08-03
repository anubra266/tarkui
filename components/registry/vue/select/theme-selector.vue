<template>
  <div
    class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
  >
    <div class="max-w-sm w-full">
      <Select.Root
        :collection="collection"
        :default-value="['system']"
        @value-change="handleValueChange"
      >
        <Select.Label
          class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2"
        >
          Theme
        </Select.Label>
        <Select.Control>
          <Select.Trigger
            class="flex h-10 w-full items-center justify-between rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
          >
            <div class="flex items-center gap-2">
              <component
                :is="selectedThemeData?.icon || MonitorIcon"
                class="h-4 w-4 text-gray-500 dark:text-gray-400"
              />
              <Select.ValueText placeholder="Select a theme" />
            </div>
            <Select.Indicator>
              <ChevronDownIcon
                class="h-4 w-4 text-gray-500 dark:text-gray-400"
              />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger
            class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mt-1"
          >
            Clear
          </Select.ClearTrigger>
        </Select.Control>
        <Teleport to="body">
          <Select.Positioner>
            <Select.Content
              class="z-50 min-w-(--reference-width) rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg"
            >
              <Select.ItemGroup>
                <Select.ItemGroupLabel
                  class="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide"
                >
                  Themes
                </Select.ItemGroupLabel>
                <Select.Item
                  v-for="theme in themes"
                  :key="theme.value"
                  :item="theme"
                  class="relative flex cursor-pointer select-none items-center px-3 py-2 text-sm text-gray-900 dark:text-gray-100 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-700 data-[state=checked]:bg-gray-50 dark:data-[state=checked]:bg-gray-700"
                >
                  <component
                    :is="theme.icon"
                    class="mr-3 h-4 w-4 text-gray-500 dark:text-gray-400"
                  />
                  <Select.ItemText>{{ theme.label }}</Select.ItemText>
                  <Select.ItemIndicator
                    class="absolute right-3 text-blue-600 dark:text-blue-400"
                  >
                    ✓
                  </Select.ItemIndicator>
                </Select.Item>
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Teleport>
        <Select.HiddenSelect />
      </Select.Root>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Select, createListCollection } from "@ark-ui/vue/select";
import {
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
  MonitorIcon,
} from "lucide-vue-next";
import { ref, computed } from "vue";

interface Theme {
  label: string;
  value: string;
  icon: any;
}

const selectedTheme = ref<string>("system");

const themes: Theme[] = [
  { label: "Light", value: "light", icon: SunIcon },
  { label: "Dark", value: "dark", icon: MoonIcon },
  { label: "System", value: "system", icon: MonitorIcon },
];

const collection = createListCollection<Theme>({ items: themes });

const selectedThemeData = computed(() =>
  themes.find((theme) => theme.value === selectedTheme.value)
);

const handleValueChange = (e: any) => {
  selectedTheme.value = e.value[0] || "system";
};
</script>
