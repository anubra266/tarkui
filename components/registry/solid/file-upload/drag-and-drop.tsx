"use client";

import { FileUpload } from "@ark-ui/solid/file-upload";
import { ImageIcon, X } from "lucide-solid";

export default function DragAndDrop() {
  return (
    <FileUpload.Root
      maxFiles={1}
      accept="image/*"
      maxFileSize={5 * 1024 * 1024}
      class="w-full max-w-2xl"
    >
      <FileUpload.Context>
        {(context) => (
          <>
            {context().acceptedFiles.length > 0 ? (
              /* Uploaded State */
              <div class="relative">
                <FileUpload.ItemGroup>
                  <FileUpload.Item file={context().acceptedFiles[0]}>
                    <FileUpload.ItemPreview type="image/*">
                      <FileUpload.ItemPreviewImage class="w-full h-64 object-cover rounded-xl" />
                    </FileUpload.ItemPreview>
                  </FileUpload.Item>
                </FileUpload.ItemGroup>

                {/* Close Button */}
                <FileUpload.ItemGroup>
                  <FileUpload.Item file={context().acceptedFiles[0]}>
                    <FileUpload.ItemDeleteTrigger class="absolute top-4 right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                      <X class="w-4 h-4" />
                    </FileUpload.ItemDeleteTrigger>
                  </FileUpload.Item>
                </FileUpload.ItemGroup>
              </div>
            ) : (
              /* Empty State - Dropzone */
              <FileUpload.Dropzone class="w-full h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 flex flex-col items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 data-[dragging]:border-gray-900 dark:data-[dragging]:border-gray-100 data-[dragging]:bg-gray-100 dark:data-[dragging]:bg-gray-700 transition-colors cursor-pointer">
                {/* Image Icon in Circle */}
                <div class="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 flex items-center justify-center">
                  <ImageIcon class="w-5 h-5 text-gray-400 dark:text-gray-500" />
                </div>

                {/* Text */}
                <div class="text-center">
                  <p class="text-sm font-normal text-gray-900 dark:text-gray-100 mb-1">
                    Drop your image here or click to browse
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Max size: 5MB
                  </p>
                </div>
              </FileUpload.Dropzone>
            )}
          </>
        )}
      </FileUpload.Context>

      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
}
