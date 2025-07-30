"use client";

import { FileUpload } from "@ark-ui/solid/file-upload";
import { DownloadTrigger } from "@ark-ui/solid/download-trigger";

import {
  FileText,
  Upload,
  Download,
  Trash2,
  File as FileIcon,
  FileArchive,
  FileSpreadsheet,
  Video,
  Headphones,
  Image,
} from "lucide-solid";

const getFileExtension = (filename: string) => {
  const ext = filename.split(".").pop()?.toUpperCase();
  return ext || "FILE";
};

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

export default function FilesTable() {
  return (
    <FileUpload.Root
      maxFiles={10}
      maxFileSize={100 * 1024 * 1024}
      class="w-full max-w-4xl"
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
        new File(
          ["Welcome to Ark UI Solid, this is an audio file`"],
          "audio.mp3",
          {
            type: "audio/mpeg",
          }
        ),
        new File(
          ["Welcome to Ark UI Solid, this is a video file`"],
          "documentary.mp4",
          {
            type: "video/mp4",
          }
        ),
      ]}
    >
      <FileUpload.Context>
        {(context) => (
          <div class="space-y-4">
            {/* Header */}
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
                Files ({context().acceptedFiles.length})
              </h3>
              <div class="flex items-center gap-2">
                <FileUpload.Trigger class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2">
                  <Upload class="w-3 h-3" />
                  Add files
                </FileUpload.Trigger>
                {context().acceptedFiles.length > 0 && (
                  <FileUpload.ClearTrigger class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2">
                    <Trash2 class="w-3 h-3" />
                    Remove all
                  </FileUpload.ClearTrigger>
                )}
              </div>
            </div>

            {/* Table */}
            {context().acceptedFiles.length > 0 ? (
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                {/* Table Header */}
                <div class="grid grid-cols-12 gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <div class="col-span-5 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Name
                  </div>
                  <div class="col-span-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Type
                  </div>
                  <div class="col-span-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Size
                  </div>
                  <div class="col-span-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Actions
                  </div>
                </div>

                {/* Table Body */}
                <FileUpload.ItemGroup>
                  {context().acceptedFiles.map((file, index) => (
                    <FileUpload.Item file={file}>
                      <div
                        class={`grid grid-cols-12 gap-3 px-4 py-3 ${
                          index !== context().acceptedFiles.length - 1
                            ? "border-b border-gray-200 dark:border-gray-700"
                            : ""
                        }`}
                      >
                        {/* Name */}
                        <div class="col-span-5 flex items-center gap-2 min-w-0">
                          <div class="w-4 h-4 flex items-center justify-center shrink-0">
                            {file.type.startsWith("image/") ? (
                              <FileUpload.ItemPreview type="image/*">
                                <FileUpload.ItemPreviewImage class="w-4 h-4 object-cover rounded" />
                              </FileUpload.ItemPreview>
                            ) : (
                              getFileIcon(file)
                            )}
                          </div>
                          <FileUpload.ItemName class="text-sm text-gray-900 dark:text-gray-100 truncate" />
                        </div>

                        {/* Type */}
                        <div class="col-span-2 flex items-center">
                          <span class="text-sm text-gray-600 dark:text-gray-400">
                            {getFileExtension(file.name)}
                          </span>
                        </div>

                        {/* Size */}
                        <div class="col-span-2 flex items-center">
                          <FileUpload.ItemSizeText class="text-sm text-gray-600 dark:text-gray-400" />
                        </div>

                        {/* Actions */}
                        <div class="col-span-3 flex items-center gap-2">
                          <DownloadTrigger
                            data={file}
                            fileName={file.name}
                            mimeType={file.type}
                          >
                            <button class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                              <Download class="w-4 h-4" />
                            </button>
                          </DownloadTrigger>
                          <FileUpload.ItemDeleteTrigger class="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                            <Trash2 class="w-4 h-4" />
                          </FileUpload.ItemDeleteTrigger>
                        </div>
                      </div>
                    </FileUpload.Item>
                  ))}
                </FileUpload.ItemGroup>
              </div>
            ) : (
              /* Empty State */
              <FileUpload.Dropzone class="w-full border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 flex flex-col items-center justify-center py-12 px-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                <div class="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 flex items-center justify-center mb-3">
                  <FileText class="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
                <div class="text-center">
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Drag & drop files here or click to browse
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Max 10 files • Up to 100MB each
                  </p>
                </div>
              </FileUpload.Dropzone>
            )}
          </div>
        )}
      </FileUpload.Context>

      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
}
