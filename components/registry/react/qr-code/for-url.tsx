"use client";

import { QrCode } from "@ark-ui/react/qr-code";
import { Globe, ExternalLink } from "lucide-react";

export default function ForUrl() {
  const url = "https://tarkui.com/";

  return (
    <div className="flex flex-col items-center space-y-6 max-w-sm mx-auto">
      <div className="text-center space-y-2">
        <Globe className="w-8 h-8 text-blue-600 mx-auto" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Share Website
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Scan to visit our documentation
        </p>
      </div>

      <QrCode.Root value={url} encoding={{ ecc: "M" }}>
        <QrCode.Frame className="w-48 h-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg">
          <QrCode.Pattern className="fill-gray-900 dark:fill-white" />
        </QrCode.Frame>
      </QrCode.Root>

      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <ExternalLink className="w-4 h-4" />
          <span className="font-mono break-all">{url}</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Point your camera at the QR code to open the link
        </p>
      </div>
    </div>
  );
}
