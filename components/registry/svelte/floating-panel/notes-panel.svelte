<script lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel";
  import {
    FileText,
    Plus,
    ArrowDownLeft,
    Maximize2,
    Minus,
    X,
  } from "lucide-svelte";

  let note = "";

  const notes = [
    {
      id: 1,
      title: "Meeting Notes",
      preview: "Discussed project timeline and deliverables...",
      date: "Today",
    },
    {
      id: 2,
      title: "Ideas",
      preview: "New feature concepts for the mobile app...",
      date: "Yesterday",
    },
    {
      id: 3,
      title: "Shopping List",
      preview: "Milk, bread, eggs, tomatoes...",
      date: "2 days ago",
    },
  ];
</script>

<div class="relative h-96">
  <FloatingPanel.Root
    defaultSize={{ width: 360, height: 480 }}
    minSize={{ width: 320, height: 400 }}
    maxSize={{ width: 500, height: 600 }}
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
            <FileText class="w-4 h-4 text-yellow-500" />
            <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
              Notes
            </h3>
          </div>
          <div class="flex items-center gap-1">
            <button
              class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Plus class="w-3 h-3" />
            </button>
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
        <FloatingPanel.Body class="flex flex-col h-full">
          <!-- Notes List -->
          <div class="flex-1 p-4 space-y-3 overflow-y-auto">
            {#each notes as noteItem (noteItem.id)}
              <div
                class="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
              >
                <div class="flex justify-between items-start mb-1">
                  <h4
                    class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate"
                  >
                    {noteItem.title}
                  </h4>
                  <span
                    class="text-xs text-gray-500 dark:text-gray-400 ml-2 shrink-0"
                  >
                    {noteItem.date}
                  </span>
                </div>
                <p
                  class="text-xs text-gray-600 dark:text-gray-400 line-clamp-2"
                >
                  {noteItem.preview}
                </p>
              </div>
            {/each}
          </div>

          <!-- Quick Note Input -->
          <div
            class="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          >
            <div class="space-y-2">
              <label
                class="text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                Quick Note
              </label>
              <textarea
                bind:value={note}
                placeholder="Jot down a quick note..."
                class="w-full h-20 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 resize-none"
              />
              <button
                disabled={!note.trim()}
                class="w-full px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Save Note
              </button>
            </div>
          </div>
        </FloatingPanel.Body>
      </FloatingPanel.Content>
    </FloatingPanel.Positioner>
  </FloatingPanel.Root>
</div>
