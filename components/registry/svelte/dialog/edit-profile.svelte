<script>
  import { Dialog } from "@ark-ui/svelte/dialog";
  import { Portal } from "@ark-ui/svelte/portal";
  import { X, Edit3, Check } from "lucide-svelte";

  const state = $state({
    profileData: {
      firstName: "Jordan",
      lastName: "Smith",
      username: "jordan-smith",
      website: "www.jordansmith.dev",
      biography:
        "Software engineer who enjoys building clean, efficient applications. Passionate about user experience and modern web technologies.",
    },
  });

  const maxBioLength = 160;

  $derived: remainingChars = maxBioLength - state.profileData.biography.length;

  function handleInputChange(field, value) {
    if (field === "biography" && value.length > maxBioLength) return;
    state.profileData[field] = value;
  }
</script>

<Dialog.Root>
  <Dialog.Trigger asChild>
    <button
      class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
    >
      Edit Profile
    </button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs" />
    <Dialog.Positioner
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <Dialog.Content
        class="relative w-full max-w-lg rounded-lg bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
      >
        <Dialog.CloseTrigger asChild>
          <button
            class="absolute right-4 top-4 z-10 p-2 bg-black/20 rounded-full text-white hover:bg-black/30 transition-colors cursor-pointer"
          >
            <X class="h-4 w-4" />
          </button>
        </Dialog.CloseTrigger>

        <div>
          <!-- Cover Photo -->
          <div class="relative h-32">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=300&fit=crop&crop=center"
              alt="Cover"
              class="w-full h-full object-cover"
            />
            <button
              class="absolute top-4 right-16 p-2 bg-black/20 rounded-full text-white hover:bg-black/30 transition-colors"
            >
              <Edit3 class="h-4 w-4" />
            </button>
          </div>

          <!-- Profile Section -->
          <div class="px-6 pb-6">
            <!-- Profile Photo -->
            <div class="relative -mt-12 mb-6">
              <div class="relative w-24 h-24">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                  alt="Profile"
                  class="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 object-cover"
                />
                <button
                  class="absolute bottom-0 right-0 p-1.5 bg-gray-900 dark:bg-white rounded-full text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <Edit3 class="h-3 w-3" />
                </button>
              </div>
            </div>

            <Dialog.Title
              class="text-xl font-semibold text-gray-900 dark:text-white mb-6"
            >
              Edit profile
            </Dialog.Title>

            <!-- Form Fields -->
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-3">
                <div class="space-y-1">
                  <label
                    class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    value={state.profileData.firstName}
                    on:input={(e) =>
                      handleInputChange("firstName", e.target.value)}
                    class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>

                <div class="space-y-1">
                  <label
                    class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    value={state.profileData.lastName}
                    on:input={(e) =>
                      handleInputChange("lastName", e.target.value)}
                    class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label
                  class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  Username
                </label>
                <div class="relative">
                  <input
                    type="text"
                    value={state.profileData.username}
                    on:input={(e) =>
                      handleInputChange("username", e.target.value)}
                    class="w-full px-3 py-2 pr-10 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                  <Check
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600 dark:text-green-400"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label
                  class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  Website
                </label>
                <div class="flex">
                  <span
                    class="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm rounded-l-md"
                  >
                    https://
                  </span>
                  <input
                    type="text"
                    value={state.profileData.website}
                    on:input={(e) =>
                      handleInputChange("website", e.target.value)}
                    class="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-r-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label
                  class="block text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  Biography
                </label>
                <textarea
                  value={state.profileData.biography}
                  on:input={(e) =>
                    handleInputChange("biography", e.target.value)}
                  rows={3}
                  class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none"
                ></textarea>
                <div class="text-right">
                  <span class="text-xs text-gray-500 dark:text-gray-400">
                    {remainingChars} characters left
                  </span>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-3 mt-6">
              <Dialog.CloseTrigger asChild>
                <button
                  class="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center"
                >
                  Cancel
                </button>
              </Dialog.CloseTrigger>

              <Dialog.CloseTrigger asChild>
                <button
                  class="px-4 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium"
                >
                  Save changes
                </button>
              </Dialog.CloseTrigger>
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
