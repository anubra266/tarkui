import { Avatar } from "@ark-ui/react/avatar";

export default function AvatarWithFallback() {
  return (
    <Avatar.Root className="w-16 h-16">
      <Avatar.Fallback className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-semibold text-lg flex items-center justify-center rounded-full">
        JD
      </Avatar.Fallback>
      {/* No src provided, so fallback will be displayed */}
      <Avatar.Image
        alt="avatar"
        className="w-full h-full object-cover rounded-full"
      />
    </Avatar.Root>
  );
}
