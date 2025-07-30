import { Avatar } from "@ark-ui/react/avatar";
import { CheckIcon } from "lucide-react";

export default function AvatarWithVerification() {
  return (
    <div className="relative">
      <Avatar.Root className="w-16 h-16">
        <Avatar.Fallback className="w-full h-full bg-linear-to-br from-indigo-500 to-purple-600 text-white font-semibold text-lg flex items-center justify-center rounded-full">
          VU
        </Avatar.Fallback>
        <Avatar.Image
          src="https://i.pravatar.cc/301"
          alt="avatar"
          className="w-full h-full object-cover rounded-full"
        />
      </Avatar.Root>
      {/* Verification badge */}
      <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900">
        <CheckIcon className="w-3 h-3" />
      </div>
    </div>
  );
}
