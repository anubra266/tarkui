import { Portal } from "solid-js/web";
import { Select, createListCollection } from "@ark-ui/solid/select";
import { Fieldset } from "@ark-ui/solid/fieldset";
import { ChevronDownIcon } from "lucide-solid";

export default function SelectWithOverlappingLabel() {
  const collection = createListCollection({
    items: ["React", "Solid", "Vue", "Svelte"],
  });

  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div class="relative max-w-sm w-full group">
        <Select.Root collection={collection}>
          <Select.Control>
            <Select.Trigger class="flex h-10 w-full items-center justify-between rounded-lg bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 outline-none peer">
              <Select.ValueText placeholder="Select a Framework" />
              <Select.Indicator>
                <ChevronDownIcon class="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </Select.Indicator>
            </Select.Trigger>
          </Select.Control>

          <div class="absolute left-[9px] top-px text-sm text-gray-500 dark:text-gray-400 group-focus-within:text-gray-900 dark:group-focus-within:text-gray-100 transition-all duration-300 px-1 transform -translate-y-1/2 pointer-events-none">
            Select with overlapping label
          </div>

          <Fieldset.Root class="inset-0 absolute border border-gray-300 dark:border-gray-600 rounded-lg pointer-events-none mt-[-9px] visible group-focus-within:border-gray-700 dark:group-focus-within:border-gray-100 group-focus-within:border-2">
            <Fieldset.Legend class="ml-2 text-sm invisible px-1 max-w-full whitespace-nowrap">
              Select with overlapping label
            </Fieldset.Legend>
          </Fieldset.Root>

          <Portal>
            <Select.Positioner>
              <Select.Content class="z-50 min-w-[var(--reference-width)] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
                <Select.ItemGroup>
                  <Select.ItemGroupLabel class="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Frameworks
                  </Select.ItemGroupLabel>
                  {collection.items.map((item) => (
                    <Select.Item
                      item={item}
                      class="relative flex cursor-pointer select-none items-center px-3 py-2 text-sm text-gray-900 dark:text-gray-100 data-[highlighted]:bg-gray-100 dark:data-[highlighted]:bg-gray-700 data-[state=checked]:bg-gray-50 dark:data-[state=checked]:bg-gray-700"
                    >
                      <Select.ItemText>{item}</Select.ItemText>
                      <Select.ItemIndicator class="absolute right-3 text-blue-600 dark:text-blue-400">
                        ✓
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.ItemGroup>
              </Select.Content>
            </Select.Positioner>
          </Portal>
          <Select.HiddenSelect />
        </Select.Root>
      </div>
    </div>
  );
}
