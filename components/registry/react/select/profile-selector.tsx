"use client";

import { Portal } from "@ark-ui/react/portal";
import { Select, createListCollection } from "@ark-ui/react/select";
import { ChevronDownIcon, UserIcon } from "lucide-react";
import { useState } from "react";

interface Profile {
  label: string;
  value: string;
  avatar: string;
  email: string;
  role: string;
}

export default function ProfileSelector() {
  const [selectedProfile, setSelectedProfile] = useState<string>("sarah");

  const profiles: Profile[] = [
    {
      label: "Sarah Johnson",
      value: "sarah",
      avatar: "https://picsum.photos/32/32?random=1",
      email: "sarah.johnson@company.com",
      role: "Product Manager",
    },
    {
      label: "Michael Chen",
      value: "michael",
      avatar: "https://picsum.photos/32/32?random=2",
      email: "michael.chen@company.com",
      role: "Frontend Developer",
    },
    {
      label: "Emily Rodriguez",
      value: "emily",
      avatar: "https://picsum.photos/32/32?random=3",
      email: "emily.rodriguez@company.com",
      role: "UX Designer",
    },
    {
      label: "David Kim",
      value: "david",
      avatar: "https://picsum.photos/32/32?random=4",
      email: "david.kim@company.com",
      role: "Backend Developer",
    },
    {
      label: "Lisa Thompson",
      value: "lisa",
      avatar: "https://picsum.photos/32/32?random=5",
      email: "lisa.thompson@company.com",
      role: "Marketing Manager",
    },
  ];

  const collection = createListCollection<Profile>({ items: profiles });

  const selectedProfileData = profiles.find(
    (profile) => profile.value === selectedProfile
  );

  return (
    <div className="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <div className="max-w-sm w-full">
        <Select.Root
          collection={collection}
          defaultValue={["sarah"]}
          onValueChange={(e) => setSelectedProfile(e.value[0] || "sarah")}
        >
          <Select.Label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            Assign to
          </Select.Label>
          <Select.Control>
            <Select.Trigger className="flex min-h-12 w-full items-center justify-between rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100">
              <div className="flex items-center gap-3">
                {selectedProfileData ? (
                  <img
                    src={selectedProfileData.avatar}
                    alt={selectedProfileData.label}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                ) : (
                  <UserIcon className="w-6 h-6 text-gray-400" />
                )}
                <div className="flex flex-col">
                  <Select.ValueText placeholder="Select a profile" />
                  {selectedProfileData && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {selectedProfileData.role}
                    </span>
                  )}
                </div>
              </div>
              <Select.Indicator>
                <ChevronDownIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </Select.Indicator>
            </Select.Trigger>
            <Select.ClearTrigger className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mt-1">
              Clear
            </Select.ClearTrigger>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content className="z-50 min-w-[var(--reference-width)] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg max-h-60 overflow-auto">
                <Select.ItemGroup>
                  <Select.ItemGroupLabel className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Team Members
                  </Select.ItemGroupLabel>
                  {collection.items.map((profile) => (
                    <Select.Item
                      key={profile.value}
                      item={profile}
                      className="relative flex cursor-pointer select-none items-center px-3 py-3 text-sm text-gray-900 dark:text-gray-100 data-[highlighted]:bg-gray-100 dark:data-[highlighted]:bg-gray-700 data-[state=checked]:bg-gray-50 dark:data-[state=checked]:bg-gray-700"
                    >
                      <img
                        src={profile.avatar}
                        alt={profile.label}
                        className="w-8 h-8 rounded-full object-cover mr-3"
                      />
                      <div className="flex flex-col flex-1">
                        <Select.ItemText className="font-medium">
                          {profile.label}
                        </Select.ItemText>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {profile.role}
                        </span>
                      </div>
                      <Select.ItemIndicator className="absolute right-3 text-blue-600 dark:text-blue-400">
                        ✓
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.ItemGroup>
              </Select.Content>
            </Select.Positioner>
          </Portal>
          <Select.HiddenSelect />
        </Select.Root>
      </div>
    </div>
  );
}
