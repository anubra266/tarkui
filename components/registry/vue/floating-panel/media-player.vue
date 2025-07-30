<script setup lang="ts">
import { FloatingPanel } from "@ark-ui/vue/floating-panel";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Heart,
  Shuffle,
  Repeat,
  X,
} from "lucide-vue-next";
import { ref } from "vue";

const isPlaying = ref(false);
const currentTime = ref(145);
const duration = ref(210);

const albumArt =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop";
const trackTitle = "Midnight Dreams";
const artist = "Luna & The Stars";

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};
</script>

<template>
  <div class="relative h-96">
    <FloatingPanel.Root
      :default-size="{ width: 400, height: 300 }"
      :min-size="{ width: 350, height: 280 }"
      :max-size="{ width: 500, height: 400 }"
      class="w-full h-full"
    >
      <FloatingPanel.Positioner class="fixed">
        <FloatingPanel.Content
          class="bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 border border-gray-700 rounded-lg shadow-lg text-white data-[stage=maximized]:rounded-none"
        >
          <FloatingPanel.Header
            class="flex items-center justify-between p-4 rounded-t-lg"
          >
            <h3 class="text-sm font-medium opacity-90">Now Playing</h3>
            <FloatingPanel.CloseTrigger
              class="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white rounded hover:bg-white/10 transition-colors"
            >
              <X class="w-3 h-3" />
            </FloatingPanel.CloseTrigger>
          </FloatingPanel.Header>
          <FloatingPanel.Body class="p-6 space-y-6">
            <!-- Album Art and Info -->
            <div class="flex items-center gap-4">
              <img
                :src="albumArt"
                alt="Album artwork"
                class="w-16 h-16 rounded-lg object-cover shadow-lg"
              />
              <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-white truncate">
                  {{ trackTitle }}
                </h4>
                <p class="text-sm text-gray-300 truncate">{{ artist }}</p>
              </div>
              <button
                class="w-8 h-8 flex items-center justify-center text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Heart class="w-5 h-5" />
              </button>
            </div>

            <!-- Progress Bar -->
            <div class="space-y-2">
              <div class="w-full bg-white/20 rounded-full h-1">
                <div
                  class="bg-white h-1 rounded-full transition-all"
                  :style="{ width: `${(currentTime / duration) * 100}%` }"
                />
              </div>
              <div class="flex justify-between text-xs text-gray-300">
                <span>{{ formatTime(currentTime) }}</span>
                <span>{{ formatTime(duration) }}</span>
              </div>
            </div>

            <!-- Controls -->
            <div class="flex items-center justify-center gap-6">
              <button
                class="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <Shuffle class="w-4 h-4" />
              </button>
              <button
                class="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <SkipBack class="w-5 h-5" />
              </button>
              <button
                @click="isPlaying = !isPlaying"
                class="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
              >
                <Play v-if="!isPlaying" class="w-5 h-5 ml-0.5" />
                <Pause v-else class="w-5 h-5" />
              </button>
              <button
                class="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <SkipForward class="w-5 h-5" />
              </button>
              <button
                class="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <Repeat class="w-4 h-4" />
              </button>
            </div>

            <!-- Volume -->
            <div class="flex items-center gap-3">
              <Volume2 class="w-4 h-4 text-gray-300" />
              <div class="flex-1 bg-white/20 rounded-full h-1">
                <div class="bg-white h-1 rounded-full w-3/4" />
              </div>
            </div>
          </FloatingPanel.Body>
        </FloatingPanel.Content>
      </FloatingPanel.Positioner>
    </FloatingPanel.Root>
  </div>
</template>
