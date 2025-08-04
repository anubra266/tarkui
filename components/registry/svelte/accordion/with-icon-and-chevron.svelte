<script>
  import { Accordion } from "@ark-ui/svelte/accordion";
  import {
    ChevronDown,
    Sparkles,
    Settings,
    Clock,
    HelpCircle,
  } from "lucide-svelte";

  const items = [
    {
      id: "creative-talents",
      title: "Discover hidden creative talents",
      content:
        "Unlock your inner artist by exploring new mediums, experimenting with bold techniques, and embracing the creative process without fear of judgment.",
      icon: Sparkles,
    },
    {
      id: "customize-workspace",
      title: "Customize your workspace perfectly",
      content:
        "Transform your environment into a productivity powerhouse with smart organization, ergonomic setups, and personalized touches that inspire daily success.",
      icon: Settings,
    },
    {
      id: "time-management",
      title: "Master efficient time management",
      content:
        "Develop powerful habits that maximize your daily potential through strategic planning, priority setting, and mindful focus techniques.",
      icon: Clock,
    },
    {
      id: "effective-communication",
      title: "Learn the art of effective communication",
      content:
        "Build meaningful connections through active listening, empathy, and clear expression that resonates with others on a deeper level.",
      icon: HelpCircle,
    },
  ];
</script>

<Accordion.Root
  defaultValue={["creative-talents"]}
  collapsible
  class="w-full max-w-md mx-auto bg-linear-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-xs"
>
  {#each items as item (item.id)}
    <Accordion.Item
      value={item.id}
      class="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
    >
      <Accordion.ItemTrigger
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200"
      >
        <div class="flex items-center">
          <svelte:component
            this={item.icon}
            class="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3"
          />
          <span class="font-medium text-gray-900 dark:text-white">
            {item.title}
          </span>
        </div>
        <Accordion.ItemIndicator
          class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180"
        >
          <ChevronDown class="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent
        class="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        <div class="pt-3 pl-7">{item.content}</div>
      </Accordion.ItemContent>
    </Accordion.Item>
  {/each}
</Accordion.Root>
