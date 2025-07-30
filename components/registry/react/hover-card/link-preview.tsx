"use client";

import { HoverCard } from "@ark-ui/react/hover-card";
import { Portal } from "@ark-ui/react/portal";
import { ExternalLink, Clock } from "lucide-react";

export default function LinkPreview() {
  return (
    <div className="flex items-center justify-center min-h-32">
      <div className="max-w-md space-y-3 text-gray-700 dark:text-gray-300">
        <p>
          Check out this amazing article about{" "}
          <HoverCard.Root>
            <HoverCard.Trigger className="text-blue-600 hover:text-blue-700 underline cursor-pointer">
              modern web development
            </HoverCard.Trigger>
            <Portal>
              <HoverCard.Positioner>
                <HoverCard.Content className="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out border border-gray-200 dark:border-gray-700 [--hover-card-background:#ffffff] dark:[--hover-card-background:#111827] bg-(--hover-card-background) rounded-lg shadow-lg p-4 max-w-sm z-50">
                  <HoverCard.Arrow className="[--arrow-size:10px] [--arrow-background:var(--hover-card-background)]">
                    <HoverCard.ArrowTip className="border-l border-t border-gray-200 dark:border-gray-700" />
                  </HoverCard.Arrow>

                  {/* Preview Image */}
                  <div className="h-32 bg-linear-to-r from-blue-500 to-purple-600 relative">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="text-xs opacity-90">example.com</div>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    {/* Title & Description */}
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-tight">
                        The Future of Web Development: Trends and Technologies
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                        Explore the latest trends in web development including
                        React Server Components, modern CSS features, and the
                        evolution of JavaScript frameworks.
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>5 min read</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        <span>example.com</span>
                      </div>
                    </div>

                    {/* Action */}
                    <button className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      Read Article
                    </button>
                  </div>
                </HoverCard.Content>
              </HoverCard.Positioner>
            </Portal>
          </HoverCard.Root>{" "}
          that covers the latest trends and best practices.
        </p>
      </div>
    </div>
  );
}
