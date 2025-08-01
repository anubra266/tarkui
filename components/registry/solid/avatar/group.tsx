import { Avatar } from "@ark-ui/solid/avatar";
import { For } from "solid-js";

export default function AvatarGroup() {
  const avatars = [
    { src: "https://i.pravatar.cc/300", fallback: "JD" },
    { src: "https://i.pravatar.cc/301", fallback: "SM" },
    { src: "https://i.pravatar.cc/302", fallback: "AB" },
    { fallback: "KL" }, // No src, will show fallback
  ];

  return (
    <div class="flex -space-x-2">
      <For each={avatars}>
        {(avatar, index) => (
          <Avatar.Root class="w-12 h-12 relative z-10">
            <Avatar.Fallback class="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm flex items-center justify-center rounded-full">
              {avatar.fallback}
            </Avatar.Fallback>
            {avatar.src && (
              <Avatar.Image
                src={avatar.src}
                alt="avatar"
                class="w-full h-full object-cover rounded-full"
              />
            )}
          </Avatar.Root>
        )}
      </For>
    </div>
  );
}
