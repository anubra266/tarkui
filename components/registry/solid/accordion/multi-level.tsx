import { Accordion } from "@ark-ui/solid/accordion";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-solid";
import { For, Show } from "solid-js";

export default function MultiLevelAccordion() {
  const items = [
    {
      id: "data-visualization",
      title: "Advanced data visualization techniques",
      content:
        "Master the art of presenting complex data through interactive charts, dashboards, and visual storytelling that drives decision-making.",
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
      content:
        "Discover fundamental AI concepts and practical algorithms that power modern applications from recommendation systems to predictive analytics.",
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
      content:
        "Transform cities into livable, eco-friendly spaces through green infrastructure, mixed-use development, and community-centered design principles.",
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
  ];

  return (
    <Accordion
      defaultValue={["urban-planning"]}
      collapsible
      class="w-full max-w-md mx-auto bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
    >
      <For each={items}>
        {(item) => (
          <Accordion.Item
            value={item.id}
            class="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
          >
            <Accordion.ItemTrigger class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
              <span class="font-medium text-gray-900 dark:text-white text-sm">
                {item.title}
              </span>
              <Accordion.ItemIndicator class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180">
                <ChevronDownIcon class="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <div class="px-4 pb-3">
                <div class="pt-1 mb-3">{item.content}</div>

                {/* Nested accordion */}
                <Show when={item.items}>
                  <Accordion
                    collapsible
                    class="border-l-2 border-blue-500/20 ml-2"
                  >
                    <For each={item.items}>
                      {(nestedItem) => (
                        <Accordion.Item
                          value={nestedItem.id}
                          class="group border-b border-gray-200/30 dark:border-gray-700/30 last:border-b-0"
                        >
                          <Accordion.ItemTrigger class="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
                            <span class="font-medium text-gray-800 dark:text-gray-200 text-sm">
                              {nestedItem.title}
                            </span>
                            <Accordion.ItemIndicator class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180">
                              <ChevronRightIcon class="w-3 h-3 text-gray-500 dark:text-gray-500" />
                            </Accordion.ItemIndicator>
                          </Accordion.ItemTrigger>
                          <Accordion.ItemContent class="px-3 pb-2 text-xs text-gray-600 dark:text-gray-400">
                            <div class="pt-1">{nestedItem.content}</div>
                          </Accordion.ItemContent>
                        </Accordion.Item>
                      )}
                    </For>
                  </Accordion>
                </Show>
              </div>
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion>
  );
}
