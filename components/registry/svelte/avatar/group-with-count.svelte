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

<div class="flex -space-x-2">
  {#each avatars as avatar, index}
    <Avatar.Root class="w-12 h-12 relative z-10">
      <Avatar.Fallback
        class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm flex items-center justify-center rounded-full"
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
  <!-- Excess count indicator -->
  <div
    class="w-12 h-12 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-sm flex items-center justify-center rounded-full relative z-10 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200 ease-out"
  >
    +{excessCount}
  </div>
</div>
