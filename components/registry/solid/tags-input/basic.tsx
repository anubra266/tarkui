import { TagsInput } from "@ark-ui/solid/tags-input";
import { X } from "lucide-solid";

export default function TagsInputBasic() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <TagsInput.Root
        defaultValue={["React", "Vue", "Svelte"]}
        class="w-full max-w-md"
      >
        <TagsInput.Context>
          {(tagsInput) => (
            <>
              <TagsInput.Label class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                Frameworks
              </TagsInput.Label>
              <TagsInput.Control class="flex flex-wrap gap-1 p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-900 dark:border-gray-600 min-h-8">
                <For each={tagsInput().value}>
                  {(value, index) => (
                    <TagsInput.Item
                      index={index()}
                      value={value}
                      class="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs dark:bg-gray-700 dark:text-gray-200"
                    >
                      <TagsInput.ItemPreview class="flex items-center gap-1">
                        <TagsInput.ItemText>{value}</TagsInput.ItemText>
                        <TagsInput.ItemDeleteTrigger class="flex items-center justify-center w-3 h-3 hover:bg-gray-200 rounded transition-colors dark:hover:bg-gray-600">
                          <X class="w-2 h-2" />
                        </TagsInput.ItemDeleteTrigger>
                      </TagsInput.ItemPreview>
                      <TagsInput.ItemInput class="bg-transparent border-none outline-none text-xs" />
                    </TagsInput.Item>
                  )}
                </For>
                <TagsInput.Input
                  placeholder="Add Framework"
                  class="flex-1 min-w-[80px] bg-transparent border-none outline-none text-xs text-gray-900 placeholder-gray-500 dark:text-gray-100 dark:placeholder-gray-400"
                />
              </TagsInput.Control>
              {tagsInput().value.length > 0 && (
                <TagsInput.ClearTrigger class="mt-1 text-xs text-gray-500 hover:text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-gray-200">
                  Clear all
                </TagsInput.ClearTrigger>
              )}
            </>
          )}
        </TagsInput.Context>
        <TagsInput.HiddenInput />
      </TagsInput.Root>
    </div>
  );
}
