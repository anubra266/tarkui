import { Carousel } from "@ark-ui/react/carousel";
import { StarIcon, QuoteIcon } from "lucide-react";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content:
        "This product has completely transformed how we work. The results have been incredible.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?seed=sarah",
    },
    {
      name: "Michael Chen",
      role: "Designer, Creative Studio",
      content:
        "Outstanding quality and attention to detail. Highly recommend to anyone looking for excellence.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?seed=michael",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content:
        "The team was professional and delivered exactly what we needed. Exceeded our expectations.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?seed=emily",
    },
  ];

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={testimonials.length}
      className="max-w-2xl mx-auto"
    >
      <Carousel.ItemGroup className="min-h-64">
        {testimonials.map((testimonial, index) => (
          <Carousel.Item
            key={index}
            index={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-base border border-gray-200 dark:border-gray-700 text-center"
          >
            <QuoteIcon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
              "{testimonial.content}"
            </p>
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <div className="flex items-center justify-center gap-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="flex items-center justify-between mt-6">
        <Carousel.PrevTrigger className="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full transition-colors">
          ←
        </Carousel.PrevTrigger>

        <Carousel.IndicatorGroup className="flex gap-2">
          {testimonials.map((_, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 data-current:bg-blue-500 dark:data-current:bg-blue-400 transition-colors cursor-pointer"
            />
          ))}
        </Carousel.IndicatorGroup>

        <Carousel.NextTrigger className="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full transition-colors">
          →
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
