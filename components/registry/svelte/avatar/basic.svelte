<script>
  import { Avatar } from "@ark-ui/svelte/avatar";
</script>

<Avatar.Root class="w-16 h-16">
  <Avatar.Fallback
    class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-lg flex items-center justify-center rounded-full"
  >
    PA
  </Avatar.Fallback>
  <Avatar.Image
    src="https://i.pravatar.cc/300"
    alt="avatar"
    class="w-full h-full object-cover rounded-full"
  />
</Avatar.Root>
