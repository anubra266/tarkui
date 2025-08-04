"use client";

import { TagsInput } from "@ark-ui/react/tags-input";
import { X } from "lucide-react";

export default function TagsInputBasic() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex flex-col items-center">
      <TagsInput.Root
        defaultValue={["React", "Vue", "Svelte"]}
        className="w-full max-w-md"
      >
        <TagsInput.Context>
          {(tagsInput) => (
            <>
              <TagsInput.Label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                Frameworks
              </TagsInput.Label>
              <TagsInput.Control className="flex flex-wrap gap-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 min-h-[2rem] focus-within:outline-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400">
                {tagsInput.value.map((value, index) => (
                  <TagsInput.Item
                    key={index}
                    index={index}
                    value={value}
                    className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs dark:bg-gray-700 dark:text-gray-200"
                  >
                    <TagsInput.ItemPreview className="flex items-center gap-1">
                      <TagsInput.ItemText>{value}</TagsInput.ItemText>
                      <TagsInput.ItemDeleteTrigger className="flex items-center justify-center w-3 h-3 hover:bg-gray-200 rounded transition-colors dark:hover:bg-gray-600">
                        <X className="w-2 h-2" />
                      </TagsInput.ItemDeleteTrigger>
                    </TagsInput.ItemPreview>
                    <TagsInput.ItemInput className="bg-transparent border-none outline-none text-xs" />
                  </TagsInput.Item>
                ))}
                <TagsInput.Input
                  placeholder="Add Framework"
                  className="flex-1 min-w-[80px] bg-transparent border-none outline-none text-xs text-gray-900 placeholder-gray-500 dark:text-gray-100 dark:placeholder-gray-400"
                />
              </TagsInput.Control>
              {tagsInput.value.length > 0 && (
                <TagsInput.ClearTrigger className="mt-1 text-xs text-gray-500 hover:text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-gray-200">
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
