import { Carousel } from "@ark-ui/react/carousel";

export default function CardsCarousel() {
  const cards = [
    {
      id: 1,
      title: "Mountain Adventure",
      description: "Explore breathtaking mountain landscapes",
      image: "https://picsum.photos/seed/30/400/250",
    },
    {
      id: 2,
      title: "Ocean Views",
      description: "Discover pristine coastal destinations",
      image: "https://picsum.photos/seed/31/400/250",
    },
    {
      id: 3,
      title: "Forest Escape",
      description: "Immerse yourself in nature's tranquility",
      image: "https://picsum.photos/seed/32/400/250",
    },
    {
      id: 4,
      title: "Urban Explorer",
      description: "Experience vibrant city culture",
      image: "https://picsum.photos/seed/33/400/250",
    },
  ];

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={cards.length}
      className="max-w-lg mx-auto"
    >
      <Carousel.Control className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Featured Destinations
        </h2>
        <div className="flex gap-2">
          <Carousel.PrevTrigger className="p-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full shadow-md border transition-colors">
            ←
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger className="p-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full shadow-md border transition-colors">
            →
          </Carousel.NextTrigger>
        </div>
      </Carousel.Control>

      <Carousel.ItemGroup className="overflow-hidden">
        {cards.map((card, index) => (
          <Carousel.Item key={index} index={index}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.IndicatorGroup className="flex justify-center items-center mt-6 gap-2">
        {cards.map((_, index) => (
          <Carousel.Indicator
            key={index}
            index={index}
            className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 dark:data-current:bg-blue-400 data-current:w-6 transition-all cursor-pointer"
          />
        ))}
      </Carousel.IndicatorGroup>
    </Carousel.Root>
  );
}
