"use client";

import { HoverCard } from "@ark-ui/react/hover-card";
import { Portal } from "@ark-ui/react/portal";
import { MapPin, Calendar, Users } from "lucide-react";

export default function UserProfile() {
  return (
    <div className="flex items-center justify-center min-h-32">
      <HoverCard.Root>
        <HoverCard.Trigger className="inline-flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
          <img
            src="/placeholder-user.jpg"
            alt="Sarah Chen"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-left">
            <div className="font-medium text-gray-900 dark:text-gray-100">
              Sarah Chen
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              @sarahchen
            </div>
          </div>
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content className="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out border border-gray-200 dark:border-gray-700 [--hover-card-background:#ffffff] dark:[--hover-card-background:#111827] bg-(--hover-card-background) rounded-lg shadow-lg p-4 max-w-sm z-50">
              <HoverCard.Arrow className="[--arrow-size:10px] [--arrow-background:var(--hover-card-background)]">
                <HoverCard.ArrowTip className="border-l border-t border-gray-200 dark:border-gray-700" />
              </HoverCard.Arrow>

              <div className="space-y-4">
                {/* Profile Header */}
                <div className="flex items-start gap-3">
                  <img
                    src="/placeholder-user.jpg"
                    alt="Sarah Chen"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Sarah Chen
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      @sarahchen
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>2.4k followers</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Senior Frontend Developer at TechCorp. Passionate about React,
                  TypeScript, and building beautiful user interfaces.
                </p>

                {/* Details */}
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Joined March 2020</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Follow
                </button>
              </div>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
    </div>
  );
}
