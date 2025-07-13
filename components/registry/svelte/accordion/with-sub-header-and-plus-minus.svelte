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
  import { Plus, Minus } from "lucide-svelte";

  const items = [
    {
      title: "Creative Writing",
      subtitle: "Develop your storytelling and narrative skills",
    },
    {
      title: "Digital Photography",
      subtitle: "Master composition, lighting, and editing techniques",
    },
    {
      title: "Mindful Living",
      subtitle: "Cultivate presence and inner peace daily",
    },
    {
      title: "Sustainable Gardening",
      subtitle: "Grow your own organic food and flowers",
    },
  ];
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
        <div class="flex-1">
          <div class="font-medium text-gray-900 dark:text-white">
            {item.title}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {item.subtitle}
          </div>
        </div>
        <Accordion.ItemIndicator class="ml-4 transition-all duration-200 group">
          <Plus class="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=open]:hidden" />
          <Minus class="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=closed]:hidden" />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent class="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="pt-3">
          {item.content}
        </div>
      </Accordion.ItemContent>
    </Accordion.Item>
  {/each}
</Accordion.Root>
