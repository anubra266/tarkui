import { Carousel } from "@ark-ui/react/carousel";
import { PlayIcon, PauseIcon } from "lucide-react";

export default function CarouselWithAutoplay() {
  const images = Array.from(
    { length: 5 },
    (_, i) => `https://picsum.photos/seed/${i + 10}/500/300`
  );

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      autoplay={{ delay: 1500 }}
      className="max-w-md mx-auto"
    >
      <Carousel.Control className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Carousel.PrevTrigger className="px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors">
            ←
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger className="px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors">
            →
          </Carousel.NextTrigger>
        </div>

        <Carousel.AutoplayTrigger className="group px-3 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 rounded-lg transition-colors">
          <PlayIcon className="w-4 h-4 group-data-pressed:hidden" />
          <PauseIcon className="w-4 h-4 hidden group-data-pressed:block" />
        </Carousel.AutoplayTrigger>
      </Carousel.Control>

      <Carousel.ItemGroup className="overflow-hidden rounded-lg shadow-lg">
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

      <Carousel.IndicatorGroup className="flex justify-center items-center mt-4 gap-2">
        {images.map((_, index) => (
          <Carousel.Indicator
            key={index}
            index={index}
            className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 transition-colors cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500"
          />
        ))}
      </Carousel.IndicatorGroup>
    </Carousel.Root>
  );
}
