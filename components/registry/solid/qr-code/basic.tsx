import { QrCode } from "@ark-ui/solid/qr-code";

export default function Basic() {
  return (
    <QrCode.Root
      value="https://tarkui.com"
      class="flex items-center justify-center"
    >
      <QrCode.Frame class="w-32 h-32 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2">
        <QrCode.Pattern class="fill-gray-900 dark:fill-white" />
      </QrCode.Frame>
    </QrCode.Root>
  );
}
