<script>
  import { Avatar } from "@ark-ui/svelte/avatar";
</script>

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
