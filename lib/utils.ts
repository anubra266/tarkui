import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Gets the base URL for the registry based on the environment
 * @returns The base URL (production: https://tarkui.com, development: http://localhost:3000)
 */
export function getRegistryBaseUrl(): string {
  // Check if we're in production
  if (process.env.NODE_ENV === "production") {
    return "https://tarkui.com";
  }

  // For development, use localhost
  return "http://localhost:3000";
}

/**
 * Constructs a registry URL for a specific component example
 * @param framework The framework (react, vue, solid, svelte)
 * @param slug The component slug
 * @param exampleId The example identifier
 * @returns The complete registry URL
 */
export function getRegistryUrl(
  framework: string,
  slug: string,
  exampleId: string
): string {
  const baseUrl = getRegistryBaseUrl();
  return `${baseUrl}/r/${framework}/${slug}/${exampleId}.json`;
}
