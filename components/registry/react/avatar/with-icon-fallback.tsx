import { Avatar } from "@ark-ui/react/avatar";
import { UserIcon } from "lucide-react";

export default function AvatarWithIconFallback() {
  return (
    <Avatar.Root className="w-16 h-16">
      <Avatar.Fallback className="w-full h-full bg-linear-to-br from-slate-400 to-slate-500 text-white flex items-center justify-center rounded-full">
        <UserIcon className="w-8 h-8" />
      </Avatar.Fallback>
      {/* No src provided, so icon fallback will be displayed */}
      <Avatar.Image
        alt="avatar"
        className="w-full h-full object-cover rounded-full"
      />
    </Avatar.Root>
  );
}
