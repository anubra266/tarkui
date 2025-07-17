<script>
  import { Avatar } from "@ark-ui/svelte/avatar";
</script>

<div class="relative">
  <Avatar.Root class="w-16 h-16">
    <Avatar.Fallback
      class="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold text-lg flex items-center justify-center rounded-full"
    >
      VU
    </Avatar.Fallback>
    <Avatar.Image
      src="https://i.pravatar.cc/301"
      alt="avatar"
      class="w-full h-full object-cover rounded-full"
    />
  </Avatar.Root>
  <!-- Verification badge -->
  <div
    class="absolute -bottom-0.5 -right-0.5 w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900"
  >
    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
</div>
