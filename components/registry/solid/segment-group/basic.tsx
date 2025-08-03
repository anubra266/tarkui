import { SegmentGroup } from "@ark-ui/solid";

export default function BasicSegmentGroup() {
  const frameworks = ["React", "Solid", "Svelte", "Vue"];

  return (
    <div className="max-w-sm w-full">
      <SegmentGroup.Root
        orientation="horizontal"
        className="flex gap-0.5 bg-gray-100 dark:bg-gray-900 relative p-1 rounded-lg"
      >
        <SegmentGroup.Indicator className="bg-white dark:bg-gray-800 z-10 rounded-md shadow-sm h-(--height) w-(--width) transition-all duration-200" />
        {frameworks.map((framework) => (
          <SegmentGroup.Item
            key={framework}
            value={framework}
            className="flex flex-1 items-center justify-center select-none cursor-pointer text-sm font-medium px-4 py-2 z-20 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white data-[state=checked]:text-gray-900 dark:data-[state=checked]:text-white data-disabled:cursor-not-allowed data-disabled:opacity-40 transition-colors duration-200"
          >
            <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl />
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
    </div>
  );
}
