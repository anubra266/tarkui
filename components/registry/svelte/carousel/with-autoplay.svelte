<script lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel";
  import { Play, Pause } from "lucide-svelte";

  const images = Array.from(
    { length: 5 },
    (_, i) => `https://picsum.photos/seed/${i + 10}/500/300`
  );
</script>

<Carousel.Root
  defaultPage={0}
  slideCount={images.length}
  autoplay
  class="max-w-md mx-auto"
>
  <Carousel.Control class="flex items-center justify-between mb-4">
    <div class="flex items-center gap-2">
      <Carousel.PrevTrigger
        class="px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
      >
        ←
      </Carousel.PrevTrigger>
      <Carousel.NextTrigger
        class="px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
      >
        →
      </Carousel.NextTrigger>
    </div>

    <Carousel.AutoplayTrigger
      class="group px-3 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 rounded-lg transition-colors"
    >
      <Play class="w-4 h-4 group-data-[pressed]:hidden" />
      <Pause class="w-4 h-4 hidden group-data-[pressed]:block" />
    </Carousel.AutoplayTrigger>
  </Carousel.Control>

  <Carousel.ItemGroup class="overflow-hidden rounded-lg shadow-lg">
    {#each images as image, index}
      <Carousel.Item {index}>
        <img
          src={image}
          alt="Slide {index + 1}"
          class="w-full h-64 object-cover"
        />
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>

  <Carousel.IndicatorGroup class="flex justify-center items-center mt-4 gap-2">
    {#each images as _, index}
      <Carousel.Indicator
        {index}
        class="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 data-[current]:bg-blue-500 dark:data-[current]:bg-blue-400 transition-colors cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500"
      />
    {/each}
  </Carousel.IndicatorGroup>
</Carousel.Root>
