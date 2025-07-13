<template>
  <Accordion.Root
    :default-value="['Sustainable urban planning methods']"
    collapsible
    class="w-full max-w-md mx-auto bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
  >
    <Accordion.Item
      v-for="(item, index) in items"
      :key="index"
      :value="item.text"
      class="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
    >
      <Accordion.ItemTrigger
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200"
      >
        <div class="flex items-center">
          <component
            :is="item.icon"
            class="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3"
          />
          <span class="font-medium text-gray-900 dark:text-white text-sm">
            {{ item.text }}
          </span>
        </div>
        <Accordion.ItemIndicator
          class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180"
        >
          <ChevronDownIcon class="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent
        class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        <div class="px-4 pb-3">
          <div class="pt-1 mb-3">
            <div v-if="item.text === 'Advanced data visualization techniques'">
              Master the art of presenting complex data through interactive
              charts, dashboards, and visual storytelling that drives
              decision-making.
            </div>
            <div v-else-if="item.text === 'Machine learning for beginners'">
              Discover fundamental AI concepts and practical algorithms that
              power modern applications from recommendation systems to
              predictive analytics.
            </div>
            <div v-else-if="item.text === 'Sustainable urban planning methods'">
              Transform cities into livable, eco-friendly spaces through green
              infrastructure, mixed-use development, and community-centered
              design principles.
            </div>
            <div v-else>
              Understand the psychological principles that influence human
              decision-making, social interactions, and behavioral patterns in
              everyday life.
            </div>
          </div>

          <!-- Nested accordion -->
          <Accordion.Root
            collapsible
            class="border-l-2 border-blue-500/20 ml-2"
          >
            <Accordion.Item
              v-for="(nestedItem, nestedIndex) in nestedItemsByTopic[item.text]"
              :key="nestedIndex"
              :value="nestedItem.text"
              class="group border-b border-gray-200/30 dark:border-gray-700/30 last:border-b-0"
            >
              <Accordion.ItemTrigger
                class="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200"
              >
                <div class="flex items-center">
                  <component
                    :is="nestedItem.icon"
                    class="w-3 h-3 text-blue-500 dark:text-blue-400 mr-2"
                  />
                  <span
                    class="font-medium text-gray-800 dark:text-gray-200 text-sm"
                  >
                    {{ nestedItem.text }}
                  </span>
                </div>
                <Accordion.ItemIndicator
                  class="ml-2 transition-transform duration-200 data-[state=open]:rotate-180"
                >
                  <ChevronDownIcon
                    class="w-3 h-3 text-gray-500 dark:text-gray-500"
                  />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent
                class="px-3 pb-2 text-xs text-gray-600 dark:text-gray-400"
              >
                <div class="pt-1">
                  <div
                    v-if="nestedItem.text === 'Interactive dashboard design'"
                  >
                    Create intuitive interfaces that allow users to explore data
                    dynamically with filters, drill-downs, and real-time
                    updates.
                  </div>
                  <div
                    v-else-if="
                      nestedItem.text === 'Statistical chart selection'
                    "
                  >
                    Choose the right visualization type for your data story,
                    from scatter plots for correlations to heat maps for
                    patterns.
                  </div>
                  <div
                    v-else-if="nestedItem.text === 'Supervised learning basics'"
                  >
                    Learn classification and regression techniques using labeled
                    training data to make predictions on new, unseen examples.
                  </div>
                  <div
                    v-else-if="nestedItem.text === 'Data preprocessing steps'"
                  >
                    Clean, transform, and prepare raw data through
                    normalization, feature engineering, and handling missing
                    values.
                  </div>
                  <div
                    v-else-if="
                      nestedItem.text ===
                      'Green building certification programs'
                    "
                  >
                    LEED and BREEAM standards guide sustainable construction
                    with energy efficiency and environmental responsibility.
                  </div>
                  <div
                    v-else-if="
                      nestedItem.text === 'Community engagement strategies'
                    "
                  >
                    Build consensus through town halls, surveys, and
                    collaborative design workshops that empower residents.
                  </div>
                  <div
                    v-else-if="nestedItem.text === 'Cognitive bias patterns'"
                  >
                    Recognize common mental shortcuts like confirmation bias,
                    anchoring, and availability heuristic that influence
                    judgments.
                  </div>
                  <div v-else>
                    Explore how social proof, authority, and reciprocity shape
                    behavior through psychological principles of persuasion.
                  </div>
                </div>
              </Accordion.ItemContent>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>

<script setup lang="ts">
import { Accordion } from "@ark-ui/vue/accordion";
import {
  ChevronDownIcon,
  Sparkles,
  Settings,
  Zap,
  HelpCircle,
  BarChart3,
  Code,
} from "lucide-vue-next";

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
