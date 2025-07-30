import { Avatar } from "@ark-ui/react/avatar";

export default function TrustedByAvatars() {
  const avatars = [
    { src: "https://i.pravatar.cc/300", fallback: "JD" },
    { src: "https://i.pravatar.cc/301", fallback: "SM" },
    { src: "https://i.pravatar.cc/302", fallback: "AB" },
    { src: "https://i.pravatar.cc/303", fallback: "KL" },
  ];

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-gray-100/50 dark:bg-gray-800/50 rounded-full border border-gray-200 dark:border-gray-700">
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <Avatar.Root key={index} className="w-8 h-8 relative z-10">
            <Avatar.Fallback className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 text-white font-semibold text-xs flex items-center justify-center rounded-full">
              {avatar.fallback}
            </Avatar.Fallback>
            <Avatar.Image
              src={avatar.src}
              alt="avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </Avatar.Root>
        ))}
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
        Trusted by <span className="font-bold">80K+</span> developers.
      </span>
    </div>
  );
}
