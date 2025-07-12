import { ReactElement } from "react";
import { components } from "./components";

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

// Get file extension for framework
function getFrameworkExtension(framework: string): string {
  switch (framework) {
    case "vue":
      return "vue";
    case "svelte":
      return "svelte";
    case "solid":
    case "react":
    default:
      return "tsx";
  }
}

// Function to get source code for a specific framework (server-side file reading)
export async function getComponentSource(
  slug: string,
  exampleName: string,
  framework: string
): Promise<string | null> {
  try {
    const fileExtension = getFrameworkExtension(framework);
    const filePath = `components/registry/${framework}/${slug}/${exampleName}.${fileExtension}`;

    // Read the actual file content (server-side only)
    if (typeof window !== "undefined") {
      throw new Error("getComponentSource should only be called on the server");
    }

    const fs = await import("fs");
    const path = await import("path");

    const fullPath = path.join(process.cwd(), filePath);

    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}`);
      return null;
    }

    const sourceCode = fs.readFileSync(fullPath, "utf-8");
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
