import { AngleSlider } from "@ark-ui/solid/angle-slider";

const width = 200;
const thickness = 20;

export default function WithKnobAngleSlider() {
  return (
    <AngleSlider.Root
      defaultValue={45}
      class="relative w-[200px] h-[200px] flex items-center justify-center"
    >
      <AngleSlider.Control class="absolute inset-0">
        <svg
          width={width}
          height={width}
          viewBox={`0 0 ${width} ${width}`}
          class="[--gradient-start:#3b82f6] [--gradient-end:#9333ea] dark:[--gradient-start:#60a5fa] dark:[--gradient-end:#a855f7]"
          style={{
            "--size": `${width}px`,
            "--thickness": `${thickness}px`,
            "--percent": "calc((var(--value) / 360) * 100)",
          }}
        >
          <title>Slider Ring</title>
          {/* Track circle */}
          <circle
            class="stroke-gray-300 dark:stroke-gray-600 fill-transparent"
            style={{
              "--radius": "calc(var(--size) / 2 - var(--thickness) / 2)",
              cx: "calc(var(--size) / 2)",
              cy: "calc(var(--size) / 2)",
              r: "var(--radius)",
              "stroke-width": "var(--thickness)",
            }}
          />
          {/* Progress circle */}
          <circle
            class="fill-transparent"
            style={{
              "--radius": "calc(var(--size) / 2 - var(--thickness) / 2)",
              cx: "calc(var(--size) / 2)",
              cy: "calc(var(--size) / 2)",
              r: "var(--radius)",
              "stroke-width": "var(--thickness)",
              "--circumference": "calc(2 * 3.14159 * var(--radius))",
              "--offset":
                "calc(var(--circumference) * (100 - var(--percent)) / 100)",
              "stroke-dashoffset":
                "calc(var(--circumference) * ((100 - var(--percent)) / 100))",
              "stroke-dasharray": "var(--circumference)",
              "stroke-linecap": "round",
              "transform-origin": "center",
              transform: "rotate(-90deg)",
              stroke: "url(#progressGradient)",
            }}
          />
          {/* Gradient definitions */}
          <defs>
            <linearGradient
              id="progressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stop-color="var(--gradient-start)" />
              <stop offset="100%" stop-color="var(--gradient-end)" />
            </linearGradient>
          </defs>
        </svg>
        <AngleSlider.Thumb class="absolute top-0 right-0 bottom-0 left-[calc(50%-1.5px)] pointer-events-none h-full w-[3px] flex items-start outline-hidden">
          <span class="bg-linear-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 w-5 h-5 rounded-full shrink-0 scale-125 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25 border-2 border-white dark:border-gray-800" />
        </AngleSlider.Thumb>
      </AngleSlider.Control>
      <div class="flex items-center flex-col gap-0">
        <AngleSlider.ValueText class="text-4xl text-gray-900 dark:text-gray-100 font-semibold">
          <AngleSlider.Context>
            {(context) => <>{context().value}°</>}
          </AngleSlider.Context>
        </AngleSlider.ValueText>
        <AngleSlider.Label class="text-sm text-gray-600 dark:text-gray-400">
          degrees
        </AngleSlider.Label>
      </div>
      <AngleSlider.HiddenInput />
    </AngleSlider.Root>
  );
}
