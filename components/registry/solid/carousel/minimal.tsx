import { Carousel } from "@ark-ui/solid/carousel";
import { For } from "solid-js";

export default function MinimalCarousel() {
  const images = Array.from(
    { length: 4 },
    (_, i) => `https://picsum.photos/seed/${i + 50}/500/300`
  );

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      class="max-w-md mx-auto"
    >
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
    </Carousel.Root>
  );
}
