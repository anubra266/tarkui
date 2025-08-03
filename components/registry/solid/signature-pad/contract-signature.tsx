import { SignaturePad } from "@ark-ui/solid/signature-pad";
import { createSignal } from "solid-js";
import { FileText, CheckCircle, AlertCircle } from "lucide-solid";

export default function ContractSignature() {
  const [hasSignature, setHasSignature] = createSignal(false);
  const [isSubmitted, setIsSubmitted] = createSignal(false);

  const handleDrawEnd = (details: any) => {
    setHasSignature(true);
  };

  const handleSubmit = () => {
    if (hasSignature()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div class="max-w-md w-full space-y-4">
        <div class="text-center space-y-2">
          <div class="flex justify-center">
            <FileText class="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Contract Agreement
          </h2>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Please review and sign the agreement below
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 space-y-2">
          <h3 class="font-medium text-gray-900 dark:text-gray-100 text-sm">
            Terms and Conditions
          </h3>
          <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            By signing this document, you agree to the terms and conditions
            outlined in our service agreement. This signature constitutes your
            acceptance of all terms and represents your legal consent.
          </p>
        </div>

        <div class="space-y-2">
          <SignaturePad.Root onDrawEnd={handleDrawEnd}>
            <SignaturePad.Label class="text-sm font-medium text-gray-900 dark:text-gray-100">
              Digital Signature *
            </SignaturePad.Label>
            <SignaturePad.Control class="relative w-full h-32 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-300 dark:border-gray-600">
              <SignaturePad.Segment class="w-full h-full stroke-gray-900 dark:stroke-gray-100 fill-gray-900 dark:fill-gray-100" />
              <SignaturePad.ClearTrigger class="absolute top-2 right-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-xs font-medium">
                Clear
              </SignaturePad.ClearTrigger>
              <SignaturePad.Guide class="absolute bottom-4 left-3 right-3 border-b-2 border-dashed border-gray-400 dark:border-gray-500" />
            </SignaturePad.Control>
          </SignaturePad.Root>

          <div class="flex items-center space-x-2">
            {hasSignature() ? (
              <CheckCircle class="w-4 h-4 text-green-600" />
            ) : (
              <AlertCircle class="w-4 h-4 text-gray-400" />
            )}
            <span class="text-sm text-gray-600 dark:text-gray-400">
              {hasSignature() ? "Signature provided" : "Signature required"}
            </span>
          </div>
        </div>

        <div class="flex space-x-3">
          <button
            onClick={handleSubmit}
            disabled={!hasSignature()}
            class="flex-1 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:text-gray-500 dark:disabled:text-gray-400 hover:bg-blue-700 dark:hover:bg-blue-600 disabled:hover:bg-gray-300 dark:disabled:hover:bg-gray-600"
          >
            Submit Agreement
          </button>
        </div>

        {isSubmitted() && (
          <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
            <div class="flex items-center space-x-2">
              <CheckCircle class="w-4 h-4 text-green-600" />
              <span class="text-green-800 dark:text-green-200 text-sm font-medium">
                Agreement submitted successfully!
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
