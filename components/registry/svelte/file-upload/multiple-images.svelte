<script lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload";
  import { Upload, X } from "lucide-svelte";
  import { onMount } from "svelte";

  let acceptedFiles: File[] = [];

  async function fileFromImageUrl(
    url: string,
    filename = "image.jpg"
  ): Promise<File> {
    const response = await fetch(url);
    const blob = await response.blob();
    const contentType = blob.type || "image/jpeg";

    return new File([blob], filename, { type: contentType });
  }

  onMount(async () => {
    const files = await Promise.all(
      Array.from({ length: 4 }).map((_, index) =>
        fileFromImageUrl(
          `https://picsum.photos/1000/800?grayscale&random=${index + 1}`,
          `photo${index + 1}.jpg`
        )
      )
    );
    acceptedFiles = files;
  });

  const handleFileChange = (e: { acceptedFiles: File[] }) => {
    acceptedFiles = e.acceptedFiles;
  };
</script>

<FileUpload.Root
  accept="image/*"
  maxFiles={10}
  class="w-full max-w-4xl"
  {acceptedFiles}
  onFileChange={handleFileChange}
>
  <FileUpload.Context>
    {#snippet render(context)}
      <div class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 bg-gray-50 dark:bg-gray-800 min-h-64">
        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
            Uploaded Files ({context().acceptedFiles.length})
          </h3>
          <FileUpload.Trigger class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2">
            <Upload class="w-3 h-3" />
            Add more
          </FileUpload.Trigger>
        </div>

        <!-- Images Grid -->
        {#if context().acceptedFiles.length > 0}
          <FileUpload.ItemGroup>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {#each context().acceptedFiles as file (file.name)}
                <FileUpload.Item
                  {file}
                  class="relative"
                >
                  <div class="relative aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <FileUpload.ItemPreview
                      type="image/*"
                      class="w-full h-full object-cover"
                    >
                      <FileUpload.ItemPreviewImage class="w-full h-full object-cover" />
                    </FileUpload.ItemPreview>

                    <!-- Delete Button -->
                    <FileUpload.ItemDeleteTrigger class="absolute top-2 right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                      <X class="w-3 h-3" />
                    </FileUpload.ItemDeleteTrigger>
                  </div>
                </FileUpload.Item>
              {/each}
            </div>
          </FileUpload.ItemGroup>
        {:else}
          <!-- Empty State -->
          <FileUpload.Dropzone class="flex flex-col items-center justify-center py-8 text-center cursor-pointer">
            <div class="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 flex items-center justify-center mb-4">
              <Upload class="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              Click to upload or drag and drop images here
            </p>
          </FileUpload.Dropzone>
        {/if}
      </div>
    {/snippet}
  </FileUpload.Context>

  <FileUpload.HiddenInput />
</FileUpload.Root> 