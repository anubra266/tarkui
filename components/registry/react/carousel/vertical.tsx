import { Carousel } from "@ark-ui/react/carousel";

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
      className="max-h-96 w-80 mx-auto"
    >
      <div className="flex gap-4">
        <Carousel.Control className="flex flex-col justify-center gap-2">
          <Carousel.PrevTrigger className="px-2 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors">
            ↑
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger className="px-2 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors">
            ↓
          </Carousel.NextTrigger>
        </Carousel.Control>

        <Carousel.ItemGroup className="overflow-hidden rounded-lg h-80 flex-1">
          {images.map((image, index) => (
            <Carousel.Item key={index} index={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-80 object-cover"
              />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.IndicatorGroup className="flex flex-col justify-center items-center gap-2">
          {images.map((_, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              className="w-2 h-8 rounded-full bg-gray-300 dark:bg-gray-600 data-[current]:bg-blue-500 dark:data-[current]:bg-blue-400 transition-colors cursor-pointer"
            />
          ))}
        </Carousel.IndicatorGroup>
      </div>
    </Carousel.Root>
  );
}
