"use client";

import { FileUpload } from "@ark-ui/react/file-upload";
import { User } from "lucide-react";

export default function Basic() {
  return (
    <FileUpload.Root
      maxFiles={1}
      accept="image/*"
      className="flex flex-col items-start gap-3"
    >
      <FileUpload.Context>
        {({ acceptedFiles }) => (
          <>
            <div className="flex items-center gap-3">
              {/* Image Preview / Placeholder */}
              <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                {acceptedFiles.length > 0 ? (
                  <FileUpload.ItemGroup>
                    <FileUpload.Item file={acceptedFiles[0]}>
                      <FileUpload.ItemPreview type="image/*">
                        <FileUpload.ItemPreviewImage className="w-full h-full object-cover" />
                      </FileUpload.ItemPreview>
                    </FileUpload.Item>
                  </FileUpload.ItemGroup>
                ) : (
                  <User className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                )}
              </div>

              {/* Upload/Change Button */}
              <FileUpload.Trigger className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2">
                {acceptedFiles.length > 0 ? "Change image" : "Upload image"}
              </FileUpload.Trigger>
            </div>

            {/* Filename and Remove */}
            {acceptedFiles.length > 0 && (
              <FileUpload.ItemGroup>
                <FileUpload.Item
                  file={acceptedFiles[0]}
                  className="flex items-center gap-2"
                >
                  <FileUpload.ItemName className="text-sm text-gray-600 dark:text-gray-400" />
                  <FileUpload.ItemDeleteTrigger className="text-sm text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300">
                    Remove
                  </FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
              </FileUpload.ItemGroup>
            )}
          </>
        )}
      </FileUpload.Context>

      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
}
