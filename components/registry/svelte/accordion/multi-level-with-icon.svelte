<script>
  const items = [
    {
      id: "responsive-web-apps",
      title: "Build responsive web applications",
      content: "Create fluid layouts that adapt seamlessly across devices using CSS Grid, Flexbox, and media queries for optimal user experience."
    },
    {
      id: "user-interfaces",
      title: "Create engaging user interfaces",
      content: "Design intuitive interfaces with smooth animations, thoughtful color schemes, and interactive elements that delight users."
    },
    {
      id: "authentication",
      title: "Implement modern authentication",
      content: "Secure your applications with OAuth, JWT tokens, and multi-factor authentication for robust user protection."
    },
    {
      id: "performance",
      title: "Optimize for performance",
      content: "Enhance loading speeds through code splitting, lazy loading, and efficient bundling strategies that improve user satisfaction."
    }
  ];

  import { Accordion } from "@ark-ui/svelte/accordion";
  import {
    ChevronDown,
    Sparkles,
    Settings,
    Zap,
    HelpCircle,
    BarChart3,
    Code,
  } from "lucide-svelte";

  const items = [
    { text: "Advanced data visualization techniques", icon: Sparkles },
    { text: "Machine learning for beginners", icon: Settings },
    { text: "Sustainable urban planning methods", icon: Zap },
    { text: "Psychology of human behavior", icon: HelpCircle },
  ];

  const nestedItemsByTopic = {
    "Advanced data visualization techniques": [
      { text: "Interactive dashboard design", icon: BarChart3 },
      { text: "Statistical chart selection", icon: Code },
    ],
    "Machine learning for beginners": [
      { text: "Supervised learning basics", icon: BarChart3 },
      { text: "Data preprocessing steps", icon: Code },
    ],
    "Sustainable urban planning methods": [
      { text: "Green building certification programs", icon: BarChart3 },
      { text: "Community engagement strategies", icon: Code },
    ],
    "Psychology of human behavior": [
      { text: "Cognitive bias patterns", icon: BarChart3 },
      { text: "Social influence mechanisms", icon: Code },
    ],
  };
</script>

<Accordion.Root
  defaultValue={["user-interfaces"]}
  collapsible
  class="w-full max-w-md mx-auto bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
>
  {#each items as item}
    <Accordion.Item
      value={item.id}
      class="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
    >
      <Accordion.ItemTrigger class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
        <div class="flex items-center">
          <svelte:component this={item.icon} class="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3" />
          <span class="font-medium text-gray-900 dark:text-white text-sm">
            {item.text}
          </span>
        </div>
        <Accordion.ItemIndicator class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180">
          <ChevronDown class="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="px-4 pb-3">
          <div class="pt-1 mb-3">
            {item.content}
          </div>

          <!-- Nested accordion -->
          <Accordion.Root
            collapsible
            class="border-l-2 border-blue-500/20 ml-2"
          >
            {#each items as item}
              <Accordion.Item
                value={item.id}
                class="group border-b border-gray-200/30 dark:border-gray-700/30 last:border-b-0"
              >
                <Accordion.ItemTrigger class="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
                  <div class="flex items-center">
                    <svelte:component this={nestedItem.icon} class="w-3 h-3 text-blue-500 dark:text-blue-400 mr-2" />
                    <span class="font-medium text-gray-800 dark:text-gray-200 text-sm">
                      {nestedItem.text}
                    </span>
                  </div>
                  <Accordion.ItemIndicator class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180">
                    <ChevronDown class="w-3 h-3 text-gray-500 dark:text-gray-500" />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent class="px-3 pb-2 text-xs text-gray-600 dark:text-gray-400">
                  <div class="pt-1">
                    {item.content}
                  </div>
                </Accordion.ItemContent>
              </Accordion.Item>
            {/each}
          </Accordion.Root>
        </div>
      </Accordion.ItemContent>
    </Accordion.Item>
  {/each}
</Accordion.Root>
