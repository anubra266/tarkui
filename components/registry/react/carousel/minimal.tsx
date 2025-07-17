import { Carousel } from "@ark-ui/react/carousel";

export default function MinimalCarousel() {
  const images = Array.from(
    { length: 4 },
    (_, i) => `https://picsum.photos/seed/${i + 50}/500/300`
  );

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      className="max-w-md mx-auto"
    >
      <Carousel.ItemGroup className="overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  );
}
