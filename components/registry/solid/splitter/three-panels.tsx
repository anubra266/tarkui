import { Splitter } from "@ark-ui/solid/splitter";

export default function ThreePanelSplitter() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div class="w-full h-64">
        <Splitter.Root
          panels={[
            { id: "a", minSize: 20 },
            { id: "b", minSize: 40 },
            { id: "c", minSize: 20 },
          ]}
          defaultSize={[20, 60, 20]}
          class="flex gap-2 h-full"
        >
          <Splitter.Panel
            id="a"
            class="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center text-sm"
          >
            Sidebar
          </Splitter.Panel>
          <Splitter.ResizeTrigger
            id="a:b"
            aria-label="Resize"
            class="rounded-full transition-colors duration-200 outline-none bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 active:bg-gray-400 dark:active:bg-gray-500 min-w-1.5 my-4"
          />
          <Splitter.Panel
            id="b"
            class="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center"
          >
            Main Content
          </Splitter.Panel>
          <Splitter.ResizeTrigger
            id="b:c"
            aria-label="Resize"
            class="rounded-full transition-colors duration-200 outline-none bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 active:bg-gray-400 dark:active:bg-gray-500 min-w-1.5 my-4"
          />
          <Splitter.Panel
            id="c"
            class="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center text-sm"
          >
            Details
          </Splitter.Panel>
        </Splitter.Root>
      </div>
    </div>
  );
}
