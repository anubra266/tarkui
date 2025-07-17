<script lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel";

  const images = Array.from(
    { length: 4 },
    (_, i) => `https://picsum.photos/seed/${i + 20}/300/400`
  );
</script>

<Carousel.Root
  defaultPage={0}
  slideCount={images.length}
  orientation="vertical"
  class="max-h-96 w-80 mx-auto"
>
  <div class="flex gap-4">
    <Carousel.Control class="flex flex-col justify-center gap-2">
      <Carousel.PrevTrigger
        class="px-2 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
      >
        ↑
      </Carousel.PrevTrigger>
      <Carousel.NextTrigger
        class="px-2 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
      >
        ↓
      </Carousel.NextTrigger>
    </Carousel.Control>

    <div class="flex-1">
      <Carousel.ItemGroup class="overflow-hidden rounded-lg h-80">
        {#each images as image, index}
          <Carousel.Item {index}>
            <img
              src={image}
              alt="Slide {index + 1}"
              class="w-full h-80 object-cover"
            />
          </Carousel.Item>
        {/each}
      </Carousel.ItemGroup>
    </div>

    <Carousel.IndicatorGroup
      class="flex flex-col justify-center items-center gap-2"
    >
      {#each images as _, index}
        <Carousel.Indicator
          {index}
          class="w-2 h-8 rounded-full bg-gray-300 dark:bg-gray-600 data-[current]:bg-blue-500 dark:data-[current]:bg-blue-400 transition-colors cursor-pointer"
        />
      {/each}
    </Carousel.IndicatorGroup>
  </div>
</Carousel.Root>
