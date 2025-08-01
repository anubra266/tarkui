import { RadioGroup } from "@ark-ui/solid/radio-group";

export default function Feedback() {
  const ratings = [
    { value: "very-bad", emoji: "😠", label: "Very Bad" },
    { value: "bad", emoji: "🙁", label: "Bad" },
    { value: "neutral", emoji: "😐", label: "Neutral" },
    { value: "good", emoji: "🙂", label: "Good" },
    { value: "very-good", emoji: "😄", label: "Very Good" },
  ];

  return (
    <div class="space-y-4">
      <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
        How do you feel about this product?
      </h3>

      <RadioGroup.Root class="flex gap-2" defaultValue="">
        {ratings.map((rating) => (
          <RadioGroup.Item
            value={rating.value}
            class="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <RadioGroup.ItemControl class="size-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-md opacity-60 data-[state=checked]:opacity-100 data-[state=checked]:border-blue-500 hover:opacity-80 hover:border-gray-400 dark:border-gray-600 dark:data-[state=checked]:border-blue-500 dark:hover:border-gray-500 transition-all duration-200">
              {rating.emoji}
              <RadioGroup.ItemHiddenInput />
            </RadioGroup.ItemControl>

            <RadioGroup.ItemText class="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 data-[state=checked]:opacity-100 transition-opacity">
              {rating.label}
            </RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
}
