"use client";

import { SignaturePad } from "@ark-ui/react/signature-pad";
import { useState } from "react";

export default function SignaturePadWithPreview() {
  const [imageUrl, setImageUrl] = useState<string>("");

  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div className="max-w-md w-full space-y-6">
        <SignaturePad.Root
          onDrawEnd={(details) =>
            details.getDataUrl("image/png").then((url) => setImageUrl(url))
          }
        >
          <SignaturePad.Label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            Sign below
          </SignaturePad.Label>
          <SignaturePad.Control className="relative w-full h-32 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
            <SignaturePad.Segment className="w-full h-full stroke-gray-900 dark:stroke-gray-100 fill-gray-900 dark:fill-gray-100" />
            <SignaturePad.ClearTrigger
              className="absolute top-2 right-2 p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm"
              onClick={() => setImageUrl("")}
            >
              Clear
            </SignaturePad.ClearTrigger>
            <SignaturePad.Guide className="absolute bottom-4 left-2 right-2 border-b border-dashed border-gray-400 dark:border-gray-500" />
          </SignaturePad.Control>
        </SignaturePad.Root>

        {imageUrl && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Signature Preview
            </h3>
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-700">
              <img
                src={imageUrl}
                alt="Signature preview"
                className="w-full h-24 object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
