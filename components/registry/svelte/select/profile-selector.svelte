<script>
  import { Portal } from "@ark-ui/svelte/portal";
  import { Select, createListCollection } from "@ark-ui/svelte/select";
  import { ChevronDownIcon, UserIcon } from "lucide-svelte";
  import { writable } from "svelte/store";

  const selectedProfile = writable("sarah");

  const profiles = [
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

  const collection = createListCollection({ items: profiles });

  $: selectedProfileData = profiles.find(
    (profile) => profile.value === $selectedProfile
  );
</script>

<div
  class="bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center"
>
  <div class="max-w-sm w-full">
    <Select.Root
      {collection}
      defaultValue={["sarah"]}
      onValueChange={(e) => selectedProfile.set(e.value[0] || "sarah")}
    >
      <Select.Label
        class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2"
      >
        Assign to
      </Select.Label>
      <Select.Control>
        <Select.Trigger
          class="flex min-h-12 w-full items-center justify-between rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
        >
          <div class="flex items-center gap-3">
            {#if selectedProfileData}
              <img
                src={selectedProfileData.avatar}
                alt={selectedProfileData.label}
                class="w-6 h-6 rounded-full object-cover"
              />
            {:else}
              <UserIcon class="w-6 h-6 text-gray-400" />
            {/if}
            <div class="flex flex-col">
              <Select.ValueText placeholder="Select a profile" />
              {#if selectedProfileData}
                <span class="text-xs text-gray-500 dark:text-gray-400">
                  {selectedProfileData.role}
                </span>
              {/if}
            </div>
          </div>
          <Select.Indicator>
            <ChevronDownIcon class="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger
          class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mt-1"
        >
          Clear
        </Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content
            class="z-50 min-w-[var(--reference-width)] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg max-h-60 overflow-auto"
          >
            <Select.ItemGroup>
              <Select.ItemGroupLabel
                class="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide"
              >
                Team Members
              </Select.ItemGroupLabel>
              {#each profiles as profile}
                <Select.Item
                  item={profile}
                  class="relative flex cursor-pointer select-none items-center px-3 py-3 text-sm text-gray-900 dark:text-gray-100 data-[highlighted]:bg-gray-100 dark:data-[highlighted]:bg-gray-700 data-[state=checked]:bg-gray-50 dark:data-[state=checked]:bg-gray-700"
                >
                  <img
                    src={profile.avatar}
                    alt={profile.label}
                    class="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <div class="flex flex-col flex-1">
                    <Select.ItemText class="font-medium">
                      {profile.label}
                    </Select.ItemText>
                    <span class="text-xs text-gray-500 dark:text-gray-400">
                      {profile.role}
                    </span>
                  </div>
                  <Select.ItemIndicator
                    class="absolute right-3 text-blue-600 dark:text-blue-400"
                  >
                    ✓
                  </Select.ItemIndicator>
                </Select.Item>
              {/each}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  </div>
</div>
