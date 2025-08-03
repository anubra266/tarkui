import { SignaturePad } from "@ark-ui/solid/signature-pad";

export default function BasicSignaturePad() {
  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div class="max-w-md w-full">
        <SignaturePad.Root>
          <SignaturePad.Label class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            Sign below
          </SignaturePad.Label>
          <SignaturePad.Control class="relative w-full h-32 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
            <SignaturePad.Segment class="w-full h-full stroke-gray-900 dark:stroke-gray-100 fill-gray-900 dark:fill-gray-100" />
            <SignaturePad.ClearTrigger class="absolute top-2 right-2 p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm">
              Clear
            </SignaturePad.ClearTrigger>
            <SignaturePad.Guide class="absolute bottom-4 left-2 right-2 border-b border-dashed border-gray-400 dark:border-gray-500" />
          </SignaturePad.Control>
        </SignaturePad.Root>
      </div>
    </div>
  );
}
