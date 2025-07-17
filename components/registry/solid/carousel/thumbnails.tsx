import { Carousel } from "@ark-ui/solid/carousel";
import { For } from "solid-js";

export default function ThumbnailsCarousel() {
  const images = Array.from({ length: 6 }, (_, i) => ({
    full: `https://picsum.photos/seed/${i + 40}/600/400`,
    thumb: `https://picsum.photos/seed/${i + 40}/120/80`,
  }));

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      class="max-w-2xl mx-auto"
    >
      <Carousel.ItemGroup class="overflow-hidden rounded-lg shadow-lg mb-4">
        <For each={images}>
          {(image, index) => (
            <Carousel.Item index={index()}>
              <img
                src={image.full}
                alt={`Slide ${index() + 1}`}
                class="w-full h-80 object-cover"
              />
            </Carousel.Item>
          )}
        </For>
      </Carousel.ItemGroup>

      <div class="flex items-center gap-4">
        <Carousel.PrevTrigger class="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shrink-0">
          ←
        </Carousel.PrevTrigger>

        <div class="flex gap-2 overflow-x-auto scrollbar-hide flex-1 px-2">
          <For each={images}>
            {(image, index) => (
              <Carousel.Indicator
                index={index()}
                class="shrink-0 border-2 border-transparent data-[current]:border-blue-500 rounded-md overflow-hidden cursor-pointer transition-all hover:border-gray-300"
              >
                <img
                  src={image.thumb}
                  alt={`Thumbnail ${index() + 1}`}
                  class="w-16 h-12 object-cover"
                />
              </Carousel.Indicator>
            )}
          </For>
        </div>

        <Carousel.NextTrigger class="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shrink-0">
          →
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
