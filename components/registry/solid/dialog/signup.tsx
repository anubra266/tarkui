import { Dialog } from "@ark-ui/solid/dialog";
import { Portal } from "solid-js/web";
import { X, User } from "lucide-solid";
import { createSignal } from "solid-js";

export default function SignUpDialog() {
  const [formData, setFormData] = createSignal({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center">
          Sign Up
        </button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs" />
        <Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content class="relative w-full max-w-sm rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg">
            <Dialog.CloseTrigger asChild>
              <button class="absolute right-3 top-3 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer">
                <X class="h-4 w-4" />
              </button>
            </Dialog.CloseTrigger>

            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                  <User class="h-5 w-5 text-gray-600 dark:text-white" />
                </div>
                <div class="space-y-1">
                  <Dialog.Title class="text-lg font-semibold text-gray-900 dark:text-white">
                    Create account
                  </Dialog.Title>
                  <Dialog.Description class="text-sm text-gray-600 dark:text-gray-400">
                    Join thousands of users today.
                  </Dialog.Description>
                </div>
              </div>

              <div class="space-y-3">
                <div class="space-y-1">
                  <label class="block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Full name
                  </label>
                  <input
                    type="text"
                    value={formData().fullName}
                    onInput={(e) =>
                      handleInputChange("fullName", e.currentTarget.value)
                    }
                    class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData().email}
                    onInput={(e) =>
                      handleInputChange("email", e.currentTarget.value)
                    }
                    class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    value={formData().password}
                    onInput={(e) =>
                      handleInputChange("password", e.currentTarget.value)
                    }
                    class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>

                <Dialog.CloseTrigger asChild>
                  <button class="w-full px-3 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center font-medium">
                    Create account
                  </button>
                </Dialog.CloseTrigger>

                <Dialog.CloseTrigger asChild>
                  <button class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center">
                    Continue with Google
                  </button>
                </Dialog.CloseTrigger>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
