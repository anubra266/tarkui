import * as fs from "fs";
import * as path from "path";
import { components } from "../lib/components";

const frameworks = ["react", "vue", "solid", "svelte"];

function generateRegistryData() {
  const registryData: Record<
    string,
    Record<string, Record<string, string>>
  > = {};
  const registryDir = path.join(process.cwd(), "components/registry");

  console.log("Building registry data...");

  // Read all component directories
  for (const component of components) {
    const slug = component.slug;

    if (!registryData[slug]) {
      registryData[slug] = {};
    }

    for (const framework of frameworks) {
      const frameworkDir = path.join(registryDir, framework, slug);

      if (!fs.existsSync(frameworkDir)) {
        console.warn(`Directory not found: ${frameworkDir}`);
        continue;
      }

      if (!registryData[slug][framework]) {
        registryData[slug][framework] = {};
      }

      const files = fs.readdirSync(frameworkDir);

      for (const file of files) {
        const filePath = path.join(frameworkDir, file);
        const exampleName = path.parse(file).name;

        if (fs.statSync(filePath).isFile()) {
          try {
            const sourceCode = fs.readFileSync(filePath, "utf-8");
            registryData[slug][framework][exampleName] = sourceCode;
            console.log(`✓ Added ${framework}/${slug}/${exampleName}`);
          } catch (error) {
            console.warn(`Failed to read ${filePath}:`, error);
          }
        }
      }
    }
  }

  // Write the registry data to a file (for build-time access)
  const libDir = path.join(process.cwd(), "lib");
  const registryDataFile = path.join(libDir, "registry-data.ts");

  const registryDataContent = `// Auto-generated file - do not edit manually
// Generated at ${new Date().toISOString()}

export const REGISTRY_DATA: {
  [slug: string]: {
    [framework: string]: {
      [exampleName: string]: string;
    };
  };
} = ${JSON.stringify(registryData, null, 2)};
`;

  fs.writeFileSync(registryDataFile, registryDataContent);
  console.log(`✓ Generated registry data at ${registryDataFile}`);

  return registryData;
}

function generateStaticRegistryFiles() {
  const registryData = generateRegistryData();

  console.log("\nGenerating static registry files...");

  // Create public/r directory structure
  const publicDir = path.join(process.cwd(), "public");
  const rDir = path.join(publicDir, "r");

  if (!fs.existsSync(rDir)) {
    fs.mkdirSync(rDir, { recursive: true });
  }

  // Generate static JSON files for each component/framework/example
  for (const [slug, componentData] of Object.entries(registryData)) {
    for (const [framework, frameworkData] of Object.entries(componentData)) {
      const frameworkDir = path.join(rDir, framework, slug);

      if (!fs.existsSync(frameworkDir)) {
        fs.mkdirSync(frameworkDir, { recursive: true });
      }

      for (const [exampleName, sourceCode] of Object.entries(frameworkData)) {
        // Get file extension for the framework
        const getFileExtension = (fw: string) => {
          switch (fw) {
            case "vue":
              return "vue";
            case "svelte":
              return "svelte";
            case "solid":
            case "react":
            default:
              return "tsx";
          }
        };

        // Get dependencies for the framework
        const getDependencies = (fw: string) => {
          const arkUi = `@ark-ui/${fw}`;
          const lucideMap: Record<string, string> = {
            react: "lucide-react",
            vue: "lucide-vue-next",
            solid: "lucide-solid",
            svelte: "lucide-svelte",
          };

          const lucidePackage = lucideMap[fw] || "lucide-react";
          return [arkUi, lucidePackage];
        };

        const fileExtension = getFileExtension(framework);
        const fileName = `${exampleName}.${fileExtension}`;
        const dependencies = getDependencies(framework);

        // Create the shadcn-compatible registry response
        const registryItem = {
          $schema: "https://ui.shadcn.com/schema/registry-item.json",
          name: slug,
          type: "registry:component",
          dependencies: dependencies,
          files: [
            {
              path: `components/registry/${framework}/${slug}/${fileName}`,
              target: `components/${slug}/${fileName}`,
              content: sourceCode,
              type: "registry:component",
            },
          ],
          meta: {
            tags: [slug, "ark-ui"],
            colSpan: 2,
          },
        };

        const jsonFilePath = path.join(frameworkDir, `${exampleName}.json`);
        fs.writeFileSync(jsonFilePath, JSON.stringify(registryItem, null, 2));
        console.log(
          `✓ Generated static file: /r/${framework}/${slug}/${exampleName}.json`
        );
      }
    }
  }

  console.log("\n✅ All static registry files generated successfully!");
}

function watchRegistryFiles() {
  const registryDir = path.join(process.cwd(), "components/registry");

  console.log(`🔍 Watching registry files in ${registryDir}...`);
  console.log("Registry will rebuild automatically when files change\n");

  // Initial build
  generateStaticRegistryFiles();

  let timeoutId: NodeJS.Timeout | null = null;

  // Watch for changes
  fs.watch(registryDir, { recursive: true }, (eventType, filename) => {
    if (
      filename &&
      (filename.endsWith(".tsx") ||
        filename.endsWith(".vue") ||
        filename.endsWith(".svelte") ||
        filename.endsWith(".ts"))
    ) {
      // Debounce multiple rapid changes
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        console.log(`\n📝 File changed: ${filename}`);
        console.log("🔄 Rebuilding registry...\n");

        try {
          generateStaticRegistryFiles();
          console.log("✅ Registry rebuilt successfully!\n");
        } catch (error) {
          console.error("❌ Error rebuilding registry:", error);
        }
      }, 300); // 300ms debounce
    }
  });
}

// Parse command line arguments
const args = process.argv.slice(2);
const isWatchMode = args.includes("--watch") || args.includes("-w");

// Run the appropriate mode
if (require.main === module) {
  if (isWatchMode) {
    watchRegistryFiles();
  } else {
    generateStaticRegistryFiles();
  }
}

export {
  generateRegistryData,
  generateStaticRegistryFiles,
  watchRegistryFiles,
};
