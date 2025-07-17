import { Carousel } from "@ark-ui/solid/carousel";
import { For } from "solid-js";

export default function BasicCarousel() {
  const images = Array.from(
    { length: 5 },
    (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`
  );

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      class="max-w-md mx-auto"
    >
      <Carousel.Control class="flex items-center justify-between mb-4">
        <Carousel.PrevTrigger class="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">
          Previous
        </Carousel.PrevTrigger>
        <Carousel.NextTrigger class="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">
          Next
        </Carousel.NextTrigger>
      </Carousel.Control>

      <Carousel.ItemGroup class="overflow-hidden rounded-lg">
        <For each={images}>
          {(image, index) => (
            <Carousel.Item index={index()}>
              <img
                src={image}
                alt={`Slide ${index() + 1}`}
                class="w-full h-64 object-cover"
              />
            </Carousel.Item>
          )}
        </For>
      </Carousel.ItemGroup>

      <Carousel.IndicatorGroup class="flex justify-center items-center mt-4 gap-2">
        <For each={images}>
          {(_, index) => (
            <Carousel.Indicator
              index={index()}
              class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-[current]:bg-blue-500 transition-colors cursor-pointer"
            />
          )}
        </For>
      </Carousel.IndicatorGroup>
    </Carousel.Root>
  );
}
