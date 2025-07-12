"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const FRAMEWORK_STORAGE_KEY = "tarkui-framework";
const DEFAULT_FRAMEWORK = "react";

export function useFramework() {
  const [framework, setFrameworkState] = useState<string>(DEFAULT_FRAMEWORK);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Get framework from local storage
  const getStoredFramework = (): string => {
    if (typeof window === "undefined") return DEFAULT_FRAMEWORK;
    try {
      return localStorage.getItem(FRAMEWORK_STORAGE_KEY) || DEFAULT_FRAMEWORK;
    } catch {
      return DEFAULT_FRAMEWORK;
    }
  };

  // Save framework to local storage
  const saveFramework = (newFramework: string) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(FRAMEWORK_STORAGE_KEY, newFramework);
    } catch {
      // Silently fail if localStorage is not available
    }
  };

  // Get current framework from URL or storage
  const getCurrentFramework = (): string => {
    // 1. Check search params first (highest priority)
    const searchParamFramework = searchParams.get("framework");
    if (searchParamFramework) {
      return searchParamFramework;
    }

    // 2. Check URL path for component pages
    const pathMatch = pathname.match(/^\/components\/([^\/]+)/);
    if (pathMatch) {
      return pathMatch[1];
    }

    // 3. Fall back to stored framework
    return getStoredFramework();
  };

  // Initialize framework on mount
  useEffect(() => {
    const currentFramework = getCurrentFramework();
    setFrameworkState(currentFramework);
    setIsLoaded(true);
  }, [searchParams, pathname]);

  // Update framework and handle navigation
  const setFramework = (newFramework: string) => {
    setFrameworkState(newFramework);
    saveFramework(newFramework);

    // Handle navigation based on current page
    if (
      pathname.startsWith("/components/") &&
      pathname.split("/").length >= 4
    ) {
      // On component page - update framework in URL path
      const pathParts = pathname.split("/");
      pathParts[2] = newFramework;
      router.push(pathParts.join("/"));
    } else {
      // On any other page - update search params
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.set("framework", newFramework);
      router.push(`${pathname}?${newSearchParams.toString()}`);
    }
  };

  return {
    framework,
    setFramework,
    isLoaded,
  };
}
