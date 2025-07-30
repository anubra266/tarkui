<script>
  import { Avatar } from "@ark-ui/svelte/avatar";
</script>

<Avatar.Root class="w-16 h-16">
  <Avatar.Fallback
    class="w-full h-full bg-linear-to-br from-slate-400 to-slate-500 text-white flex items-center justify-center rounded-full"
  >
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  </Avatar.Fallback>
  <!-- No src provided, so icon fallback will be displayed -->
  <Avatar.Image alt="avatar" class="w-full h-full object-cover rounded-full" />
</Avatar.Root>
