<script lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload";
  import { User } from "lucide-svelte";
</script>

<FileUpload.Root
  maxFiles={1}
  accept="image/*"
  class="flex flex-col items-start gap-3"
>
  <FileUpload.Context>
    {#snippet render(context)}
      <div class="flex items-center gap-3">
        <!-- Image Preview / Placeholder -->
        <div class="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
          {#if context().acceptedFiles.length > 0}
            <FileUpload.ItemGroup>
              <FileUpload.Item file={context().acceptedFiles[0]}>
                <FileUpload.ItemPreview type="image/*">
                  <FileUpload.ItemPreviewImage class="w-full h-full object-cover" />
                </FileUpload.ItemPreview>
              </FileUpload.Item>
            </FileUpload.ItemGroup>
          {:else}
            <User class="w-5 h-5 text-gray-400 dark:text-gray-500" />
          {/if}
        </div>

        <!-- Upload/Change Button -->
        <FileUpload.Trigger class="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2">
          {context().acceptedFiles.length > 0 ? "Change image" : "Upload image"}
        </FileUpload.Trigger>
      </div>

      <!-- Filename and Remove -->
      {#if context().acceptedFiles.length > 0}
        <FileUpload.ItemGroup>
          <FileUpload.Item
            file={context().acceptedFiles[0]}
            class="flex items-center gap-2"
          >
            <FileUpload.ItemName class="text-sm text-gray-600 dark:text-gray-400" />
            <FileUpload.ItemDeleteTrigger class="text-sm text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300">
              Remove
            </FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        </FileUpload.ItemGroup>
      {/if}
    {/snippet}
  </FileUpload.Context>

  <FileUpload.HiddenInput />
</FileUpload.Root> 