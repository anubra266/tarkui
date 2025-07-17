<script>
  import { Avatar } from "@ark-ui/svelte/avatar";
</script>

<div class="relative">
  <Avatar.Root class="w-16 h-16">
    <Avatar.Fallback
      class="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 text-white font-semibold text-lg flex items-center justify-center rounded-full"
    >
      SM
    </Avatar.Fallback>
    <Avatar.Image
      src="https://i.pravatar.cc/301"
      alt="avatar"
      class="w-full h-full object-cover rounded-full"
    />
  </Avatar.Root>
  <!-- Online status indicator -->
  <div
    class="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"
  ></div>
</div>
