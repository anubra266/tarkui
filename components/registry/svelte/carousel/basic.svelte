<script lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel";

  const images = Array.from(
    { length: 5 },
    (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`
  );
</script>

<Carousel.Root
  defaultPage={0}
  slideCount={images.length}
  class="max-w-md mx-auto"
>
  <Carousel.Control class="flex items-center justify-between mb-4">
    <Carousel.PrevTrigger
      class="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
    >
      Previous
    </Carousel.PrevTrigger>
    <Carousel.NextTrigger
      class="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
    >
      Next
    </Carousel.NextTrigger>
  </Carousel.Control>

  <Carousel.ItemGroup class="overflow-hidden rounded-lg">
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
        class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 transition-colors cursor-pointer"
      />
    {/each}
  </Carousel.IndicatorGroup>
</Carousel.Root>
