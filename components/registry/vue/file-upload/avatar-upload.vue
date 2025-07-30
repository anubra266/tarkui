<script setup lang="ts">
import { FileUpload } from "@ark-ui/vue/file-upload";
import { User, X } from "lucide-vue-next";
</script>

<template>
  <FileUpload.Root
    :max-files="1"
    accept="image/*"
    class="flex flex-col items-center gap-3"
  >
    <FileUpload.Context v-slot="context">
      <!-- Avatar Area -->
      <div class="relative">
        <FileUpload.Trigger
          class="size-24 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 flex items-center justify-center overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2 transition-colors"
        >
          <FileUpload.ItemGroup v-if="context.acceptedFiles.length > 0">
            <FileUpload.Item :file="context.acceptedFiles[0]">
              <FileUpload.ItemPreview type="image/*">
                <FileUpload.ItemPreviewImage
                  class="w-full h-full object-cover"
                />
              </FileUpload.ItemPreview>
            </FileUpload.Item>
          </FileUpload.ItemGroup>
          <User v-else class="size-6 text-gray-400 dark:text-gray-500" />
        </FileUpload.Trigger>

        <!-- Close Button -->
        <FileUpload.ItemGroup v-if="context.acceptedFiles.length > 0">
          <FileUpload.Item :file="context.acceptedFiles[0]">
            <FileUpload.ItemDeleteTrigger
              class="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              <X class="w-4 h-4" />
            </FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        </FileUpload.ItemGroup>
      </div>

      <!-- Filename -->
      <FileUpload.ItemGroup v-if="context.acceptedFiles.length > 0">
        <FileUpload.Item :file="context.acceptedFiles[0]">
          <FileUpload.ItemName
            class="text-sm text-gray-600 dark:text-gray-400 text-center max-w-32 truncate"
          />
        </FileUpload.Item>
      </FileUpload.ItemGroup>
    </FileUpload.Context>

    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
