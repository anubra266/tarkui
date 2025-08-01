<script lang="ts">
  import { QrCode } from "@ark-ui/svelte/qr-code";
  import { Download } from "lucide-svelte";
</script>

<div class="flex flex-col items-center space-y-4">
  <QrCode.Root value="https://tarkui.com">
    <QrCode.Frame
      class="w-40 h-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3"
    >
      <QrCode.Pattern class="fill-gray-900 dark:fill-white" />
    </QrCode.Frame>

    <QrCode.DownloadTrigger
      fileName="qr-code.png"
      mimeType="image/png"
      class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
    >
      <Download class="w-4 h-4" />
      Download QR Code
    </QrCode.DownloadTrigger>
  </QrCode.Root>
</div>
