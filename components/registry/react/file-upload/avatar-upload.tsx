"use client";

import { FileUpload } from "@ark-ui/react/file-upload";
import { User, X } from "lucide-react";

export default function AvatarUpload() {
  return (
    <FileUpload.Root
      maxFiles={1}
      accept="image/*"
      className="flex flex-col items-center gap-3"
    >
      <FileUpload.Context>
        {({ acceptedFiles }) => (
          <>
            {/* Avatar Area */}
            <div className="relative">
              <FileUpload.Trigger className="size-24 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 flex items-center justify-center overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2 transition-colors">
                {acceptedFiles.length > 0 ? (
                  <FileUpload.ItemGroup>
                    <FileUpload.Item file={acceptedFiles[0]}>
                      <FileUpload.ItemPreview type="image/*">
                        <FileUpload.ItemPreviewImage className="w-full h-full object-cover" />
                      </FileUpload.ItemPreview>
                    </FileUpload.Item>
                  </FileUpload.ItemGroup>
                ) : (
                  <User className="size-6 text-gray-400 dark:text-gray-500" />
                )}
              </FileUpload.Trigger>

              {/* Close Button */}
              {acceptedFiles.length > 0 && (
                <FileUpload.ItemGroup>
                  <FileUpload.Item file={acceptedFiles[0]}>
                    <FileUpload.ItemDeleteTrigger className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                      <X className="w-4 h-4" />
                    </FileUpload.ItemDeleteTrigger>
                  </FileUpload.Item>
                </FileUpload.ItemGroup>
              )}
            </div>

            {/* Filename */}
            {acceptedFiles.length > 0 && (
              <FileUpload.ItemGroup>
                <FileUpload.Item file={acceptedFiles[0]}>
                  <FileUpload.ItemName className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-32 truncate" />
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
