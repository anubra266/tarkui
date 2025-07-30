<script>
  import { Avatar } from "@ark-ui/svelte/avatar";

  const avatars = [
    { src: "https://i.pravatar.cc/300", fallback: "JD" },
    { src: "https://i.pravatar.cc/301", fallback: "SM" },
    { src: "https://i.pravatar.cc/302", fallback: "AB" },
    { fallback: "KL" }, // No src, will show fallback
  ];
</script>

<div class="flex -space-x-2">
  {#each avatars as avatar, index}
    <Avatar.Root class="w-12 h-12 relative z-10">
      <Avatar.Fallback
        class="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm flex items-center justify-center rounded-full"
      >
        {avatar.fallback}
      </Avatar.Fallback>
      {#if avatar.src}
        <Avatar.Image
          src={avatar.src}
          alt="avatar"
          class="w-full h-full object-cover rounded-full"
        />
      {/if}
    </Avatar.Root>
  {/each}
</div>
