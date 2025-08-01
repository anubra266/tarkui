import { QrCode } from "@ark-ui/solid/qr-code";
import { User, Phone, Mail } from "lucide-solid";

export default function ForContact() {
  // vCard format for contact information
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:John Doe
ORG:TarkUI
TITLE:Frontend Developer
TEL:+1-555-123-4567
EMAIL:john.doe@tarkui.com
URL:https://tarkui.com
END:VCARD`;

  return (
    <div class="flex flex-col items-center space-y-6 max-w-sm mx-auto">
      <div class="text-center space-y-2">
        <User class="w-8 h-8 text-green-600 mx-auto" />
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Contact Card
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Scan to save contact information
        </p>
      </div>

      <QrCode.Root value={vCardData} encoding={{ ecc: "M" }}>
        <QrCode.Frame class="w-48 h-48 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 border border-green-200 dark:border-green-700 rounded-xl p-4 shadow-lg">
          <QrCode.Pattern class="fill-green-700 dark:fill-green-300" />
        </QrCode.Frame>
      </QrCode.Root>

      <div class="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-2">
        <div class="flex items-center gap-3">
          <User class="w-4 h-4 text-gray-400" />
          <span class="text-sm text-gray-900 dark:text-gray-100">John Doe</span>
        </div>
        <div class="flex items-center gap-3">
          <Phone class="w-4 h-4 text-gray-400" />
          <span class="text-sm text-gray-600 dark:text-gray-400">
            +1-555-123-4567
          </span>
        </div>
        <div class="flex items-center gap-3">
          <Mail class="w-4 h-4 text-gray-400" />
          <span class="text-sm text-gray-600 dark:text-gray-400">
            john.doe@tarkui.com
          </span>
        </div>
      </div>
    </div>
  );
}
