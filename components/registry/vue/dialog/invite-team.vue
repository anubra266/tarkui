<script setup>
import { Dialog } from "@ark-ui/vue/dialog";
import { X, UserPlus, Copy, Check } from "lucide-vue-next";
import { reactive, ref } from "vue";

const state = reactive({
  emails: ["john@acme.com", "sarah@acme.com", ""],
  magicLink: "https://app.example.com/invite/abc123",
  copied: false,
});

function addEmailField() {
  state.emails.push("");
}

function updateEmail(index, value) {
  state.emails[index] = value;
}

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(state.magicLink);
    state.copied = true;
    setTimeout(() => (state.copied = false), 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <button
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
      >
        Invite Team
      </button>
    </Dialog.Trigger>
    <Teleport to="body">
      <Dialog.Backdrop
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      />
      <Dialog.Positioner
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <Dialog.Content
          class="relative w-full max-w-sm rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg"
        >
          <Dialog.CloseTrigger as-child>
            <button
              class="absolute right-3 top-3 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
            >
              <X class="h-4 w-4" />
            </button>
          </Dialog.CloseTrigger>

          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
              >
                <UserPlus class="h-5 w-5 text-gray-600 dark:text-white" />
              </div>
              <div class="space-y-1">
                <Dialog.Title
                  class="text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Invite team members
                </Dialog.Title>
                <Dialog.Description
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  Invite colleagues to join your workspace.
                </Dialog.Description>
              </div>
            </div>

            <div class="space-y-4">
              <div class="space-y-3">
                <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                  Invite via email
                </h3>

                <div class="space-y-2">
                  <input
                    v-for="(email, index) in state.emails"
                    :key="index"
                    type="email"
                    :placeholder="index === 2 ? 'email@acme.com' : ''"
                    :value="email"
                    @input="(e) => updateEmail(index, e.target.value)"
                    class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                  />
                </div>

                <button
                  @click="addEmailField"
                  class="text-sm text-gray-900 dark:text-white underline hover:no-underline transition-all"
                >
                  + Add another
                </button>

                <Dialog.CloseTrigger as-child>
                  <button
                    class="w-full px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center"
                  >
                    Send invites
                  </button>
                </Dialog.CloseTrigger>
              </div>

              <div class="border-t border-gray-200 dark:border-gray-700 pt-3">
                <h3
                  class="text-sm font-medium text-gray-900 dark:text-white mb-2"
                >
                  Invite via magic link
                </h3>
                <div class="flex">
                  <input
                    type="text"
                    :value="state.magicLink"
                    readonly
                    class="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
                  />
                  <button
                    @click="copyToClipboard"
                    class="relative px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Copy
                      :class="`h-4 w-4 text-gray-600 dark:text-gray-400 transition-all duration-200 ${
                        state.copied ? 'scale-0' : 'scale-100'
                      }`"
                    />
                    <Check
                      :class="`absolute inset-0 m-auto h-4 w-4 text-green-600 dark:text-green-400 transition-all duration-200 ${
                        state.copied ? 'scale-100' : 'scale-0'
                      }`"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
