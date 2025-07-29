<script lang="ts">
  import { HoverCard } from "@ark-ui/svelte/hover-card";
  import { Portal } from "@ark-ui/svelte/portal";
  import { Star, ShoppingCart, Heart, Truck } from "lucide-svelte";
</script>

<div class="flex items-center gap-4 p-6">
  <HoverCard.Root>
    <HoverCard.Trigger class="cursor-pointer">
      <div
        class="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop"
          alt="Wireless Headphones"
          class="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
    </HoverCard.Trigger>

    <Portal>
      <HoverCard.Positioner>
        <HoverCard.Content
          class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden w-80"
        >
          <!-- Product Image -->
          <div class="aspect-square bg-gray-100 dark:bg-gray-800">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
              alt="Wireless Headphones"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Product Info -->
          <div class="p-4 space-y-4">
            <div class="space-y-2">
              <h3
                class="text-lg font-semibold text-gray-900 dark:text-gray-100"
              >
                Premium Wireless Headphones
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                High-quality wireless headphones with active noise cancellation
                and 30-hour battery life.
              </p>
            </div>

            <!-- Rating -->
            <div class="flex items-center gap-2">
              <div class="flex items-center">
                {#each Array.from({ length: 5 }) as _, i}
                  <Star
                    class="w-4 h-4 {i < 4
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300 dark:text-gray-600'}"
                  />
                {/each}
              </div>
              <span class="text-sm text-gray-600 dark:text-gray-400">(4.8)</span
              >
              <span class="text-sm text-gray-500 dark:text-gray-400"
                >1,247 reviews</span
              >
            </div>

            <!-- Price -->
            <div class="flex items-center gap-2">
              <span class="text-2xl font-bold text-gray-900 dark:text-gray-100"
                >$299</span
              >
              <span
                class="text-lg text-gray-500 dark:text-gray-400 line-through"
                >$399</span
              >
              <span
                class="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs font-medium rounded"
              >
                25% OFF
              </span>
            </div>

            <!-- Features -->
            <div class="space-y-2">
              <div
                class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <Truck class="w-4 h-4" />
                <span>Free shipping</span>
              </div>
              <div
                class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>In stock</span>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex gap-2 pt-2">
              <button
                class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <ShoppingCart class="w-4 h-4" />
                Add to Cart
              </button>
              <button
                class="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Heart class="w-4 h-4" />
              </button>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard.Root>

  <div class="space-y-1">
    <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100">
      Premium Wireless Headphones
    </h4>
    <p class="text-sm text-gray-600 dark:text-gray-400">$299</p>
  </div>
</div>
