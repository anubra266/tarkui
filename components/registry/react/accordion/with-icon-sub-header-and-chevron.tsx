import { Accordion } from "@ark-ui/react/accordion";
import { ChevronDownIcon, Link, Bell, Shield, HelpCircle } from "lucide-react";

export default function WithIconSubHeaderAndChevronAccordion() {
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
      className="w-full max-w-md mx-auto bg-linear-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-xs"
    >
      {items.map((item) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
        >
          <Accordion.ItemTrigger className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
            <div className="flex items-center flex-1">
              <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 shrink-0" />
              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white">
                  {item.title}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {item.subtitle}
                </div>
              </div>
            </div>
            <Accordion.ItemIndicator className="ml-4 transition-transform duration-200 data-[state=open]:rotate-180">
              <ChevronDownIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <div className="pt-3 pl-8">{item.content}</div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
