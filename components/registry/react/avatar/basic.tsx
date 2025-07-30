import { Avatar } from "@ark-ui/react/avatar";

export default function BasicAvatar() {
  return (
    <Avatar.Root className="w-16 h-16">
      <Avatar.Fallback className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 text-white font-semibold text-lg flex items-center justify-center rounded-full">
        PA
      </Avatar.Fallback>
      <Avatar.Image
        src="https://i.pravatar.cc/300"
        alt="avatar"
        className="w-full h-full object-cover rounded-full"
      />
    </Avatar.Root>
  );
}
