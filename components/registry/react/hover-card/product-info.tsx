"use client";

import { HoverCard } from "@ark-ui/react/hover-card";
import { Portal } from "@ark-ui/react/portal";
import {
  Star,
  ShoppingCart,
  Truck,
  Smartphone,
  Headphones,
} from "lucide-react";

export default function ProductInfo() {
  return (
    <div className="flex items-center justify-center min-h-32 p-4">
      <div className="grid grid-cols-2 gap-8 max-w-2xl">
        {/* Product 1 - Smartphone */}
        <HoverCard.Root>
          <HoverCard.Trigger className="group cursor-pointer">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600">
              <div className="w-24 h-24 mx-auto bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 flex items-center justify-center shadow-lg">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Smartphone
              </h3>
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                  4.8
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                $899
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Free shipping
              </p>
            </div>
          </HoverCard.Trigger>
          <Portal>
            <HoverCard.Positioner>
              <HoverCard.Content className="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out border border-gray-200 dark:border-gray-700 [--hover-card-background:#ffffff] dark:[--hover-card-background:#111827] bg-(--hover-card-background) rounded-lg shadow-xl p-6 max-w-sm z-50">
                <HoverCard.Arrow className="[--arrow-size:10px] [--arrow-background:var(--hover-card-background)]">
                  <HoverCard.ArrowTip className="border-l border-t border-gray-200 dark:border-gray-700" />
                </HoverCard.Arrow>

                <div className="space-y-4">
                  {/* Product Header */}
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        Smartphone
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          4.8 (124 reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• 6.7" Super Retina XDR display</li>
                      <li>• A17 Pro chip with 6-core GPU</li>
                      <li>• Pro camera system</li>
                      <li>• All-day battery life</li>
                    </ul>
                  </div>

                  {/* Price & Actions */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          $899
                        </span>
                        <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                          <Truck className="w-4 h-4" />
                          <span>Free shipping</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </HoverCard.Content>
            </HoverCard.Positioner>
          </Portal>
        </HoverCard.Root>

        {/* Product 2 - Headphones */}
        <HoverCard.Root>
          <HoverCard.Trigger className="group cursor-pointer">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600">
              <div className="w-24 h-24 mx-auto bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl mb-4 flex items-center justify-center shadow-lg">
                <Headphones className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Headphones
              </h3>
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star className="w-4 h-4 text-gray-300" />
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                  4.2
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                $299
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Free shipping
              </p>
            </div>
          </HoverCard.Trigger>
          <Portal>
            <HoverCard.Positioner>
              <HoverCard.Content className="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out border border-gray-200 dark:border-gray-700 [--hover-card-background:#ffffff] dark:[--hover-card-background:#111827] bg-(--hover-card-background) rounded-lg shadow-xl p-6 max-w-sm z-50">
                <HoverCard.Arrow className="[--arrow-size:10px] [--arrow-background:var(--hover-card-background)]">
                  <HoverCard.ArrowTip className="border-l border-t border-gray-200 dark:border-gray-700" />
                </HoverCard.Arrow>

                <div className="space-y-4">
                  {/* Product Header */}
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                      <Headphones className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        Headphones
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          {[1, 2, 3, 4].map((star) => (
                            <Star
                              key={star}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                          <Star className="w-4 h-4 text-gray-300" />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          4.2 (89 reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Active noise cancellation</li>
                      <li>• 30-hour battery life</li>
                      <li>• Premium comfort fit</li>
                      <li>• Hi-Res audio certified</li>
                    </ul>
                  </div>

                  {/* Price & Actions */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          $299
                        </span>
                        <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                          <Truck className="w-4 h-4" />
                          <span>Free shipping</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </HoverCard.Content>
            </HoverCard.Positioner>
          </Portal>
        </HoverCard.Root>
      </div>
    </div>
  );
}
