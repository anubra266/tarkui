import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Header } from "@/components/header";
import { getComponentRegistry } from "@/lib/registry.server";
import { ComponentExamples } from "./component-examples";
import { components } from "@/lib/components";

interface ComponentDetailPageProps {
  params: Promise<{
    framework: string;
    slug: string;
  }>;
}

// Generate static paths for all components and frameworks
export async function generateStaticParams() {
  const frameworks = ["react", "vue", "solid", "svelte"];
  const paths = [];

  for (const framework of frameworks) {
    for (const component of components) {
      paths.push({
        framework,
        slug: component.slug,
      });
    }
  }

  return paths;
}

// Generate metadata for each component page
export async function generateMetadata({ params }: ComponentDetailPageProps) {
  const resolvedParams = await params;
  const componentRegistry = await getComponentRegistry(
    resolvedParams.slug,
    resolvedParams.framework
  );

  if (!componentRegistry) {
    return {
      title: "Component Not Found | Tark UI",
      description: "The requested component could not be found.",
      openGraph: {
        images: ["https://tarkui.com/api/og"],
      },
    };
  }

  return {
    title: `${componentRegistry.title} Components - ${
      resolvedParams.framework.charAt(0).toUpperCase() +
      resolvedParams.framework.slice(1)
    } | Tark UI`,
    description: `${componentRegistry.title} Components Built with ${
      resolvedParams.framework.charAt(0).toUpperCase() +
      resolvedParams.framework.slice(1)
    }.`,
  };
}

export default async function ComponentDetailPage({
  params,
}: ComponentDetailPageProps) {
  // Await params before using its properties
  const resolvedParams = await params;

  // Fetch component registry on the server
  const componentRegistry = await getComponentRegistry(
    resolvedParams.slug,
    resolvedParams.framework
  );

  // Show 404 if component not found
  if (!componentRegistry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <Header />

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-6 py-12 pt-32">
        {/* Enhanced Back Button */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 mb-8 group hover:translate-x-1"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Components</span>
        </Link>

        {/* Enhanced Page Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent animate-pulse">
                {componentRegistry.title}
              </span>
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl opacity-50"></div>
          </div>

          {/* Stats Badge */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-100/80 to-gray-200/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-full px-6 py-3">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {componentRegistry.count} Examples Available
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {componentRegistry.examples.map((example, index) => {
            const ExampleComponent = example.component;
            return (
              <div
                key={example.id}
                style={
                  {
                    "--span": example.span,
                  } as React.CSSProperties
                }
                className="lg:col-[span_var(--span)_/_span_var(--span)]"
              >
                <ComponentExamples
                  id={example.id}
                  title={example.title}
                  index={index}
                  sourceCode={example.sourceCode}
                >
                  <ExampleComponent />
                </ComponentExamples>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center py-20 border-t border-gray-300/50 dark:border-gray-800/50 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Didn't find what you were looking for?
            </h2>
            <Link
              href="https://github.com/anubra266/tarkui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 text-lg font-medium">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                  <span>Suggest component</span>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative border-t border-gray-300/50 dark:border-gray-800/50 px-6 py-8 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Tark UI</span>
            <div className="w-1 h-1 bg-gray-500 dark:bg-gray-600 rounded-full"></div>
            <span className="text-xs bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Made with ❤️
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>A project by</span>
            <a
              href="https://github.com/anubra266"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors hover:underline"
            >
              Abraham A
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
