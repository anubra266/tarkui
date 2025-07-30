import { Accordion } from "@ark-ui/react/accordion";
import {
  Plus,
  Minus,
  Sparkles,
  Settings,
  Clock,
  HelpCircle,
} from "lucide-react";

export default function WithIconAndPlusMinusAccordion() {
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

  return (
    <Accordion.Root
      defaultValue={["creative-talents"]}
      collapsible
      className="w-full max-w-md mx-auto bg-linear-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-xs"
    >
      {items.map((item) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
        >
          <Accordion.ItemTrigger className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
            <div className="flex items-center">
              <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="font-medium text-gray-900 dark:text-white">
                {item.title}
              </span>
            </div>
            <Accordion.ItemIndicator className="ml-2 transition-all duration-200 group">
              <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=open]:hidden" />
              <Minus className="w-4 h-4 text-gray-600 dark:text-gray-400 group-data-[state=closed]:hidden" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <div className="pt-3 pl-7">{item.content}</div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
