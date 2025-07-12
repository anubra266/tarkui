import { NextRequest, NextResponse } from "next/server";
import { getComponentSource } from "@/lib/registry";

interface RouteParams {
  params: {
    framework: string;
    slug: string;
    example: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { framework, slug, example } = params;

    // Remove .json extension if present
    const exampleName = example.replace(/\.json$/, "");

    // Get the source code for the specific framework and example
    const sourceCode = await getComponentSource(slug, exampleName, framework);

    if (!sourceCode) {
      return NextResponse.json(
        { error: "Component not found" },
        { status: 404 }
      );
    }

    // Get file extension for the framework
    const getFileExtension = (fw: string): string => {
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
    const getDependencies = (fw: string): string[] => {
      const arkUi = `@ark-ui/${fw}`;
      const lucideMap = {
        react: "lucide-react",
        vue: "lucide-vue-next",
        solid: "lucide-solid",
        svelte: "lucide-svelte",
      };

      const lucidePackage =
        lucideMap[fw as keyof typeof lucideMap] || "lucide-react";
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

    return NextResponse.json(registryItem);
  } catch (error) {
    console.error("Error generating registry item:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
