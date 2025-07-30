<script lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel";
  import { Send, ArrowDownLeft, Maximize2, Minus, X } from "lucide-svelte";

  let message = "";

  const messages = [
    { id: 1, text: "Hello! How can I help you today?", isUser: false },
    { id: 2, text: "Hi, I have a question about your product.", isUser: true },
    {
      id: 3,
      text: "I'd be happy to help! What would you like to know?",
      isUser: false,
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      message = "";
    }
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };
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
            <div
              class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
            >
              <span class="text-white text-sm font-medium">CS</span>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
                Customer Support
              </h3>
              <p class="text-xs text-green-500">Online</p>
            </div>
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
        <FloatingPanel.Body class="flex flex-col h-full">
          <!-- Messages -->
          <div class="flex-1 p-4 space-y-3 overflow-y-auto">
            {#each messages as msg (msg.id)}
              <div class="flex {msg.isUser ? 'justify-end' : 'justify-start'}">
                <div
                  class="max-w-xs px-3 py-2 rounded-lg text-sm leading-relaxed {msg.isUser
                    ? 'bg-blue-500 text-white rounded-br-sm'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-sm'}"
                >
                  {msg.text}
                </div>
              </div>
            {/each}
          </div>

          <!-- Input -->
          <div
            class="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          >
            <div class="flex gap-2">
              <input
                bind:value={message}
                type="text"
                placeholder="Type your message..."
                on:keydown={handleKeydown}
                class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              />
              <button
                on:click={handleSend}
                disabled={!message.trim()}
                class="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send class="w-4 h-4" />
              </button>
            </div>
          </div>
        </FloatingPanel.Body>
      </FloatingPanel.Content>
    </FloatingPanel.Positioner>
  </FloatingPanel.Root>
</div>
