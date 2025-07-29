<script setup lang="ts">
import { FloatingPanel } from "@ark-ui/vue/floating-panel";
import {
  Settings,
  Bell,
  Shield,
  Palette,
  Monitor,
  ArrowDownLeft,
  Maximize2,
  Minus,
  X,
} from "lucide-vue-next";
import { ref } from "vue";

const notifications = ref(true);
const darkMode = ref(false);
const autoSave = ref(true);
</script>

<template>
  <div class="relative h-96">
    <FloatingPanel.Root
      :default-size="{ width: 400, height: 500 }"
      :min-size="{ width: 350, height: 400 }"
      :max-size="{ width: 500, height: 600 }"
      class="w-full h-full"
    >
      <FloatingPanel.Positioner class="fixed">
        <FloatingPanel.Content
          class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg data-[stage=maximized]:rounded-none"
        >
          <FloatingPanel.Header
            class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 rounded-t-lg"
          >
            <div class="flex items-center gap-2">
              <Settings class="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
                Settings
              </h3>
            </div>
            <div class="flex items-center gap-1">
              <FloatingPanel.MinimizeTrigger
                class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Minus class="w-3 h-3" />
              </FloatingPanel.MinimizeTrigger>
              <FloatingPanel.MaximizeTrigger
                class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Maximize2 class="w-3 h-3" />
              </FloatingPanel.MaximizeTrigger>
              <FloatingPanel.RestoreTrigger
                class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <ArrowDownLeft class="w-3 h-3" />
              </FloatingPanel.RestoreTrigger>
              <FloatingPanel.CloseTrigger
                class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X class="w-3 h-3" />
              </FloatingPanel.CloseTrigger>
            </div>
          </FloatingPanel.Header>
          <FloatingPanel.Body class="p-4 space-y-6 overflow-y-auto">
            <!-- Appearance Section -->
            <div>
              <h4
                class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2"
              >
                <Palette class="w-4 h-4" />
                Appearance
              </h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-900 dark:text-gray-100">
                      Dark Mode
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Switch to dark theme
                    </p>
                  </div>
                  <button
                    @click="darkMode = !darkMode"
                    :class="`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                      darkMode ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`"
                  >
                    <span
                      :class="`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                        darkMode ? 'translate-x-5' : 'translate-x-1'
                      }`"
                    />
                  </button>
                </div>
              </div>
            </div>

            <!-- Notifications Section -->
            <div>
              <h4
                class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2"
              >
                <Bell class="w-4 h-4" />
                Notifications
              </h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-900 dark:text-gray-100">
                      Push Notifications
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Receive notifications on your device
                    </p>
                  </div>
                  <button
                    @click="notifications = !notifications"
                    :class="`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                      notifications
                        ? 'bg-blue-500'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`"
                  >
                    <span
                      :class="`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                        notifications ? 'translate-x-5' : 'translate-x-1'
                      }`"
                    />
                  </button>
                </div>
              </div>
            </div>

            <!-- Privacy Section -->
            <div>
              <h4
                class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2"
              >
                <Shield class="w-4 h-4" />
                Privacy & Security
              </h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-900 dark:text-gray-100">
                      Auto-save
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      Automatically save your work
                    </p>
                  </div>
                  <button
                    @click="autoSave = !autoSave"
                    :class="`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                      autoSave ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`"
                  >
                    <span
                      :class="`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                        autoSave ? 'translate-x-5' : 'translate-x-1'
                      }`"
                    />
                  </button>
                </div>
                <button
                  class="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <p class="text-sm text-gray-900 dark:text-gray-100">
                    Clear Cache
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Free up storage space
                  </p>
                </button>
              </div>
            </div>

            <!-- System Section -->
            <div>
              <h4
                class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2"
              >
                <Monitor class="w-4 h-4" />
                System
              </h4>
              <div class="space-y-3">
                <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400"
                      >Version</span
                    >
                    <span class="text-gray-900 dark:text-gray-100">2.1.0</span>
                  </div>
                </div>
                <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600 dark:text-gray-400"
                      >Storage Used</span
                    >
                    <span class="text-gray-900 dark:text-gray-100">1.2 GB</span>
                  </div>
                </div>
              </div>
            </div>
          </FloatingPanel.Body>
        </FloatingPanel.Content>
      </FloatingPanel.Positioner>
    </FloatingPanel.Root>
  </div>
</template>
