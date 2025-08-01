import { QrCode } from "@ark-ui/solid/qr-code";

export default function WithOverlay() {
  return (
    <QrCode.Root
      value="https://tarkui.com"
      encoding={{ ecc: "H" }}
      class="flex items-center justify-center"
    >
      <QrCode.Frame class="relative w-40 h-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
        <QrCode.Pattern class="fill-gray-900 dark:fill-white" />
      </QrCode.Frame>
      <QrCode.Overlay class="absolute inset-0 flex items-center justify-center">
        <div class="w-8 h-8 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
          <div class="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </QrCode.Overlay>
    </QrCode.Root>
  );
}
