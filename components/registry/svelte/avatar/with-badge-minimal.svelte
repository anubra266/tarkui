<script>
  import { Avatar } from "@ark-ui/svelte/avatar";
</script>

<div class="relative">
  <Avatar.Root class="w-16 h-16">
    <Avatar.Fallback
      class="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 text-gray-700 font-semibold text-lg flex items-center justify-center rounded-2xl"
    >
      AB
    </Avatar.Fallback>
    <Avatar.Image
      src="https://i.pravatar.cc/300"
      alt="avatar"
      class="w-full h-full object-cover rounded-2xl"
    />
  </Avatar.Root>
  <!-- Minimal number badge -->
  <div
    class="absolute -top-1 -right-1 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-xs flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900"
  >
    6
  </div>
</div>
