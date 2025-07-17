import { Avatar } from "@ark-ui/react/avatar";

export default function AvatarWithStatusMinimal() {
  return (
    <div className="relative">
      <Avatar.Root className="w-16 h-16">
        <Avatar.Fallback className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700 font-semibold text-lg flex items-center justify-center rounded-2xl">
          AB
        </Avatar.Fallback>
        <Avatar.Image
          src="https://i.pravatar.cc/300"
          alt="avatar"
          className="w-full h-full object-cover rounded-2xl"
        />
      </Avatar.Root>
      {/* Minimal green status indicator */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
    </div>
  );
}
