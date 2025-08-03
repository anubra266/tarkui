<script>
  import { Portal } from "@ark-ui/svelte/portal";
  import { Select, createListCollection } from "@ark-ui/svelte/select";
  import { ChevronDownIcon } from "lucide-svelte";

  const skills = [
    { label: "JavaScript", value: "javascript", group: "frontend" },
    { label: "TypeScript", value: "typescript", group: "frontend" },
    { label: "React", value: "react", group: "frontend" },
    { label: "Vue", value: "vue", group: "frontend" },
    { label: "Node.js", value: "nodejs", group: "backend" },
    { label: "Python", value: "python", group: "backend" },
    { label: "Java", value: "java", group: "backend" },
    { label: "PostgreSQL", value: "postgresql", group: "database" },
    { label: "MongoDB", value: "mongodb", group: "database" },
    { label: "Redis", value: "redis", group: "database" },
  ];

  const collection = createListCollection({ items: skills });
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
>
  <div class="max-w-sm w-full">
    <Select.Root {collection} multiple>
      <Select.Label
        class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2"
      >
        Skills
      </Select.Label>
      <Select.Control>
        <Select.Trigger
          class="flex h-10 w-full items-center justify-between rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
        >
          <Select.ValueText placeholder="Select skills" />
          <Select.Indicator>
            <ChevronDownIcon class="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger
          class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mt-1"
        >
          Clear
        </Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content
            class="z-50 min-w-(--reference-width) rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg max-h-60 overflow-auto"
          >
            <Select.ItemGroup>
              <Select.ItemGroupLabel
                class="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide"
              >
                Frontend
              </Select.ItemGroupLabel>
              {#each skills.filter((s) => s.group === "frontend") as skill}
                <Select.Item
                  item={skill}
                  class="relative flex cursor-pointer select-none items-center px-3 py-2 text-sm text-gray-900 dark:text-gray-100 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-700 data-[state=checked]:bg-gray-50 dark:data-[state=checked]:bg-gray-700"
                >
                  <Select.ItemText>{skill.label}</Select.ItemText>
                  <Select.ItemIndicator
                    class="absolute right-3 text-blue-600 dark:text-blue-400"
                  >
                    ✓
                  </Select.ItemIndicator>
                </Select.Item>
              {/each}
            </Select.ItemGroup>
            <Select.ItemGroup>
              <Select.ItemGroupLabel
                class="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide"
              >
                Backend
              </Select.ItemGroupLabel>
              {#each skills.filter((s) => s.group === "backend") as skill}
                <Select.Item
                  item={skill}
                  class="relative flex cursor-pointer select-none items-center px-3 py-2 text-sm text-gray-900 dark:text-gray-100 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-700 data-[state=checked]:bg-gray-50 dark:data-[state=checked]:bg-gray-700"
                >
                  <Select.ItemText>{skill.label}</Select.ItemText>
                  <Select.ItemIndicator
                    class="absolute right-3 text-blue-600 dark:text-blue-400"
                  >
                    ✓
                  </Select.ItemIndicator>
                </Select.Item>
              {/each}
            </Select.ItemGroup>
            <Select.ItemGroup>
              <Select.ItemGroupLabel
                class="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide"
              >
                Database
              </Select.ItemGroupLabel>
              {#each skills.filter((s) => s.group === "database") as skill}
                <Select.Item
                  item={skill}
                  class="relative flex cursor-pointer select-none items-center px-3 py-2 text-sm text-gray-900 dark:text-gray-100 data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-700 data-[state=checked]:bg-gray-50 dark:data-[state=checked]:bg-gray-700"
                >
                  <Select.ItemText>{skill.label}</Select.ItemText>
                  <Select.ItemIndicator
                    class="absolute right-3 text-blue-600 dark:text-blue-400"
                  >
                    ✓
                  </Select.ItemIndicator>
                </Select.Item>
              {/each}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  </div>
</div>
