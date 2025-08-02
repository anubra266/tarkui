import { Portal, Index } from "solid-js/web";
import { Select, createListCollection } from "@ark-ui/solid/select";
import { ChevronDownIcon } from "lucide-solid";

interface Skill {
  label: string;
  value: string;
  category: string;
}

export default function MultiSelect() {
  const skills: Skill[] = [
    { label: "React", value: "react", category: "Frontend" },
    { label: "Vue", value: "vue", category: "Frontend" },
    { label: "Angular", value: "angular", category: "Frontend" },
    { label: "Node.js", value: "nodejs", category: "Backend" },
    { label: "Python", value: "python", category: "Backend" },
    { label: "Java", value: "java", category: "Backend" },
    { label: "TypeScript", value: "typescript", category: "Language" },
    { label: "JavaScript", value: "javascript", category: "Language" },
    { label: "SQL", value: "sql", category: "Database" },
    { label: "MongoDB", value: "mongodb", category: "Database" },
  ];

  const collection = createListCollection({
    items: skills,
    groupBy: (item) => item.category,
  });

  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div class="max-w-sm w-full">
        <Select.Root collection={collection} multiple>
          <Select.Label class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            Skills
          </Select.Label>
          <Select.Control>
            <Select.Trigger class="flex min-h-10 w-full items-center justify-between rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100">
              <div class="flex flex-wrap gap-1 flex-1">
                <Select.ValueText placeholder="Select skills" />
              </div>
              <Select.Indicator>
                <ChevronDownIcon class="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </Select.Indicator>
            </Select.Trigger>
            <Select.ClearTrigger class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mt-1">
              Clear all
            </Select.ClearTrigger>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content class="z-50 min-w-[var(--reference-width)] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg max-h-60 overflow-auto">
                <Index each={collection.group()}>
                  {([category, group]) => (
                    <Select.ItemGroup>
                      <Select.ItemGroupLabel class="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {category()}
                      </Select.ItemGroupLabel>
                      <Index each={group()}>
                        {(skill) => (
                          <Select.Item
                            item={skill()}
                            class="relative flex cursor-pointer select-none items-center px-3 py-2 text-sm text-gray-900 dark:text-gray-100 data-[highlighted]:bg-gray-100 dark:data-[highlighted]:bg-gray-700 data-[state=checked]:bg-gray-50 dark:data-[state=checked]:bg-gray-700"
                          >
                            <Select.ItemText>{skill().label}</Select.ItemText>
                            <Select.ItemIndicator class="absolute right-3 text-blue-600 dark:text-blue-400">
                              ✓
                            </Select.ItemIndicator>
                          </Select.Item>
                        )}
                      </Index>
                    </Select.ItemGroup>
                  )}
                </Index>
              </Select.Content>
            </Select.Positioner>
          </Portal>
          <Select.HiddenSelect />
        </Select.Root>
      </div>
    </div>
  );
}
