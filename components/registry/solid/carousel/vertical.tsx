import { Carousel } from "@ark-ui/solid/carousel";
import { For } from "solid-js";

export default function VerticalCarousel() {
  const images = Array.from(
    { length: 4 },
    (_, i) => `https://picsum.photos/seed/${i + 20}/300/400`
  );

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      orientation="vertical"
      class="max-h-96 w-80 mx-auto"
    >
      <div class="flex gap-4">
        <Carousel.Control class="flex flex-col justify-center gap-2">
          <Carousel.PrevTrigger class="px-2 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors">
            ↑
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger class="px-2 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors">
            ↓
          </Carousel.NextTrigger>
        </Carousel.Control>

        <div class="flex-1">
          <Carousel.ItemGroup class="overflow-hidden rounded-lg h-80">
            <For each={images}>
              {(image, index) => (
                <Carousel.Item index={index()}>
                  <img
                    src={image}
                    alt={`Slide ${index() + 1}`}
                    class="w-full h-80 object-cover"
                  />
                </Carousel.Item>
              )}
            </For>
          </Carousel.ItemGroup>
        </div>

        <Carousel.IndicatorGroup class="flex flex-col justify-center items-center gap-2">
          <For each={images}>
            {(_, index) => (
              <Carousel.Indicator
                index={index()}
                class="w-2 h-8 rounded-full bg-gray-300 dark:bg-gray-600 data-[current]:bg-blue-500 dark:data-[current]:bg-blue-400 transition-colors cursor-pointer"
              />
            )}
          </For>
        </Carousel.IndicatorGroup>
      </div>
    </Carousel.Root>
  );
}
