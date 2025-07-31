import { ReactElement } from "react";
import { loadComponentManifest } from "./registry.utils";

export interface ComponentExampleMeta {
  name: string;
  title: string;
  span?: number;
  cssVars?: Record<"theme", Record<string, string>>;
  css?: Record<string, Record<string, any>>;
}

export interface ComponentExample {
  id: string;
  title: string;
  span?: number;
  component: () => ReactElement;
  sourceCode: {
    [framework: string]: string | null;
  };
}

export interface ComponentManifest {
  examples: ComponentExampleMeta[];
}

export interface ComponentRegistry {
  title: string;
  description: string;
  count: number;
  examples: ComponentExample[];
}

// Dynamic component count functions
export async function getComponentCount(slug: string): Promise<number> {
  try {
    // Load the manifest using centralized function
    const manifest = await loadComponentManifest(slug);
    if (!manifest) {
      return 0; // Default to 1 if manifest not found
    }

    // Return the number of examples
    return manifest.examples.length;
  } catch (error) {
    console.warn(`Failed to load manifest for ${slug}:`, error);
    return 0; // Default to 1 if manifest not found
  }
}

export function formatComponentCount(count: number): string {
  return count === 1 ? "1 Component" : `${count} Components`;
}

// Function to get counts for all components at once
export async function getAllComponentCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};

  // Import the components list to get all available components
  const { components } = await import("@/lib/components");

  // Get counts for each component
  await Promise.all(
    components.map(async (component) => {
      counts[component.slug] = await getComponentCount(component.slug);
    })
  );

  return counts;
}

// Function to get total number of examples across all components
export async function getTotalExampleCount(): Promise<number> {
  const counts = await getAllComponentCounts();
  return Object.values(counts).reduce((total, count) => total + count, 0);
}
