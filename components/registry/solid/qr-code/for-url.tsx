import { QrCode } from "@ark-ui/solid/qr-code";
import { Globe, ExternalLink } from "lucide-solid";

export default function ForUrl() {
  const url = "https://tarkui.com/";

  return (
    <div class="flex flex-col items-center space-y-6 max-w-sm mx-auto">
      <div class="text-center space-y-2">
        <Globe class="w-8 h-8 text-blue-600 mx-auto" />
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Share Website
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Scan to visit our documentation
        </p>
      </div>

      <QrCode.Root value={url} encoding={{ ecc: "M" }}>
        <QrCode.Frame class="w-48 h-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg">
          <QrCode.Pattern class="fill-gray-900 dark:fill-white" />
        </QrCode.Frame>
      </QrCode.Root>

      <div class="text-center space-y-2">
        <div class="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <ExternalLink class="w-4 h-4" />
          <span class="font-mono break-all">{url}</span>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Point your camera at the QR code to open the link
        </p>
      </div>
    </div>
  );
}
