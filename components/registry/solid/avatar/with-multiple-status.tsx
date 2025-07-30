import { Avatar } from "@ark-ui/solid/avatar";

export default function AvatarWithMultipleStatus() {
  const statusTypes = [
    { color: "bg-green-500", label: "online" },
    { color: "bg-yellow-500", label: "away" },
    { color: "bg-red-500", label: "busy" },
    { color: "bg-gray-400", label: "offline" },
  ];

  return (
    <>
      {statusTypes.map((status, index) => (
        <div class="flex flex-col items-center gap-2">
          <div class="relative">
            <Avatar.Root class="w-16 h-16">
              <Avatar.Fallback class="w-full h-full bg-linear-to-br from-indigo-500 to-purple-600 text-white font-semibold text-lg flex items-center justify-center rounded-full">
                U{index + 1}
              </Avatar.Fallback>
              <Avatar.Image
                src={`https://i.pravatar.cc/30${index + 4}`}
                alt="avatar"
                class="w-full h-full object-cover rounded-full"
              />
            </Avatar.Root>
            {/* Status indicator */}
            <div
              class={`absolute -bottom-0.5 -right-0.5 w-5 h-5 ${status.color} border-2 border-white dark:border-gray-900 rounded-full`}
            ></div>
          </div>
          <span class="text-xs text-gray-600 dark:text-gray-400 capitalize">
            {status.label}
          </span>
        </div>
      ))}
    </>
  );
}
