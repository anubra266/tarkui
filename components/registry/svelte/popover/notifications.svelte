<script lang="ts">
  import { Popover } from "@ark-ui/svelte/popover";
  import { Portal } from "@ark-ui/svelte/portal";
  import { Bell } from "lucide-svelte";

  const mockNotifications = [
    {
      id: 1,
      user: "Maya Rodriguez",
      action: "liked your post about",
      target: "Modern design principles in 2024.",
      time: "2 minutes ago",
      avatar: "https://i.pravatar.cc/40?img=12",
      unread: true,
    },
    {
      id: 2,
      user: "David Kim",
      action: "started following you and",
      target: "commented on your portfolio.",
      time: "1 hour ago",
      avatar: "https://i.pravatar.cc/40?img=15",
      unread: true,
    },
    {
      id: 3,
      user: "Lisa Thompson",
      action: "invited you to join",
      target: "Creative Designers Workspace.",
      time: "3 hours ago",
      avatar: "https://i.pravatar.cc/40?img=20",
      unread: false,
    },
    {
      id: 4,
      user: "Marcus Johnson",
      action: "tagged you in a photo from",
      target: "Design Conference 2024.",
      time: "1 day ago",
      avatar: "https://i.pravatar.cc/40?img=25",
      unread: false,
    },
    {
      id: 5,
      user: "Anna Petrov",
      action: "shared your article",
      target: "Building accessible web interfaces.",
      time: "3 days ago",
      avatar: "https://i.pravatar.cc/40?img=30",
      unread: false,
    },
    {
      id: 6,
      user: "Jordan Miller",
      action: "reacted to your story about",
      target: "Remote work productivity tips.",
      time: "1 week ago",
      avatar: "https://i.pravatar.cc/40?img=35",
      unread: false,
    },
  ];

  let notifications = mockNotifications;
  $: unreadCount = notifications.filter((n) => n.unread).length;

  const markAllAsRead = () => {
    notifications = notifications.map((n) => ({ ...n, unread: false }));
  };
</script>

<Popover.Root>
  <Popover.Trigger
    class="relative inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    <Bell size={20} />
    {#if unreadCount > 0}
      <span
        class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white"
      >
        {unreadCount}
      </span>
    {/if}
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content
        class="z-50 w-80 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
      >
        <Popover.Arrow
          class="[--arrow-size:12px] [--arrow-background:theme(colors.white)] dark:[--arrow-background:theme(colors.gray.800)]"
        >
          <Popover.ArrowTip
            class="border-t border-l border-gray-200 dark:border-gray-700"
          />
        </Popover.Arrow>
        <!-- Header -->
        <div
          class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 p-3"
        >
          <Popover.Title
            class="text-lg font-semibold text-gray-900 dark:text-gray-100"
          >
            Notifications
          </Popover.Title>
          {#if unreadCount > 0}
            <button
              on:click={markAllAsRead}
              class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none focus:underline"
            >
              Mark all as read
            </button>
          {/if}
        </div>

        <!-- Notifications List -->
        <div class="max-h-80 overflow-y-auto">
          {#each notifications as notification (notification.id)}
            <div
              class="relative border-b border-gray-100 dark:border-gray-700 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 {notification.unread
                ? 'bg-blue-50/50 dark:bg-blue-900/10'
                : ''}"
            >
              <div class="flex gap-3">
                <!-- Avatar -->
                <img
                  src={notification.avatar}
                  alt={notification.user}
                  class="h-8 w-8 flex-shrink-0 rounded-full object-cover"
                />

                <!-- Content -->
                <div class="min-w-0 flex-1">
                  <p class="text-sm text-gray-900 dark:text-gray-100">
                    <span class="font-medium">{notification.user}</span>
                    {notification.action}
                    <span class="font-medium">{notification.target}</span>
                  </p>
                  <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {notification.time}
                  </p>
                </div>

                <!-- Unread indicator -->
                {#if notification.unread}
                  <div
                    class="flex h-2 w-2 flex-shrink-0 items-center justify-center"
                  >
                    <div class="h-2 w-2 rounded-full bg-blue-500" />
                  </div>
                {/if}
              </div>
            </div>
          {/each}
        </div>

        <!-- Footer -->
        <div class="border-t border-gray-200 dark:border-gray-700 p-3">
          <button
            class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View all notifications
          </button>
        </div>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>
