<script lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel";

  const images = Array.from(
    { length: 4 },
    (_, i) => `https://picsum.photos/seed/${i + 50}/500/300`
  );
</script>

<Carousel.Root
  defaultPage={0}
  slideCount={images.length}
  class="max-w-md mx-auto"
>
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
</Carousel.Root>
