import { Popover } from "@ark-ui/solid/popover";
import { Portal } from "solid-js/web";
import { Share, Code2, Facebook, Mail, Copy } from "lucide-solid";
import { createSignal } from "solid-js";

export default function PopoverShare() {
  const [copied, setCopied] = createSignal(false);
  const shareUrl = "https://example.com/shared-content";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSocialShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      email: `mailto:?subject=Check this out&body=${encodeURIComponent(
        shareUrl
      )}`,
    };

    if (platform in urls) {
      window.open(
        urls[platform as keyof typeof urls],
        "_blank",
        "width=600,height=400"
      );
    }
  };

  return (
    <Popover.Root>
      <Popover.Trigger class="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <Share size={16} />
        Share
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content class="z-50 w-72 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-lg data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out">
            <Popover.Arrow class="[--arrow-size:12px] [--arrow-background:theme(colors.white)] dark:[--arrow-background:theme(colors.gray.800)]">
              <Popover.ArrowTip class="border-t border-l border-gray-200 dark:border-gray-700" />
            </Popover.Arrow>
            <Popover.Title class="mb-4 text-center text-lg font-semibold text-gray-900 dark:text-gray-100">
              Share code
            </Popover.Title>

            {/* Social Share Buttons */}
            <div class="mb-4 flex justify-center gap-2">
              <button
                onClick={() => handleSocialShare("code")}
                class="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Share code"
              >
                <Code2 size={16} />
              </button>
              <button
                onClick={() => handleSocialShare("twitter")}
                class="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Share on Twitter"
              >
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button
                onClick={() => handleSocialShare("facebook")}
                class="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Share on Facebook"
              >
                <Facebook size={16} />
              </button>
              <button
                onClick={() => handleSocialShare("email")}
                class="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Share via email"
              >
                <Mail size={16} />
              </button>
            </div>

            {/* URL Input with Copy Button */}
            <div class="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 h-9">
              <input
                type="text"
                value={shareUrl}
                readonly
                class="flex-1 bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none px-3"
              />
              <button
                onClick={handleCopy}
                class="flex items-center justify-center rounded-md p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-1"
                aria-label="Copy URL"
              >
                <Copy size={16} />
              </button>
            </div>

            {copied() && (
              <p class="mt-2 text-center text-sm text-green-600 dark:text-green-400">
                Copied to clipboard!
              </p>
            )}
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
