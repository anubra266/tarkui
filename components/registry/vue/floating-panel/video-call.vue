<script setup lang="ts">
import { FloatingPanel } from "@ark-ui/vue/floating-panel";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Phone,
  ArrowDownLeft,
  Maximize2,
  Minus,
  X,
} from "lucide-vue-next";
import { ref } from "vue";

const isMuted = ref(false);
const isVideoOff = ref(false);
</script>

<template>
  <div class="relative h-96">
    <FloatingPanel.Root
      :default-size="{ width: 480, height: 360 }"
      :min-size="{ width: 400, height: 300 }"
      :max-size="{ width: 800, height: 600 }"
      class="w-full h-full"
    >
      <FloatingPanel.Positioner class="fixed">
        <FloatingPanel.Content
          class="bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden data-[stage=maximized]:rounded-none"
        >
          <FloatingPanel.Header
            class="flex items-center justify-between p-3 bg-gray-800/50 backdrop-blur-xs"
          >
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <h3 class="text-sm font-medium text-white">Sarah Johnson</h3>
              <span class="text-xs text-gray-300">00:12:34</span>
            </div>
            <div class="flex items-center gap-1">
              <FloatingPanel.MinimizeTrigger
                class="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white rounded hover:bg-white/10 transition-colors"
              >
                <Minus class="w-3 h-3" />
              </FloatingPanel.MinimizeTrigger>
              <FloatingPanel.MaximizeTrigger
                class="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white rounded hover:bg-white/10 transition-colors"
              >
                <Maximize2 class="w-3 h-3" />
              </FloatingPanel.MaximizeTrigger>
              <FloatingPanel.RestoreTrigger
                class="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white rounded hover:bg-white/10 transition-colors"
              >
                <ArrowDownLeft class="w-3 h-3" />
              </FloatingPanel.RestoreTrigger>
              <FloatingPanel.CloseTrigger
                class="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white rounded hover:bg-white/10 transition-colors"
              >
                <X class="w-3 h-3" />
              </FloatingPanel.CloseTrigger>
            </div>
          </FloatingPanel.Header>
          <FloatingPanel.Body
            class="relative flex-1 bg-linear-to-br from-blue-600 to-purple-700"
          >
            <!-- Main Video -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center"
              >
                <div
                  class="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center"
                >
                  <span class="text-2xl font-semibold text-white">SJ</span>
                </div>
              </div>
            </div>

            <!-- Self Video (Picture-in-Picture) -->
            <div
              class="absolute top-4 right-4 w-24 h-18 bg-gray-800 rounded-lg border border-gray-600 overflow-hidden"
            >
              <div
                class="w-full h-full bg-linear-to-br from-green-500 to-blue-600 flex items-center justify-center"
              >
                <span class="text-xs font-medium text-white">You</span>
              </div>
            </div>

            <!-- Call Controls -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div
                class="flex items-center gap-3 p-3 bg-black/30 backdrop-blur-xs rounded-full"
              >
                <button
                  @click="isMuted = !isMuted"
                  :class="`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isMuted
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`"
                >
                  <MicOff v-if="isMuted" class="w-4 h-4" />
                  <Mic v-else class="w-4 h-4" />
                </button>

                <button
                  @click="isVideoOff = !isVideoOff"
                  :class="`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isVideoOff
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`"
                >
                  <VideoOff v-if="isVideoOff" class="w-4 h-4" />
                  <Video v-else class="w-4 h-4" />
                </button>

                <button
                  class="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <Phone class="w-4 h-4" />
                </button>
              </div>
            </div>
          </FloatingPanel.Body>
        </FloatingPanel.Content>
      </FloatingPanel.Positioner>
    </FloatingPanel.Root>
  </div>
</template>
