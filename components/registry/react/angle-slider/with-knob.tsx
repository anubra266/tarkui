"use client";
import { AngleSlider } from "@ark-ui/react/angle-slider";

const width = 200;
const thickness = 20;

export default function WithKnobAngleSlider() {
  return (
    <AngleSlider.Root
      defaultValue={45}
      className="relative w-[200px] h-[200px] flex items-center justify-center"
    >
      <AngleSlider.Control className="absolute inset-0">
        <svg
          width={width}
          height={width}
          viewBox={`0 0 ${width} ${width}`}
          className="[--gradient-start:#3b82f6] [--gradient-end:#9333ea] dark:[--gradient-start:#60a5fa] dark:[--gradient-end:#a855f7]"
          style={
            {
              "--size": `${width}px`,
              "--thickness": `${thickness}px`,
              "--percent": "calc((var(--value) / 360) * 100)",
            } as React.CSSProperties
          }
        >
          <title>Slider Ring</title>
          {/* Track circle */}
          <circle
            className="stroke-gray-300 dark:stroke-gray-600 fill-transparent"
            style={
              {
                "--radius": "calc(var(--size) / 2 - var(--thickness) / 2)",
                cx: "calc(var(--size) / 2)",
                cy: "calc(var(--size) / 2)",
                r: "var(--radius)",
                strokeWidth: "var(--thickness)",
              } as React.CSSProperties
            }
          />
          {/* Progress circle */}
          <circle
            className="fill-transparent"
            style={
              {
                "--radius": "calc(var(--size) / 2 - var(--thickness) / 2)",
                cx: "calc(var(--size) / 2)",
                cy: "calc(var(--size) / 2)",
                r: "var(--radius)",
                strokeWidth: "var(--thickness)",
                "--circumference": "calc(2 * 3.14159 * var(--radius))",
                "--offset":
                  "calc(var(--circumference) * (100 - var(--percent)) / 100)",
                strokeDashoffset:
                  "calc(var(--circumference) * ((100 - var(--percent)) / 100))",
                strokeDasharray: "var(--circumference)",
                strokeLinecap: "round",
                transformOrigin: "center",
                transform: "rotate(-90deg)",
                stroke: "url(#progressGradient)",
              } as React.CSSProperties
            }
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
              <stop offset="0%" stopColor="var(--gradient-start)" />
              <stop offset="100%" stopColor="var(--gradient-end)" />
            </linearGradient>
          </defs>
        </svg>
        <AngleSlider.Thumb className="absolute top-0 right-0 bottom-0 left-[calc(50%-1.5px)] pointer-events-none h-full w-[3px] flex items-start outline-none">
          <span className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 w-5 h-5 rounded-full flex-shrink-0 scale-125 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25 border-2 border-white dark:border-gray-800" />
        </AngleSlider.Thumb>
      </AngleSlider.Control>
      <div className="flex items-center flex-col gap-0">
        <AngleSlider.ValueText className="text-4xl text-gray-900 dark:text-gray-100 font-semibold">
          <AngleSlider.Context>
            {(context) => <>{context.value}°</>}
          </AngleSlider.Context>
        </AngleSlider.ValueText>
        <AngleSlider.Label className="text-sm text-gray-600 dark:text-gray-400">
          degrees
        </AngleSlider.Label>
      </div>
      <AngleSlider.HiddenInput />
    </AngleSlider.Root>
  );
}
