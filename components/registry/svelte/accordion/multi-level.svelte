<script>
  import { Accordion } from "@ark-ui/svelte/accordion";
  import { ChevronDownIcon } from "lucide-svelte";

  const items = [
    {
      id: "data-visualization",
      title: "Advanced data visualization techniques",
      items: [
        {
          id: "dashboard-design",
          title: "Interactive dashboard design",
          content:
            "Create intuitive interfaces that allow users to explore data dynamically with filters, drill-downs, and real-time updates.",
        },
        {
          id: "chart-selection",
          title: "Statistical chart selection",
          content:
            "Choose the right visualization type for your data story, from scatter plots for correlations to heat maps for patterns.",
        },
      ],
    },
    {
      id: "machine-learning",
      title: "Machine learning for beginners",
      items: [
        {
          id: "supervised-learning",
          title: "Supervised learning basics",
          content:
            "Learn classification and regression techniques using labeled training data to make predictions on new, unseen examples.",
        },
        {
          id: "data-preprocessing",
          title: "Data preprocessing steps",
          content:
            "Clean, transform, and prepare raw data through normalization, feature engineering, and handling missing values.",
        },
      ],
    },
    {
      id: "urban-planning",
      title: "Sustainable urban planning methods",
      items: [
        {
          id: "green-building",
          title: "Green building certification programs",
          content:
            "LEED and BREEAM standards guide sustainable construction with energy efficiency and environmental responsibility.",
        },
        {
          id: "community-engagement",
          title: "Community engagement strategies",
          content:
            "Build consensus through town halls, surveys, and collaborative design workshops that empower residents.",
        },
      ],
    },
    {
      id: "human-behavior",
      title: "Psychology of human behavior",
      items: [
        {
          id: "cognitive-bias",
          title: "Cognitive bias patterns",
          content:
            "Recognize common mental shortcuts like confirmation bias, anchoring, and availability heuristic that influence judgments.",
        },
        {
          id: "social-influence",
          title: "Social influence mechanisms",
          content:
            "Explore how social proof, authority, and reciprocity shape behavior through psychological principles of persuasion.",
        },
      ],
    },
  ];
</script>

<Accordion.Root
  defaultValue={["human-behavior"]}
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
        <span class="font-medium text-gray-900 dark:text-white">
          {item.title}
        </span>
        <Accordion.ItemIndicator
          class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180"
        >
          <ChevronDownIcon class="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent
        class="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        <div class="pt-3">
          <Accordion.Root collapsible class="space-y-2">
            {#each item.items as subItem (subItem.id)}
              <Accordion.Item
                value={subItem.id}
                class="group border border-gray-200/50 dark:border-gray-700/50 rounded-lg bg-linear-to-r from-gray-50/50 dark:from-gray-800/50 to-transparent"
              >
                <Accordion.ItemTrigger
                  class="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200"
                >
                  <span
                    class="font-medium text-gray-800 dark:text-gray-200 text-sm"
                  >
                    {subItem.title}
                  </span>
                  <Accordion.ItemIndicator
                    class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180"
                  >
                    <ChevronDownIcon
                      class="w-3 h-3 text-gray-500 dark:text-gray-500"
                    />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent
                  class="px-3 pb-2 text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  <div class="pt-2">{subItem.content}</div>
                </Accordion.ItemContent>
              </Accordion.Item>
            {/each}
          </Accordion.Root>
        </div>
      </Accordion.ItemContent>
    </Accordion.Item>
  {/each}
</Accordion.Root>
