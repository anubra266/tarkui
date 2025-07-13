import { ReactElement } from "react";
import { components } from "./components";
import { REGISTRY_DATA } from "./registry-data";

export interface ComponentExampleMeta {
  name: string;
  title: string;
}

export interface ComponentExample {
  id: string;
  title: string;
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

// Function to get source code for a specific framework (uses static data)
export async function getComponentSource(
  slug: string,
  exampleName: string,
  framework: string
): Promise<string | null> {
  try {
    const componentData = REGISTRY_DATA[slug];
    if (!componentData) {
      console.warn(`No registry data found for component: ${slug}`);
      return null;
    }

    const frameworkData = componentData[framework];
    if (!frameworkData) {
      console.warn(`No ${framework} data found for component: ${slug}`);
      return null;
    }

    const sourceCode = frameworkData[exampleName];
    if (!sourceCode) {
      console.warn(
        `No source code found for ${framework}/${slug}/${exampleName}`
      );
      return null;
    }

    return sourceCode;
  } catch (error) {
    console.error(
      `Failed to get source for ${exampleName} in ${framework}:`,
      error
    );
    return null;
  }
}

// Function to dynamically import all examples for a component
export async function getComponentRegistry(
  slug: string,
  framework: string = "react"
): Promise<ComponentRegistry | null> {
  try {
    // Find the component metadata
    const componentMeta = components.find((c) => c.slug === slug);
    if (!componentMeta) {
      return null;
    }

    // Load shared manifest (always expect one to exist)
    const manifestModule = await import(
      `@/components/registry/manifest/${slug}.ts`
    );
    const manifest = manifestModule.default;

    // Load examples based on manifest (order is determined by array position)
    // Always render React components in the UI, regardless of selected framework
    const examples: ComponentExample[] = [];
    const frameworks = ["react", "vue", "solid", "svelte"];

    for (const exampleMeta of manifest.examples) {
      try {
        // Always import from React directory for rendering
        const exampleModule = await import(
          `@/components/registry/react/${slug}/${exampleMeta.name}.tsx`
        );

        // Fetch source code for all frameworks
        const sourceCode: { [framework: string]: string | null } = {};
        for (const fw of frameworks) {
          sourceCode[fw] = await getComponentSource(slug, exampleMeta.name, fw);
        }

        examples.push({
          id: exampleMeta.name,
          title: exampleMeta.title,
          component: exampleModule.default,
          sourceCode,
        });
      } catch (error) {
        console.warn(
          `Failed to load example ${exampleMeta.name} for ${slug}:`,
          error
        );
      }
    }

    return {
      title: componentMeta.name,
      description: `A growing collection of ${
        examples.length
      } ${componentMeta.name.toLowerCase()} components built with ${
        framework.charAt(0).toUpperCase() + framework.slice(1)
      }.`,
      count: examples.length,
      examples,
    };
  } catch (error) {
    console.error("Error loading component registry:", error);
    return null;
  }
}
