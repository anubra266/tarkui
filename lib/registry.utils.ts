import { components } from "./components";
import type { ComponentManifest } from "./registry";

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

const frameworkMap: Record<string, string> = {
  react: "r",
  vue: "v",
  solid: "s",
  svelte: "sv",
};

const reverseFrameworkMap: Record<string, string> = {
  r: "react",
  v: "vue",
  s: "solid",
  sv: "svelte",
};

/**
 * Loads the manifest for a component (shared function to avoid redundancy)
 * @param slug The component slug
 * @returns The component manifest or null if not found
 */
export async function loadComponentManifest(
  slug: string
): Promise<ComponentManifest | null> {
  try {
    const manifestModule = await import(
      `@/components/registry/manifest/${slug}.ts`
    );
    return manifestModule.default;
  } catch (error) {
    console.warn(`Failed to load manifest for ${slug}:`, error);
    return null;
  }
}

/**
 * Gets the example name by its index in a component manifest
 * @param slug The component slug
 * @param index The index of the example in the manifest
 * @returns The example name or null if not found
 */
export async function getExampleNameByIndex(
  slug: string,
  index: number
): Promise<string | null> {
  const manifest = await loadComponentManifest(slug);
  if (!manifest || index < 0 || index >= manifest.examples.length) {
    return null;
  }

  return manifest.examples[index].name;
}

/**
 * Constructs a registry URL for a specific component example using example index
 * @param framework The framework (react, vue, solid, svelte)
 * @param slug The component slug
 * @param exampleIndex The example index in the manifest
 * @returns The complete registry URL
 */
export function getRegistryUrlByIndex(
  framework: string,
  slug: string,
  exampleIndex: number
): string {
  const baseUrl = getRegistryBaseUrl();
  const f = frameworkMap[framework];
  const componentIndex = components.findIndex((c) => c.slug === slug);

  return `${baseUrl}/r/${f}/${componentIndex}/${exampleIndex}.json`;
}

/**
 * Parses registry URL parameters and returns the actual values
 * @param params The URL parameters with encoded values
 * @returns Object with full framework name, component slug, and example name
 */
export async function getRegistryParams(params: {
  frameworkCode: string; // Short framework code: r, v, s, sv
  componentIndex: string; // Component index number in registry
  exampleIndex: string; // Example index number in component
}): Promise<{
  framework: string; // Full framework name: react, vue, solid, svelte
  slug: string; // Actual component slug: accordion, checkbox, etc.
  example: string; // Actual example name: basic, with-icon, etc.
} | null> {
  const { frameworkCode, componentIndex, exampleIndex } = params;

  // Convert framework short form to full name
  const fullFramework = reverseFrameworkMap[frameworkCode];
  if (!fullFramework) {
    return null;
  }

  // Convert component index to slug
  const componentIndexNum = parseInt(componentIndex, 10);
  if (
    isNaN(componentIndexNum) ||
    componentIndexNum < 0 ||
    componentIndexNum >= components.length
  ) {
    return null;
  }
  const componentSlug = components[componentIndexNum].slug;

  // Convert example index to name
  const exampleIndexNum = parseInt(exampleIndex, 10);
  if (isNaN(exampleIndexNum)) {
    return null;
  }
  const exampleName = await getExampleNameByIndex(
    componentSlug,
    exampleIndexNum
  );
  if (!exampleName) {
    return null;
  }

  return {
    framework: fullFramework,
    slug: componentSlug,
    example: exampleName,
  };
}
