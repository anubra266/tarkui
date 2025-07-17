import { ReactElement } from "react";

export interface ComponentExampleMeta {
  name: string;
  title: string;
  span?: number;
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
    // Load the manifest for this component
    const manifestModule = await import(
      `@/components/registry/manifest/${slug}.ts`
    );
    const manifest = manifestModule.default;

    // Return the number of examples
    return manifest.examples.length;
  } catch (error) {
    console.warn(`Failed to load manifest for ${slug}:`, error);
    return 1; // Default to 1 if manifest not found
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
