<script>
  import { Avatar } from "@ark-ui/svelte/avatar";

  const avatars = [
    { src: "https://i.pravatar.cc/300", fallback: "JD" },
    { src: "https://i.pravatar.cc/301", fallback: "SM" },
    { src: "https://i.pravatar.cc/302", fallback: "AB" },
    { src: "https://i.pravatar.cc/303", fallback: "KL" },
  ];

  const excessCount = 3;
</script>

<div
  class="flex items-center gap-3 px-4 py-2 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-full"
>
  <div class="flex -space-x-2">
    {#each avatars as avatar, index}
      <Avatar.Root class="w-12 h-12 relative z-10">
        <Avatar.Fallback
          class="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm flex items-center justify-center rounded-full"
        >
          {avatar.fallback}
        </Avatar.Fallback>
        <Avatar.Image
          src={avatar.src}
          alt="avatar"
          class="w-full h-full object-cover rounded-full"
        />
      </Avatar.Root>
    {/each}
  </div>
  <div
    class="text-gray-700 dark:text-gray-300 font-medium text-sm cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 hover:scale-105 transition-all duration-200 ease-out"
  >
    +{excessCount}
  </div>
</div>
