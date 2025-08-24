import { Dialog } from "@ark-ui/solid/dialog";
import { Portal } from "solid-js/web";
import { X } from "lucide-solid";
import { createSignal, createEffect } from "solid-js";

export default function TermsDialog() {
  const [hasReadToBottom, setHasReadToBottom] = createSignal(false);
  let contentRef: HTMLDivElement | undefined;

  const handleScroll = () => {
    const content = contentRef;
    if (!content) return;

    const scrollPercentage =
      content.scrollTop / (content.scrollHeight - content.clientHeight);
    if (scrollPercentage >= 0.99 && !hasReadToBottom()) {
      setHasReadToBottom(true);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(props) => <button {...props()} />}
        class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer inline-flex items-center justify-center"
      >
        Terms & Conditions
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs" />
        <Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content class="relative w-full max-w-lg h-[70vh] rounded-lg bg-white dark:bg-gray-900 shadow-lg flex flex-col">
            <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <Dialog.Title class="text-lg font-semibold text-gray-900 dark:text-white">
                Terms & Conditions
              </Dialog.Title>
              <Dialog.CloseTrigger
                asChild={(props) => <button {...props()} />}
                class="p-1 text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
              >
                <X class="h-4 w-4" />
              </Dialog.CloseTrigger>
            </div>

            <div
              ref={contentRef}
              onScroll={handleScroll}
              class="flex-1 overflow-y-auto p-4 space-y-4"
            >
              <div>
                <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Acceptance of Terms
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  By accessing and using this website, users agree to comply
                  with and be bound by these Terms of Service. Users who do not
                  agree with these terms should discontinue use of the website
                  immediately.
                </p>
              </div>

              <div>
                <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  User Account Responsibilities
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Users are responsible for maintaining the confidentiality of
                  their account credentials. Any activities occurring under a
                  user's account are the sole responsibility of the account
                  holder. Users must notify the website administrators
                  immediately of any unauthorized account access.
                </p>
              </div>

              <div>
                <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Content Usage and Restrictions
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  The website and its original content are protected by
                  intellectual property laws. Users may not reproduce,
                  distribute, modify, create derivative works, or commercially
                  exploit any content without explicit written permission from
                  the website owners.
                </p>
              </div>

              <div>
                <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Limitation of Liability
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  The website provides content "as is" without any warranties.
                  The website owners shall not be liable for direct, indirect,
                  incidental, consequential, or punitive damages arising from
                  user interactions with the platform.
                </p>
              </div>

              <div>
                <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  User Conduct Guidelines
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                  Users must adhere to the following guidelines when using our
                  platform:
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                  <li>Not upload harmful or malicious content</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain respectful communication</li>
                  <li>Report any suspicious activities</li>
                  <li>Follow all applicable local and international laws</li>
                </ul>
              </div>

              <div>
                <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Privacy and Data Protection
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  We are committed to protecting your privacy and personal data.
                  All user information is handled according to our Privacy
                  Policy and applicable data protection regulations. We do not
                  sell or share personal information with third parties without
                  explicit consent.
                </p>
              </div>

              <div>
                <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Termination of Service
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  We reserve the right to terminate or suspend user accounts and
                  access to our services at any time, without prior notice, for
                  conduct that violates these Terms of Service or is harmful to
                  other users or our business interests.
                </p>
              </div>

              <div>
                <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Changes to Terms
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  These Terms of Service may be updated from time to time. Users
                  will be notified of significant changes, and continued use of
                  the website after such changes constitutes acceptance of the
                  modified terms.
                </p>
              </div>
            </div>

            <div class="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700">
              {!hasReadToBottom() ? (
                <p class="text-xs text-gray-500 dark:text-gray-500">
                  Read all terms before accepting.
                </p>
              ) : (
                <div />
              )}

              <div class="flex gap-3">
                <Dialog.CloseTrigger
                  asChild={(props) => <button {...props()} />}
                  class="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center"
                >
                  Cancel
                </Dialog.CloseTrigger>
                <Dialog.CloseTrigger
                  asChild={(props) => <button {...props()} />}
                  disabled={!hasReadToBottom()}
                  class={`px-3 py-1.5 text-sm rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center ${
                    hasReadToBottom()
                      ? "bg-gray-900 dark:bg-gray-600 text-white hover:bg-gray-800 dark:hover:bg-gray-500"
                      : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed"
                  }`}
                >
                  I agree
                </Dialog.CloseTrigger>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
