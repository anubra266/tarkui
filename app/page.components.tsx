"use client";

import { useState } from "react";
import { Search, Command } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { components } from "@/lib/components";
import { componentPreviews } from "@/components/component-preview";
import { useFramework } from "@/hooks/use-framework";
import { formatComponentCount } from "@/lib/registry";

interface ComponentsProps {
  counts: Record<string, number>;
}

export function Components({ counts }: ComponentsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { framework } = useFramework();

  const categories = [
    "All",
    ...Array.from(new Set(components.map((c) => c.category))),
  ];

  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="relative max-w-7xl mx-auto px-6 py-20 pt-32">
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Beautiful UI components built with
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Ark UI and Tailwind.
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
          An open-source collection of copy-and-paste components for quickly
          building application UIs.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
          <div className="relative bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-xl p-1 focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1">
            <div className="flex items-center">
              <Search className="ml-4 text-gray-500 dark:text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Quick search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-0 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg px-4 py-4 focus-:ring-0 focus:outline-none"
              />
              <div className="mr-4 flex items-center space-x-1">
                <kbd className="px-2 py-1 text-xs text-gray-600 dark:text-gray-400 bg-gray-200/80 dark:bg-gray-800/80 rounded border border-gray-300/50 dark:border-gray-700/50 flex items-center space-x-1">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-200/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300/50 dark:hover:bg-gray-700/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredComponents.map((component, index) => {
          const PreviewComponent =
            componentPreviews[component.slug as keyof typeof componentPreviews];
          const count = counts[component.slug] || 1;
          return (
            <Link
              key={index}
              href={`/components/${framework}/${component.slug}`}
              className="group relative bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-gray-400/50 dark:hover:border-gray-600/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {component.isNew && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                    New
                  </Badge>
                </div>
              )}

              <div className="aspect-video p-6 flex items-center justify-center relative">
                {PreviewComponent ? <PreviewComponent /> : null}
              </div>

              <div className="p-6 pt-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                  {component.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {formatComponentCount(count)}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Link>
          );
        })}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            No components found matching your search.
          </p>
        </div>
      )}
    </main>
  );
}
