"use client";

import { FileUpload } from "@ark-ui/solid/file-upload";
import {
  FileText,
  X,
  File as FileIcon,
  FileArchive,
  FileSpreadsheet,
  Video,
  Headphones,
  Image,
} from "lucide-solid";

const getFileIcon = (file: File) => {
  const fileType = file.type;
  const fileName = file.name;

  if (
    fileType.includes("pdf") ||
    fileName.endsWith(".pdf") ||
    fileType.includes("word") ||
    fileName.endsWith(".doc") ||
    fileName.endsWith(".docx")
  ) {
    return <FileText class="w-4 h-4 opacity-60" />;
  } else if (
    fileType.includes("zip") ||
    fileType.includes("archive") ||
    fileName.endsWith(".zip") ||
    fileName.endsWith(".rar")
  ) {
    return <FileArchive class="w-4 h-4 opacity-60" />;
  } else if (
    fileType.includes("excel") ||
    fileName.endsWith(".xls") ||
    fileName.endsWith(".xlsx")
  ) {
    return <FileSpreadsheet class="w-4 h-4 opacity-60" />;
  } else if (fileType.includes("video/")) {
    return <Video class="w-4 h-4 opacity-60" />;
  } else if (fileType.includes("audio/")) {
    return <Headphones class="w-4 h-4 opacity-60" />;
  } else if (fileType.startsWith("image/")) {
    return <Image class="w-4 h-4 opacity-60" />;
  }
  return <FileIcon class="w-4 h-4 opacity-60" />;
};

export default function FilesList() {
  return (
    <FileUpload.Root
      maxFiles={10}
      maxFileSize={100 * 1024 * 1024}
      class="w-full max-w-2xl space-y-4"
      defaultAcceptedFiles={[
        new File(["Welcome to Ark UI Solid`"], "document.pdf", {
          type: "text/plain",
        }),
        new File(
          ["Welcome to Ark UI Solid, this is a zip file`"],
          "showcase.zip",
          {
            type: "application/zip",
          }
        ),
        new File(
          ["Welcome to Ark UI Solid, this is an excel file`"],
          "data.xlsx",
          {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          }
        ),
      ]}
    >
      <FileUpload.Context>
        {(context) => (
          <>
            {/* Dropzone */}
            <FileUpload.Dropzone class="w-full border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 flex flex-col items-center justify-center py-12 px-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              {/* File Icon */}
              <div class="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 flex items-center justify-center mb-4">
                <FileText class="w-5 h-5 text-gray-400 dark:text-gray-500" />
              </div>

              {/* Text */}
              <div class="text-center space-y-2">
                <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Upload files
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Drag & drop or click to browse
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  All files • Max 10 files • Up to 100MB
                </p>
              </div>
            </FileUpload.Dropzone>

            {/* Files List */}
            {context().acceptedFiles.length > 0 && (
              <div class="space-y-3">
                <FileUpload.ItemGroup>
                  {context().acceptedFiles.map((file) => (
                    <FileUpload.Item file={file}>
                      <div class="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900">
                        {/* File Icon/Preview */}
                        <div class="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center justify-center shrink-0 overflow-hidden">
                          {file.type.startsWith("image/") ? (
                            <FileUpload.ItemPreview type="image/*">
                              <FileUpload.ItemPreviewImage class="w-full h-full object-cover" />
                            </FileUpload.ItemPreview>
                          ) : (
                            getFileIcon(file)
                          )}
                        </div>

                        {/* File Info */}
                        <div class="flex-1 min-w-0">
                          <FileUpload.ItemName class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate" />
                          <FileUpload.ItemSizeText class="text-xs text-gray-500 dark:text-gray-400" />
                        </div>

                        {/* Delete Button */}
                        <FileUpload.ItemDeleteTrigger class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 shrink-0">
                          <X class="w-4 h-4" />
                        </FileUpload.ItemDeleteTrigger>
                      </div>
                    </FileUpload.Item>
                  ))}
                </FileUpload.ItemGroup>

                {/* Remove All Button */}
                <FileUpload.ClearTrigger class="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2">
                  Remove all files
                </FileUpload.ClearTrigger>
              </div>
            )}
          </>
        )}
      </FileUpload.Context>

      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
}
