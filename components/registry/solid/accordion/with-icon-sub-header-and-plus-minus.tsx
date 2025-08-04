import { Accordion } from "@ark-ui/solid/accordion";
import { Plus, Minus, Link, Bell, Shield, HelpCircle } from "lucide-solid";
import { For } from "solid-js";
import { Dynamic } from "solid-js/web";

export default function WithIconSubHeaderAndPlusMinusAccordion() {
  const items = [
    {
      id: "creative-writing",
      title: "Creative Writing",
      subtitle: "Develop your storytelling and narrative skills",
      content:
        "Transform your thoughts into compelling stories through character development, plot structure, and vivid descriptions that captivate readers and express your unique voice.",
      icon: Link,
    },
    {
      id: "digital-photography",
      title: "Digital Photography",
      subtitle: "Master composition, lighting, and editing techniques",
      content:
        "Capture stunning images by understanding the rule of thirds, golden hour lighting, and advanced editing techniques that bring your artistic vision to life.",
      icon: Bell,
    },
    {
      id: "mindful-living",
      title: "Mindful Living",
      subtitle: "Cultivate presence and inner peace daily",
      content:
        "Embrace the present moment through meditation practices, gratitude exercises, and mindful breathing that reduce stress and enhance your overall well-being.",
      icon: Shield,
    },
    {
      id: "sustainable-gardening",
      title: "Sustainable Gardening",
      subtitle: "Grow your own organic food and flowers",
      content:
        "Create a thriving ecosystem in your backyard using natural fertilizers, companion planting, and water-efficient methods that support both plants and wildlife.",
      icon: HelpCircle,
    },
  ];

  return (
    <Accordion.Root
      defaultValue={["mindful-living"]}
      collapsible
      class="w-full max-w-md mx-auto bg-linear-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-xs"
    >
      <For each={items}>
        {(item) => (
          <Accordion.Item
            value={item.id}
            class="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
          >
            <Accordion.ItemTrigger class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
              <div class="flex items-center flex-1">
                <Dynamic
                  component={item.icon}
                  class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 shrink-0"
                />
                <div class="flex-1">
                  <div class="font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {item.subtitle}
                  </div>
                </div>
              </div>
              <Accordion.ItemIndicator class="ml-4 transition-all duration-200 group">
                <Plus class="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=open]:hidden" />
                <Minus class="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=closed]:hidden" />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent class="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <div class="pt-3 pl-8">{item.content}</div>
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  );
}
