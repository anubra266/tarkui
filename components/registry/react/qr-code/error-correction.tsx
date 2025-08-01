"use client";

import { QrCode } from "@ark-ui/react/qr-code";

export default function ErrorCorrection() {
  const correctionLevels = [
    { level: "L", label: "Low (7%)", description: "Basic error recovery" },
    {
      level: "M",
      label: "Medium (15%)",
      description: "Standard error recovery",
    },
    { level: "Q", label: "Quartile (25%)", description: "Good error recovery" },
    { level: "H", label: "High (30%)", description: "Best error recovery" },
  ] as const;

  return (
    <div className="grid grid-cols-2 gap-6">
      {correctionLevels.map(({ level, label, description }) => (
        <div key={level} className="flex flex-col items-center space-y-3">
          <QrCode.Root
            value="https://tarkui.com/docs/components/qr-code"
            encoding={{ ecc: level }}
          >
            <QrCode.Frame className="w-24 h-24 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2">
              <QrCode.Pattern className="fill-gray-900 dark:fill-white" />
            </QrCode.Frame>
          </QrCode.Root>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {label}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
